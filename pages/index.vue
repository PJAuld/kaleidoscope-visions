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
    <div class="gallery">
      <Piece v-for="piece in catalog.slice(0, 3)"
          :key="piece.id"
          :id="piece.id"
          :extension="piece.extension" />
    </div>
  </section>
</template>

<script>
import catalog from '../assets/catalog/catalog';
import Piece from '../components/Piece';

export default {
  components: { Piece },
  data() {
    return {
      title: 'Home',
      catalog: catalog.getCatalogData(),
    };
  },
  head() {
    return { title: this.title };
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/main.scss';
</style>
