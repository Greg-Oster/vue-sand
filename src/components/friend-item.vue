<template>
  <li>
    <div>
      <h5>{{ name }}</h5>
      <p>Телефон: {{ phone }}</p>
      <p>Email: {{ email }}</p>
    </div>
    <button @click="deleteFriend">Удалить :(</button>
  </li>
</template>

<script>
export default {
  emits: ["delete-friend"],
  props: {
    id: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
      default: "+7(999)999-99-99",
    },
    email: {
      type: String,
      required: true,
    },
  },
  methods: {
    deleteFriend() {
      this.$emit("delete-friend", this.id);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>