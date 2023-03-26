<template>
  <section>
    <heading-section>
      <div>
        {{ $t("placeholder.brand") }}
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
        <Slide v-for="slide in brands" :key="slide">
          <div class="carousel__item container_item">
            <div class="image">
              <!-- sale-->
              <img :src="slide.image" alt="" />
            </div>
            <!-- end image -->
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
export  default defineComponent( {
  props: ["id"],
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      brands: null,
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
    this.Getbrands();
  },
  methods: {
    Getbrands() {
      this.axios({
        method: "GET",
        url: "brands",
      })
        .then((response) => {
          this.brands = response.data.brands;
        })
        .catch((error) => {
          console.log(error);
          // this.$toast.error(`خد بالك وانت بتدخل بياناتك متفرهدنيش`);
        });
    },
  },
});

</script>
<style lang="scss" scoped>
section {
  margin: var(--margin) 0;
}
.brands {
  flex-wrap: wrap;
  margin: var(--margin) auto;
  justify-content: flex-start;
  column-gap: 50px;
  align-items: center;
  .brand_image {
    cursor: pointer;
    img {
      object-fit: contain;
    }
  }
}
</style>
