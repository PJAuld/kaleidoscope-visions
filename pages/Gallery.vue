<template>
  <section class="gallery">
    <h1>Gallery</h1>
  </section>
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
