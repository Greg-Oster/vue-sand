<template>
  <div>
    <h2>{{ name }}</h2>
    <button @click="toggleShow()">Show</button>
    <ul v-show="show">
      <li>Phone: {{ phone }}</li>
      <li>Email: {{ adress }}</li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "v-friend",
  props: ["name", "phone", "adress"],
  data() {
    return {
      show: true,
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>