<template>
  <section class="Highest_Rating">
    <heading-section>
      <div>
        {{ $t("placeholder.HighestRating") }}
      </div>
    </heading-section>
    <v-pagination dir="ltr" v-model="page" :length="pageCount"></v-pagination>
  </section>
  {{ page }}
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
      page: 0,
      pageCount: 0,
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
  watch: {
    page(value) {
      this.getitesmPerPage(value);

    },
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
          console.log("heghest");
          console.log(this.heghest);
        })
        .catch((error) => {
          console.log(error);
          // this.$toast.error(`خد بالك وانت بتدخل بياناتك متفرهدنيش`);
        });
    },
    getitesmPerPage(currPage) {
      this.axios.get(`more-seller`, {
          params: {
            page: currPage,
          },
      }).then((res) => {
        console.log("pagentiaon");
        console.log(res);
        // this.items = res.data.data;
        // this.total = res.data.meta.total;
        this.page = res.data.data.current_page;
        this.pageCount = res.data.data.last_page;
        console.log(this.page);
        console.log(this.pageCount);
      });
    },
  },
  mounted() {
    this.getitesmPerPage(1);
  },
});
</script>

<style lang="scss" >
.Highest_Rating {
  margin: var(--margin) 0;
}
</style>
