<template>
  <div class="heading">
    <h2 class="container">
      <slot></slot>
    </h2>
    <hr />
  </div>
</template>

<style lang="scss" scoped>
.heading {
  hr {
    border-color: var(--border-color) !important;
    // opacity: 1 !important;
  }
  h2 {
    color: var(--main-color);
    font-size: 24px;
    font-weight: 500;
    text-transform: capitalize;
    position: relative !important;
    @media (max-width: 768px) {
      & {
        font-size: 20px;
      }
    }
  }
  h2::after {
    content: "";
    position: absolute !important;
    width: 180px;
    height: 2px;
    left: 0%;
    bottom: -16px;
    background: var(--color-yellow);
    @media (max-width: 768px) {
      & {
        width: 110px;
        left: 3%;
      }
    }
    @media (min-width: 769px) and (max-width: 1025px) {
      & {
        width: 140px;
        left: 3%;
      }
    }
  }
}
.is-rtl {
  h2::after {
    left: auto;
    right: 0;
  }
}
</style>
