<template>
  <div class="about">
    <div class="text">
      <h1>About</h1>
      <div class="profile">
        <img src="~assets/images/profile.jpg" />
      </div>
      <div class="text">
        <p>I've been a designer for the past 20 years in various capacities.
          I'm a certified Interior Designer, and have expanded my design concepts
          into other areas, including fashion and jewelry. I've received several
          awards and commendations for my costumes and jewelry.</p>
        <p>I've enjoyed working on the basic levels of combining various natural
          stones, pearls, materials, colors and various techniques of construction,
          specializing in beaded and wire-wrapped designs. I prefer to create a
          one-of-a-kind piece that specializes with specific looks and needs.</p>
        <p>I also specialize in "bigger" sizes for larger gals, with my "Michele's"
          Collection", in honor of a dear passing friend. No longer should you have
          a hard time to find a piece to fit, I have it for you.</p>
        <p>Let me create something special for you!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: { name: 'About' },
}
</script>

<style lang="scss" scoped>
@import '~/assets/main.scss';

.about {
  position: relative;
}

.profile {
  float: right;
  margin-left: 1rem;
}

.profile > img {
  @include imageBorder;
  height: 100%;
}
</style>
