<template>
  <vWrapper>
    <h1>Добавить друга</h1>
    <p>
      В этой части я попробую сделать плагин, в котором можно добавлять друзей в
      список
    </p>
    <hr />
    <AddFriend @add-friend="addToList" />
    <hr />
    <h3>Список друзей</h3>
    <ul v-if="friends.length != 0">
      <FriendItem
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone="friend.phone"
        :email="friend.email"
        @delete-friend="deleteThis"
      />
    </ul>
    <h4 v-else>Пока список пуст :(</h4>
  </vWrapper>
</template>

<script>
//import vWrapperVue from "./v-wrapper.vue";
import AddFriend from "./add-friend";
import FriendItem from "./friend-item";

export default {
  components: {
    //vWrapperVue,
    AddFriend,
    FriendItem,
  },
  data() {
    return {
      friends: [],
    };
  },
  methods: {
    addToList(name, phone, email) {
      const inputFriend = {
        name: name,
        phone: phone,
        email: email,
        id: new Date().toISOString(),
      };

      console.log("измененный объект", inputFriend);
      this.friends.push(inputFriend);
    },
    deleteThis(id) {
      console.log(id);

      this.friends = this.friends.filter(function (obj) {
        return obj.id !== id;
      });
    },
  },
};
</script>
    
<style lang="scss" scoped>
</style>