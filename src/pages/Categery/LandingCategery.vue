<template>
  <section class="landing">
    <div class="container d-flex" v-if="selectitem">
      <h3>{{ selectitem.itemName }}</h3>
      <ul>
        <li>
          <router-link to="/">
            {{ $t("navs.home") }}
          </router-link>
        </li>
        <li>
          <!-- direction rtl -->
          <div v-if="$i18n.locale == 'ar'">
            <v-icon icon="mdi-arrow-left-thin" />
          </div>

          <!-- dirction ltr -->
          <div v-else><v-icon icon="mdi-arrow-right-thin" /></div>
        </li>
        <li>{{ selectitem.itemName }}</li>
      </ul>
    </div>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["id", "selectitem"],
  computed: {
    ...mapGetters({
      Categories: "products/Categories",
    }),
  },
};
</script>
  <style lang="scss" scoped>
.landing {
  position: relative;
  z-index: 1;
  top: -10px;
  background-color: rgb(237 26 44 / 70%);
  height: 11vh;
  color: var(--second-color);
  margin-bottom: var(--margin);
  @media (max-width: 1024px) {
    & {
      height: 17vh;
    }
  }
}
.container {
  justify-content: space-between;
  height: 100%;
  padding-top: 30px;
  text-transform: capitalize;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 768px) {
    & {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 10px;
    }
  }

  h3 {
    font-weight: 400;
    @media (max-width: 768px) {
      & {
        font-size: 18px;
      }
    }
  }
  ul {
    @media (max-width: 768px) {
      & {
        li,
        a {
          font-size: 14px !important;
        }
      }
    }
    li {
      list-style: none;
    }
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    & > :nth-child(1) {
      a {
        color: rgb(237 26 44 / 70%);
        background-color: #fff;
        text-transform: capitalize;
        padding: 10px 10px;
        border-radius: 7px;
      }
    }
    & > :nth-child(3) {
      background-color: rgba(255, 255, 255, 0.15);
      padding: 10px 10px;
      border-radius: 7px;
    }
  }
}
</style>

