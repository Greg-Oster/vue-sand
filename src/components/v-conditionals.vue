<template>
  <div class="to-do-list">
    <h1>ToDo lost</h1>
    <div class="">
      <input type="text" v-model="inputData" />
      <button class="to-do-list--add" @click="addItem()">Add</button>
    </div>
    <p class="to-do-list--info" v-if="listData.length === 0">
      Add something so i could dissapear
    </p>
    <ul class="list-items">
      <li
        class="list-items--item"
        v-for="(item, index) in listData"
        :key="index"
        @click="deleteListItem(index)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "v-conditionals",
  data() {
    return {
      listData: [],
      inputData: "",
    };
  },
  methods: {
    addItem() {
      this.listData.push(this.inputData);
      this.inputData = "";
    },
    deleteListItem(index) {
      this.listData.splice(index, 1);
    },
  },

  beforeCreate() {
    setTimeout(() => {
      console.log("beforeCreate()");
    }, 3000);
  },
};
</script>

<style lang="scss" scoped>
</style>