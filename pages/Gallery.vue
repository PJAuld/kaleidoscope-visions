<template>
  <div class="gallery">
    <h1>Gallery</h1>
  </div>
</template>

<script>
export default {
  data() {
    return { title: 'Gallery' };
  },
  head() {
    return { title: `Kaleidoscope Visions - ${this.title}` };
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/main.scss';
</style>
