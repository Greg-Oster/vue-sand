<template>
  <div>
    <base-button 
      @click="toggleActiveBtn('AddResource')" 
      :class="buttonClass"
      >Кнопочка</base-button
    >
    <base-button
      @click="toggleActiveBtn('StoredResources')"
      :class="buttonClassS"
      >Вторая</base-button
    >
    <component :is="activeTab"></component>
  </div>
</template>

<script>
import AddResource from "./AddResource";
import StoredResources from "./StoredResources";

export default {
  components: {
    AddResource,
    StoredResources,
  },
  data() {
    return {
      activeTab: "AddResource",
      data: [
        {
          id: 1,
          title: "Google",
          description: "Learn how to google - dats important",
          link: "https://google.com",
        },
        {
          id: 2,
          title: "Google",
          description: "Learn how to google - dats important",
          link: "https://google.com",
        },
        {
          id: 3,
          title: "Google",
          description: "Learn how to google - dats important",
          link: "https://google.com",
        },
      ],
      
    };
  },
  provide(){
      return{
          resources:this.data,
          addResource:this.addResource,
          deleteItem:this.deleteItem
      }
  },
  computed: {
    buttonClass() {
      return "AddResource" === this.activeTab ? "active" : "";
    },
    buttonClassS() {
      return "StoredResources" == this.activeTab ? "active" : "";
    },
  },
  methods: {
    toggleActiveBtn(name) {
      this.activeTab = name;
    },
    addResource(title,url,description){
      const resourceItem = {
        id: new Date().toISOString(),
        title,
        url,
        description
      }

      this.data.push(resourceItem)
      this.activeTab = "StoredResources"
    },
    deleteItem(id){
      const resIndex = this.data.findIndex(res=>res.id == id);
      this.data.splice(resIndex, 1);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>