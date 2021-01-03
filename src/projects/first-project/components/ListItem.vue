<template>
  <li>
    <base-card>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <a :href="link">{{ link }}</a>
      <button 
        class="button button--secondary"
        @click="deleteItemm">Delete</button>
    </base-card>
  </li>
</template>

<script>
export default {
  inject:["deleteItem"],
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    link: {
      type: String,
    },
    id:{
      type: String,
    }
  },
  methods: {
    deleteItemm() {
      this.deleteItem(this.id);
    }
  },
};
</script>

<style lang="scss" scoped>
</style>