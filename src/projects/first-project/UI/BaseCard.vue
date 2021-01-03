<template>
  <div>
    <slot></slot>
  </div>
</template>



<style lang="scss" scoped>
div {
  background-color: #ededed;
  padding: 20px 15px;
  border-radius: 5px;
  position: relative;
}

.button {
  position: absolute;
  top: 15px;
  right: 15px;
}
</style>