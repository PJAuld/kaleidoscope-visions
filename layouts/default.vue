<template>
  <div>
    <Banner />
    <Menu />
    <nuxt />
  </div>
</template>

<script>
import Banner from '~/components/Banner.vue';
import Menu from '~/components/Menu.vue';

export default {
  components: {
    Banner,
    Menu
  }
};
</script>

<style lang="scss">
@import '~/assets/main.scss';

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  background-color: $background-color;
  font-family: Verdana;
}
</style>
