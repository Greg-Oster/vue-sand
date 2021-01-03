<template>
  <div class="app">
    <HelloWorld />
    <vConditionals />
    <vFriendListVue />
    <vAdvancedFriendList />
    <vScopedSlots/>
    <FirstProject/>
    <FormWidget/>
    <HttpQuest/>
    <Routing/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import vConditionals from "./components/v-conditionals.vue";
import vFriendListVue from "./components/v-friend-list.vue";
import vAdvancedFriendList from "./components/v-advanced-friend-list.vue";
import vScopedSlots from './components/v-scoped-slots.vue';
import FirstProject from './projects/first-project/app';
import FormWidget from './projects/form/app';
import HttpQuest from './projects/http/app';
import Routing from './projects/routing/app'

export default {
  name: "App",
  components: {
    HelloWorld,
    vConditionals,
    vFriendListVue,
    vAdvancedFriendList,
    vScopedSlots,
    FirstProject,
    FormWidget,
    HttpQuest,
    Routing
  },
};
</script>

<style>
.app {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 40px;
  grid-column-gap: 40px;
  padding: 40px;
}
</style>