<template>
  <section class="gallery">
    <h1>Gallery</h1>
    <div
  </section>
</template>

<script>
export default {
  data() {
    return { title: 'Gallery' };
  },
  head() {
    return { title: this.title };
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/main.scss';

// {
//   display: grid;
//   grid-gap: 1rem;
//   grid-template-columns: repeat(3, 1fr);
//   margin: 2rem 0 2rem 0;
// }
</style>
