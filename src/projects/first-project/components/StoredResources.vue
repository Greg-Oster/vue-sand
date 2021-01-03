<template>
  <div>
    <ul>
      <list-item
        v-for="item in resources"
        :key="item.id"
        :title="item.title"
        :description="item.description"
        :link="item.link"
        :id="item.id"
      />
    </ul>
  </div>
</template>

<script>
import listItem from "./ListItem";
export default {
  inject: ["resources"],
  components: { listItem },
};
</script>

<style lang="scss" scoped>
</style>