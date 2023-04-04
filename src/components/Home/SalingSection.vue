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
        <Slide v-for="slide in Sales" :key="slide">
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
                  <b v-if="slide.sale_price"> {{ slide.sale_price }} KWD </b>
                  <small v-if="slide.price"> {{ slide.price }} KWD</small>
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
  props: ["id"],
  data() {
    return {
      Sales: null,
      IsActive: true,
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
          snapAlign: "center",
        },
      },
    };
  },

  created() {
    this.GetSales();
  },
  methods: {
    GetSales() {
      this.axios({
        method: "GET",
        url: "more-seller",
      })
        .then((response) => {
          this.Sales = response.data.data;
          console.log("Sales");
          // console.log(response.data.data[0].sale_price);
        })
        .catch((error) => {
          console.log("sales");
          console.log(error);
          // this.$toast.error(`خد بالك وانت بتدخل بياناتك متفرهدنيش`);
        });
    },
  },
});
</script>

<style lang="scss" >
.noneDiv {
  display: none;
}
.blockDiv {
  display: block;
}
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
