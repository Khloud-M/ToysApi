<template>
  <div class="sellect_search d-flex">
    <div class="categery">
      <select class="form-select" aria-label="Default select example">
        <option selected>All Categories</option>
        <option value="1">Car Games</option>
        <option value="2">Intelligence Development Games</option>
        <option value="3">Strategy Games</option>
      </select>
    </div>
    <div class="search">
      <input
        type="search"
        :placeholder="$t('placeholder.Search')"
        v-model="search"
        @blur="rebackWidth"
        @click="changeWidth"
        :style="{ width: Width + 'px' }"
      />
      <v-icon icon="mdi-magnify"></v-icon>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Width: "90",
      search: "",
    };
  },
  methods: {
    changeWidth() {
      this.Width = "160";
    },
    rebackWidth() {
      if (this.search === "") return (this.Width = "90");
      else {
        return (this.Width = "250");
      }
    },
  },
};
</script>

<style lang="scss">
.sellect_search {
  background-color: var(--bg-color-light);
  border-radius: 15px;
  padding: 10px 15px;
  width: 450px;
  justify-content: space-between;
  align-items: center;
  .search {
    input {
      color: var(--light_gray_clr);
      transition: all 0.4s linear;
      border: none;
      font-weight: 500;
      background-color: transparent;
    }
  }
  .categery {
    width: 180px;
    .form-select {
      background-color: transparent;
      border: none;
      border-radius: 0rem;
    }
    .form-select:focus {
      box-shadow: 0 0 0 0;
    }
  }
}
</style>
