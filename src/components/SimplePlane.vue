<script setup>
// plane
import { Vec2 } from "curtainsjs";
import { useCurtains, Plane } from "vue-curtains";
import { fragmentShader, vertexShader } from "../shaders/simple-plane";
import { onMounted, onUnmounted } from "vue";

let curtains;

useCurtains((c) => {
  curtains = c;
  curtains.setContainer(document.getElementById('SimplePlane'));
});

const mousePosition = new Vec2();
const mouseLastPosition = new Vec2();

const deltas = {
  max: 0,
  applied: 0,
};

const planeProps = {
  vertexShader,
  fragmentShader,
  widthSegments: 20,
  heightSegments: 20,
  uniforms: {
    resolution: {
      // resolution of our plane
      name: "uResolution",
      type: "2f", // notice this is an length 2 array of floats
      value: [0, 0],
    },
    time: {
      // time uniform that will be updated at each draw call
      name: "uTime",
      type: "1f",
      value: 0,
    },
    mousePosition: {
      // our mouse position
      name: "uMousePosition",
      type: "2f", // again an array of floats
      value: mousePosition,
    },
    mouseMoveStrength: {
      // the mouse move strength
      name: "uMouseMoveStrength",
      type: "1f",
      value: 0,
    },
  },
};

// we'll keep a ref to our plane once it's ready
let simplePlane;

const setResolution = (plane) => {
  const planeBBox = plane.getBoundingRect();
  plane.uniforms.resolution.value = [planeBBox.width, planeBBox.height];
};

const onReady = (plane) => {
  // get a ref to our plane
  simplePlane = plane;

  plane.setPerspective(35);

  deltas.max = 2;

  setResolution(plane);
};

const onRender = (plane) => {
  // increment our time uniform
  plane.uniforms.time.value++;

  // decrease both deltas by damping : if the user doesn't move the mouse, effect will fade away
  deltas.applied += (deltas.max - deltas.applied) * 0.02;
  deltas.max += (0 - deltas.max) * 0.01;

  // send the new mouse move strength value
  plane.uniforms.mouseMoveStrength.value = deltas.applied;
};

const onAfterResize = (plane) => {
  setResolution(plane);
};

const onMouseMove = (e) => {
  // bail if curtains has not been instanciate yet
  if (!curtains) return;

  // update mouse last pos
  mouseLastPosition.copy(mousePosition);

  const mouse = new Vec2();

  // get our mouse/touch position
  if (e.targetTouches) {
    mouse.set(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
  } else {
    mouse.set(e.clientX, e.clientY);
  }

  // lerp the mouse position a bit to smoothen the overall effect
  mousePosition.set(
    curtains.lerp(mousePosition.x, mouse.x, 0.3),
    curtains.lerp(mousePosition.y, mouse.y, 0.3)
  );

  // calculate the mouse move strength
  if (mouseLastPosition.x && mouseLastPosition.y) {
    let delta =
      Math.sqrt(
        Math.pow(mousePosition.x - mouseLastPosition.x, 2) +
        Math.pow(mousePosition.y - mouseLastPosition.y, 2)
      ) / 30;
    delta = Math.min(4, delta);
    // update max delta only if it increased
    if (delta >= deltas.max) {
      deltas.max = delta;
    }
  }

  if (simplePlane) {
    // update our mouse position uniform
    simplePlane.uniforms.mousePosition.value = simplePlane.mouseToPlaneCoords(
      mousePosition
    );
  }
};

onMounted(() => {
  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("touchmove", onMouseMove, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("mousemove", onMouseMove);
  window.removeEventListener("touchmove", onMouseMove, { passive: true });
});
</script>

<template>
  <Plane id="SimplePlane"
    :params="planeProps" @render="onRender" @after-resize="onAfterResize" @ready="onReady">
    <img class="hidden" src="https://pbs.twimg.com/media/FyNbPLxaIAAHv7f.jpg" data-sampler="uTexture" alt="專案圖片" />
  </Plane>
</template>

<style scoped>
#SimplePlane {
  width: 80%;
  height: 80vh;
  margin: 10vh auto;
}

#SimplePlane img {
  display: none;
}
</style>