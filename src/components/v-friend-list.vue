<template>
  <div>
    <h1>Friend List</h1>
    <ul v-for="friend in friends" :key="friend.id">
      <friend
        :name="friend.name"
        :phone="friend.phone"
        :adress="friend.adress"
      />
    </ul>
  </div>
</template>


<script>
import friend from "./v-friend";

export default {
  name: "v-friend-list",
  components: {
    friend: friend,
  },
  data() {
    return {
      friends: [
        {
          id: 0,
          name: "Anton",
          phone: "+7 812 32 332",
          adress: "Leningrad street",
        },
        {
          id: 1,
          name: "Grisha",
          phone: "+8 812 32 332",
          adress: "Pobeda street",
        },
        {
          id: 2,
          name: "Antosha",
          phone: "+hiu  ",
          adress: "Pobeda street",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>