<template>
  <div class="menu">
    <style>
      :root { --menu-length: {{ menu.length }} }
    </style>
    <nav>
      <MenuLink v-for="link in menu"
          :key="link.name"
          :exteriorLink="link.exterior"
          :name="link.name"
          :link="link.url" />
    </nav>
  </div>
</template>

<script>
import MenuLink from './MenuLink';
export default {
  components: { MenuLink },
  data() {
    return {
      menu: [
        { name: 'Home', url: '/' },
        { name: 'Gallery', url: '/gallery' },
        {
          name: 'Etsy Store',
          url: 'https://www.etsy.com/shop/KaleidoscopeVisionUS',
          exterior: true,
        },
      ],
    };
  },
  name: 'Menu',
}
</script>

<style lang="scss" scoped>
@import '~/assets/main.scss';

nav {
  border-bottom: 2px solid $border-color;
  display: grid;
  grid-template-columns: repeat(var(--menu-length), 1fr);
  height: 42px;
  width: 100vw;
}

.menu {
  position: relative;
}
</style>
