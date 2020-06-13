<template>
  <div class="menu-link">
    <n-link v-if="!exteriorLink" :to="link">{{name}}</n-link>
    <a v-if="exteriorLink" target="_blank" :href="link">{{name}}</a>
  </div>
</template>

<script>
export default {
  name: 'MenuLink',
  props: ['exteriorLink', 'name', 'link'],
};
</script>

<style lang="scss" scoped>
@import '~/assets/main.scss';

.menu-link {
  @include imageBorder;
  display: inline-block;
  margin: 3px;
  text-align: center;
  vertical-align: middle;
}

.menu-link > a {
  color: $border-color;
  height: 100%;
  margin: 0 auto;
  text-decoration: none;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  width: 100%;
}

// .menu-link {
//   vertical-align: middle;
// }
//
// .menu-link > a {
//   background: $background-color;
//   color: $border-color;
//   display: inline-block;
//   height: 100%;
//   letter-spacing: 1px;
//   padding: 7px;
//   text-align: center;
//   text-decoration: none;
//   transition-duration: 0.2s;
//   transition-timing-function: ease-in-out;
//   width: 100%;
// }
//
// .menu-link > a:hover {
//   background: $translucent;
//   color: $white;
//   font-weight: bolder;
// }

/* Rainbow background on hover */
// .rainbow-container {
//   height: 42px;
//   overflow: hidden;
//   position: absolute;
//   top: 0;
//   width: 100vw;
//   z-index: -1;
// }
//
// .rainbow-background {
//   animation: menu 20s ease-in-out infinite;
//   background: $rainbow-fill;
//   height: 100%;
//   position: absolute;
//   width: 200vw;
// }
// @keyframes menu {
//   0% { left: -100%; }
//   50% { left: 0%; }
//   100% { left: -100%; }
// }
</style>
