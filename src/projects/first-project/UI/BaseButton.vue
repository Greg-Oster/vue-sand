<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["type", "mode"],
};
</script>

<style lang="scss" scoped>
button {
  padding: 10px;
  background: #34b570;
  font-weight: 500;
  font-family: inherit;
  font-size: 17px;
  color: #fff;
  border-radius: 5px;
  border: 1px solid transparent;
  cursor: pointer;
}

button:not(:last-child) {
  margin-right: 10px;
}

.active {
    background: transparent;
    color: #34b570;
    border: 1px solid #34b570;
}
</style>