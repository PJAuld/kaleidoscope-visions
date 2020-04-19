<template>
  <div class="menu">
    <div class="menu-options">
      <nav>
        <div class="menu-link">
          <n-link to="/">Home</n-link>
        </div>
        <div class="menu-link">
          <n-link to="/">Gallery</n-link>
        </div>
        <div class="menu-link">
          <a target="_blank" href="https://www.etsy.com">Etsy Store</a>
        </div>
        <div class="menu-link">
          <n-link to="/about">About</n-link>
        </div>
        <div class="menu-link">
          <n-link to="/contact">Contact</n-link>
        </div>
      </nav>
    </div>
    <div class="rainbow-container">
      <div class="rainbow-background"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
}
</script>

<style lang="scss" scoped>
@import '~/assets/main.scss';

nav {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  height: 100%;
}

.menu {
  position: relative;
}

.menu-options {
  border-bottom: 2px solid $border-color;
  height: 42px;
  width: 100vw;
}

.menu-link {
  font-size: 1.1rem;
  vertical-align: middle;
}

.menu-link > a {
  background: $background-color;
  color: $border-color;
  display: inline-block;
  height: 100%;
  letter-spacing: 1px;
  padding: 8px;
  text-align: center;
  text-decoration: none;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  width: 100%;
}

.menu-link > a:hover {
  background: $translucent;
  color: $white;
  font-weight: bolder;
}

.rainbow-container {
  height: 42px;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: -1;
}

.rainbow-background {
  animation: menu 20s ease-in-out infinite;
  background: $rainbow-fill;
  height: 100%;
  position: absolute;
  width: 200vw;
}


@keyframes menu {
  0% { left: -100%; }
  50% { left: 0%; }
  100% { left: -100%; }
}
</style>
