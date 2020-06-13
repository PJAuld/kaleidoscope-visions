<template>
  <div>
    <section id="home">
      <div class="text">
        <h1>Welcome to Kaleidoscope Visions!</h1>
        <div class="gallery">
          <Piece v-for="piece in catalog.slice(0, 4)"
              :key="piece.id"
              :id="piece.id"
              :extension="piece.extension" />
        </div>
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
    </section>
    <section id="about">
      <div class="text">
        <h1>About</h1>
        <div class="profile">
          <img src="~assets/images/profile.jpg" />
        </div>
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
    </section>
  </div>
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

#about {
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
