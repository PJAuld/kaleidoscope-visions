<template>
  <div class="banner">
    <img class="bg" src="~assets/images/kaleidoscope-background.jpg" />
    <Logo />
  </div>
</template>

<script>
import Logo from './Logo.vue';
export default {
  components: { Logo },
  name: 'Banner',
};
</script>

<style lang="scss" scoped>
@import '~/assets/main.scss';

.banner {
  border-bottom: 2px solid $border-color;
  border-top: 2px solid $border-color;
  height: 200px;
  overflow: hidden;
  position: relative;
  width: 100vw;
}

.bg {
  animation: rotate 20s ease-in-out infinite;
  position: absolute;
  top: -190%;
  left: -10%;
  z-index: 0;
}
@keyframes rotate {
  0% { transform: rotate(0deg); }
  50% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
}
</style>
