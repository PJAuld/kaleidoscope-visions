<template>
  <div class="piece-image">
    <img :src="path" v-on:click="toggleModal()" />
    <div class="modal" v-show="modalOn" v-on:click.self="toggleModal()">
      <img :src="path" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    path() {
      return require(`../assets/catalog/images/${this.id}.${this.extension}`);
    },
  },
  data() {
    return { modalOn: false };
  },
  methods: {
    toggleModal() { this.modalOn = !this.modalOn; },
  },
  name: 'Piece',
  props: ['id', 'extension', 'name'],
}
</script>

<style lang="scss" scoped>
@import '~/assets/main.scss';

.modal {
  background-color: rgba(0, 0, 0, 0.8);
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1;
}

.modal > img {
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.piece-image {
  @include imageBorder;
  height: 190px;
}

.piece-image > img {
  height: auto;
  max-width: 100%;
  min-height: 100%;
  width: auto;
}
</style>
