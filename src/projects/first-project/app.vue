<template>
  <vWrapper class="first-project">
    <template #title>
      <my-heading />
    </template>
    <template #default>
      <the-resource />
      <!-- <stored-resources :resources="data" /> -->
    </template>
  </vWrapper>
</template>

<script>
// import StoredResources from "./components/StoredResources";
import TheResource from "./components/TheResource";
import MyHeading from "./layouts/MyHeading.vue";

export default {
  components: {TheResource, MyHeading },
  
};
</script>

<style lang="scss" scoped>
.first-project {
  grid-column: 1/3;
}
</style>