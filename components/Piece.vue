<template>
  <div class="piece-image">
    <img :src="path" />
  </div>
</template>

<script>
export default {
  name: 'Piece',
  props: ['id', 'extension', 'name'],
  computed: {
    path() {
      return require(`../assets/catalog/images/${this.id}.${this.extension}`);
    },
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/main.scss';

.piece-image {
  @include imageBorder;
  height: 190px;
}

.piece-image > img {
  // @include imageBorder;
  width: 100%;
}
</style>
