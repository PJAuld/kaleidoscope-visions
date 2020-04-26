<template>
  <section id="gallery">
    <h1>Gallery</h1>
    <div class="gallery">
      <Piece v-for="piece in catalog"
          :key="piece.id"
          :id="piece.id"
          :extension="piece.extension" />
    </div>
  </section>
</template>

<script>
import catalog from '../assets/catalog/catalog';
import Piece from '../components/Piece';

export default {
  components: { Piece },
  data() {
    return {
      title: 'Gallery',
      catalog: catalog.getCatalogData(),
    };
  },
  head() {
    return { title: this.title };
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/main.scss';
</style>
