<template>
  <button>
    <slot></slot>
  </button>
</template>
<style scoped>
button,
a {
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  color: var(--main-color);
  position: relative;
  display: inline-block;
  text-align: center;
  text-transform: capitalize;
  margin-top: 20px;
  padding: 10px 30px;
  border-radius: 10px;
  width: max-content;
  margin: 0;
  background-color: var(--color-yellow);

  background-image: linear-gradient(50deg, transparent 50%, #edd64c 50%);
  background-size: 250%;
  transition: all 0.6s ease-in-out;
}

a:hover,
a:active,
button:hover,
button:active {
  background-position: 100%;
}
</style>
