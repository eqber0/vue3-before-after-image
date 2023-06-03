<script setup>
import { ref } from "vue"
const props = defineProps({
  firstImage: {
    type: String,
    default: "",
  },
  secondImage: {
    type: String,
    default: "",
  },
})
const leftImage = ref()
// Make mouse control
function getMousePos(e) {
  const leftWidth = e.offsetX
  leftImage.value.style.width = leftWidth + "px"

  console.log(e)
  // console.log("Offset X: ", e.offsetX)
  // console.log("Screen X: ", e.screenX)
}
</script>
<template>
  <div @mousemove="getMousePos($event)" class="compare-container">
    <div ref="leftImage" class="compare-image-left">
      <img :src="props.firstImage" alt="" />
    </div>
    <div class="compare-divisor"></div>
    <div class="compare-image-right">
      <img :src="props.secondImage" alt="" />
    </div>
  </div>
</template>

<style scoped>
.compare-container {
  min-width: 85vw;
  width: 100%;
  height: 600px;
  overflow: hidden;
  position: relative;
}
.compare-container img {
  min-width: 1920px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.compare-image-left,
.compare-image-right {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.compare-image-left {
  width: 50%;
  position: relative;
  z-index: 2;
}
.compare-image-right {
  width: 100%;
}
.compare-divisor {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: red;
}
</style>
