<template>
  <section id="home">
    <div class="text">
      <h1>Welcome to Kaleidoscope Visions!</h1>
      <p>Have you been trying to find the right piece that just suits your look
        or your outfits? Look no further, for Nancy can create the "look" you are
        looking for. Whether it be for every day, a special occasion, wedding
        and/or bridal party, prom or what your mood needs, we can do it for you.
        I specialize in one-of-a-kind beaded and wire wrap pieces in precious
        stones, various natural stones, pearls, and sterling silver or
        gold-filled wired applications.</p>
      <p>We also specialize in larger sizes, known as my "Michele Collection",
        for gals finding a hard time for good pieces that fit properly.</p>
      <p>Let's see if we can create the perfect piece for what you need!</p>
    </div>
    <div class="showcase">
      <div class="image">
        <img src="~assets/pieces/0428-na.jpg" />
      </div>
      <div class="image">
        <img src="~assets/pieces/0430-na.jpg" />
      </div>
      <div class="image">
        <img src="~assets/pieces/0464-na.jpg" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return { title: 'Home' };
  },
  head() {
    return { title: `Kaleidoscope Visions - ${this.title}` };
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/main.scss';

.showcase {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  margin: 2rem 0 2rem 0;
}

.image > img {
  @include imageBorder;
  width: 100%;
}
</style>
