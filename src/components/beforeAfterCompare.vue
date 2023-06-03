<script setup>
const props = defineProps({
  firstImage: {
    type: String,
    default: "",
  },
})
</script>
<template>
  <div class="compare-container">
    <div class="compare-image-left">
      <img :src="props.firstImage" alt="" />
    </div>
    <div class="compare-image-right"></div>
  </div>
</template>

<style scoped>
.compare-container {
  width: 100%;
}
</style>
