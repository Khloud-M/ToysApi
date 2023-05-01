<template>
  <section class="fil_cart">
    <div class="shopping_cart">
      <table class="table align-middle table-bordered text-center">
        <thead>
          <tr>
            <th scope="col">{{ $t("placeholder.Image") }}</th>
            <th scope="col">{{ $t("placeholder.Name") }}</th>
            <th scope="col">{{ $t("placeholder.Price") }}</th>
            <th scope="col">{{ $t("placeholder.Quantity") }}</th>
            <th scope="col">{{ $t("placeholder.total") }}</th>
            <th scope="col">{{ $t("buttons.Delete") }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in dataOfProduct" :key="item.id">
            <th class="image">
              <img :src="item.image" />
            </th>
            <td>
              {{ item.name }}
            </td>
            <td>{{ item.price }} KWD</td>
            <td>{{ item.qty }}</td>
            <td>{{ item.total_price }}</td>
            <td>
              <button @click="RemoveItem">
                <v-icon icon="mdi-trash-can-outline"></v-icon>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="summary">
      <h5>{{ $t("placeholder.remember6") }}</h5>
      <div class="d-flex justify-content-between">
        <h6>{{ $t("placeholder.subtotal") }}</h6>
        <div class="d-flex">
          <bdi>{{ totalCsot() + " " + "K.W " }}</bdi>
        </div>
      </div>
      <router-link to="/CheckOut">
        <base-button class="btn">
          {{ $t("placeholder.Completepay") }}
        </base-button>
      </router-link>
    </div>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      totall: null,
    };
  },
  computed: {
    ...mapGetters({
      cart: "products/cart",
      dataOfProduct: "products/dataOfProduct",
    }),
  },
  methods: {
    RemoveItem() {
      this.$store.commit("products/RemoveItem", this.i);
      console.log(this.dataOfProduct);
    },
    totalCsot() {
      let price = 0;
      this.dataOfProduct.map((el) => {
        price += el["total_price"];
      });
      return price;
    },
  },
};
</script>

<style lang="scss" scoped>
.fil_cart {
  margin: var(--margin) auto;
  .shopping_cart {
    position: relative;
    border: 1px solid var(--border-color);
    border-radius: 10px;
    border-bottom: none;
    table {
      width: 100%;
      caption-side: bottom;
      border-collapse: collapse;
      thead {
        th {
          padding: 20px 10px;
        }
      }
    }
    .v-icon {
      color: var(--red-color);
      background-color: #fde5ea;
      padding: 18px;
      border-radius: 5px;
    }
    .image {
      width: 150px;
      height: 100px;
      img {
        width: 100%;
      }
    }
  }
}
@media (max-width: 768px) {
  .shopping_cart {
    overflow: auto;
  }
  .image {
    img {
      width: 100%;
    }
  }
}

.summary {
  border: 1px solid var(--border-color);
  padding: 20px 40px;
  border-radius: 15px;
  background-color: var(--bg-color-light);
  width: 37%;
  float: right;
  margin: 15px 0;
  .btn {
    width: 100% !important;
    margin: 20px 0;
  }
  @media (max-width: 768px) {
    & {
      width: 100%;
    }
  }
}
</style>
