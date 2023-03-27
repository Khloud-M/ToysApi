<template>
  <section class="Highest_Rating">
    <heading-section>
      <div>
        {{ $t("placeholder.HighestRating") }}
      </div>
    </heading-section>
    <div class="container product_item d-flex">
      <Carousel
        :items-to-show="4"
        :wrap-around="true"
        :transition="300"
        :autoplay="2000"
        :breakpoints="breakpoints"
      >
        <Slide v-for="slide in heghest" :key="slide">
          <div class="carousel__item container_item">
            <router-link :to="`/products/${slide.id}`">
              <div class="image">
                <div class="sale">Sale {{ slide.sale_price }}</div>
                <!-- sale-->
                <img :src="slide.image" alt="" />
              </div>
            </router-link>
            <!-- end image -->
            <div class="content_image">
              <h5 class="name">{{ slide.title }}</h5>
              <div class="content_foot d-flex">
                <div class="price">
                  <b> {{ slide.price }} KWD</b>
                  <small> {{ slide.sale_price }} KWD </small>
                </div>
                <button class="btn_cart">
                  <v-icon icon="mdi-basket-fill"> </v-icon>
                </button>
              </div>
            </div>
            <!-- contant_image -->
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default defineComponent({
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      heghest: null,
      breakpoints: {
        320: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        481: {
          itemsToShow: 2,
          snapAlign: "start",
        },
        769: {
          itemsToShow: 3,
          snapAlign: "start",
        },
        1025: {
          itemsToShow: 4,
          snapAlign: "start",
        },
      },
    };
  },
  created() {
    this.GetHeghest();
  },
  methods: {
    GetHeghest() {
      this.axios({
        method: "GET",
        url: "more-ratings",
      })
        .then((response) => {
          this.heghest = response.data.data;
          console.log(this.heghest);
        })
        .catch((error) => {
          console.log(error);
          // this.$toast.error(`خد بالك وانت بتدخل بياناتك متفرهدنيش`);
        });
    },
  },
});
</script>

<style lang="scss" >
.Highest_Rating {
  margin: var(--margin) 0;
}
</style>
