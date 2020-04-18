<template>
  <div class="banner">
    <img class="bg" src="~assets/images/kaleidoscope-background.jpg" />
    <div class="logo">
      <img src="~/assets/images/logo.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
}
</script>

<style lang="scss" scoped>
@import '~/assets/main.scss';

.banner {
  border-bottom: 2px solid $border-color;
  border-top: 2px solid $border-color;
  height: 200px;
  margin-top: 10px;
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

.logo {
  animation: glow 3s linear infinite;
  border-radius: 50%;
  height: 180px;
  left: 50px;
  overflow: hidden;
  position: absolute;
  top: 10px;
  width: 180px;
  z-index: 1;
}
@keyframes glow {
  0% { border: 6px solid #FFDF00; }
  50% { border: 6px solid #fff8c7; }
  100% { border: 6px solid #FFDF00; }
}

.logo > img {
  height: 100%;
  position: absolute;
  width: 100%;
}
</style>
