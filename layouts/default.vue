<template>
  <div>
    <header>
      <Banner />
      <Menu />
    </header>
    <div class="content">
      <nuxt />
    </div>
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
  head() {
    return {
      titleTemplate: '%s - Kaleidoscope Visions'
    }
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
  color: #333333;
}

.content {
  padding: 1rem 5% 0 5%;
}
</style>
