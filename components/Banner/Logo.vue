<template>
  <div class="logo">
    <img src="~/assets/images/logo.jpg" />
  </div>
</template>

<script>
export default { name: 'Logo' };
</script>

<style lang="scss" scoped>
@import '~/assets/main.scss';

.logo {
  animation: glow 10s linear infinite;
  border-radius: 50%;
  border-style: solid;
  border-width: 6px;
  height: 180px;
  left: 10px;
  overflow: hidden;
  position: absolute;
  top: 10px;
  width: 180px;
  z-index: 1;
}
@keyframes glow {
  0% { border-color: #FF0000; }
  18% { border-color: #FF9900; }
  34% { border-color: #FFFF00; }
  50% { border-color: #008000; }
  66% { border-color: #0000FF; }
  82% { border-color: #800080; }
  100% { border-color: #FF0000; }
}

.logo > img {
  height: 100%;
  position: absolute;
  width: 100%;
}
</style>
