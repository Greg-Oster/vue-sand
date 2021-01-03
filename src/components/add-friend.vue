<template>
  <div>
    <h2>Добавить</h2>
    <form action="" class="form">
      <label for="name">
        <span>Введите имя</span>
        <input type="text" v-model="name" />
      </label>
      <label for="name">
        <span>Введите телефон</span>
        <input type="text" v-model="phone" />
      </label>
      <label for="name">
        <span>Введите почту</span>
        <input type="text" v-model="email" />
      </label>
      <div class="form-actions">
        <button type="button" class="button" @click="addFriend">
          Добавить
        </button>
        <button
          type="reset"
          class="button button--secondary"
          @click="resetData"
        >
          Очистить
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      name: "",
      phone: "",
      email: "",
    };
  },
  methods: {
    addFriend() {
      console.log("вызван метод addFriend");
      this.$emit("add-friend", this.name, this.phone, this.email);
    },
    resetData() {
      this.name = "";
      this.phone = "";
      this.email = "";
    },
  },
};
</script>

<style lang="scss">
.form {
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;

    span {
      margin-bottom: 5px;
    }

    &:not(:last-of-type) {
      margin-bottom: 10px;
    }

    &:last-of-type {
      margin-bottom: 30px;
    }
  }
}
</style>