<template>
  <div class="icon_categery">
    <button
      class="button-cart"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasExample"
      aria-controls="offcanvasExample"
    >
      <h3>
        <v-icon icon=" mdi-dots-horizontal"> </v-icon>
        {{ $t("navs.Categories") }}
      </h3>
    </button>
    <div
      class="offcanvas offcanvas-start"
      tabindex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">
          {{ $t("navs.Categories") }}
        </h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <hr />
      <div class="offcanvas-body">
        <div v-for="cat in categery" data-bs-dismiss="offcanvas">
          <router-link :to="`/category/${cat.id}`">
            {{ cat.title }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],
  data(){
    return{
      categery:null,
    }
  },
  created() {
    this.GetCategery();
  },
  methods: {
    GetCategery() {
      this.axios({
        method: "GET",
        url: "cats",
      })
        .then((response) => {
          this.categery = response.data.data;
          console.log(this.categery);
        })
        .catch((error) => {
          console.log(error);
          // this.$toast.error(`خد بالك وانت بتدخل بياناتك متفرهدنيش`);
        });
    },
  },
};
</script>
<style lang="scss">
button{
  background: none;
}
.icon_categery {
  cursor: pointer;
  transition: all var(--transtion) ease-in-out;
  &:hover h3,
  &:hover .v-icon {
    color: var(--color-yellow);
  }
  h3 {
    color: var(--main-color);
    font-size: 15px;
    transition: all var(--transtion) ease-in-out;
    .v-icon {
      color: var(--main-color);
      transition: all var(--transtion) ease-in-out;
    }
  }
  .btn-close:focus {
    box-shadow: 0 0 0 0.1rem var(--color-yellow);
  }
  hr {
    border: 1px solid var(--main-color);
  }
  .offcanvas-body {
    div {
      background-color: var(--bg-color-light);
      padding: 10px;
      border-radius: 10px;
      margin: 15px 0;
    }
  }
}
</style>
