<template>
  <section class="emptycart">
    <div class="shopping_cart">
      <table class="table table-bordered">
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
          <tr>
            <td colspan="6">
              <div class="empty_image">
                <img src="@/assets/images/empty-cart.svg" alt="emptycart" />
                <h5>
                  {{ $t("placeholder.emptyCart") }}
                </h5>
              </div>
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
          <h6>{{ $t("placeholder.KWD") }}</h6>
          <span></span>
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
export default {};
</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
  table {
    width: 100% !important;
    .empty_image {
      h5 {
        font-size: 16px;
      }
      width: 150px;
      height: 200px;
      margin: auto;
      img {
        width: 100%;
      }
    }
  }
  .table > :not(caption) > * > * {
    padding: 5px 2px !important;
    font-size: 5px !important;
  }

}
th {
  text-transform: capitalize;
}
.table > :not(caption) > * > * {
  padding: 20px;
}
.empty_image {
  width: 300px;
  margin: auto;

  h5 {
    text-align: center;
  }
  img {
    width: 100%;
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
