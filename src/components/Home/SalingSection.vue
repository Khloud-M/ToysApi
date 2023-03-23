<template>
  <section class="More_Salling">
    <heading-section>
      <div>
        {{ $t("placeholder.moreSale") }}
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
        <Slide v-for="slide in MoreSaling" :key="slide">
          <div class="carousel__item container_item">
            <div class="image">
              <div class="sale">{{ slide.Sale }}</div>
              <!-- sale-->
              <img :src="slide.image" alt="" />
            </div>
            <!-- end image -->
            <div class="content_image">
              <h5 class="name">{{ slide.name }}</h5>
              <div class="content_foot d-flex">
                <div class="price">
                  <b> {{ slide.price }} KWD</b>
                  <small> {{ slide.oldPrice }} KWD </small>
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
import { mapGetters } from "vuex";
import { defineComponent } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  props: ["id"],
  data() {
    return {
      breakpoints: {
        320: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        481:{
          itemsToShow: 2,
          snapAlign: "start",
        },
        769:{
          itemsToShow: 3,
          snapAlign: "start",
        },
        1025:{
          itemsToShow: 4,
          snapAlign: "center",
        }
      },
    };
  },
  computed: {
    ...mapGetters({
      MoreSaling: "products/MoreSaling",
    }),
  },
});
</script>

<style lang="scss" >
.More_Salling {
  margin: var(--margin) 0;
  .carousel {
    width: 100% !important;
  }
  .carousel__prev {
    left: -100px !important;
    @media (max-width: 768px) {
      & {
        left: 0px !important;
        display: none !important;
      }
    }
  }
  .carousel__next {
    color: red !important;
    right: -100px !important;
    @media (max-width: 768px) {
      & {
        right: 0px !important;
        display: none !important;
      }
    }
  }
}
</style>
