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
  margin: 3px;
  position: relative;
  text-align: center;
}

.menu-link > a {
  border-radius: 10px;
  color: $border-color;
  height: 100%;
  left: 0;
  line-height: 150%;
  position: absolute;
  text-decoration: none;
  transition: all 0.3s ease-in;
  vertical-align: middle;
  width: 100%;
}

.menu-link > a:hover {
  background: $translucent;
  color: $white;
}
</style>
