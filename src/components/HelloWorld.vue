<template>
  <div class="">
    <div class="hover">
      <div class="hover-rg" 
        v-on:mousemove="getCoord"
        v-on:click="toggleActive"
        :style="{ background: activeColor}">
      </div>
    <div class="hover-b"
      v-on:mousemove="getCoordB"
    ></div>
    </div>
    
    <p>Colors R:{{rValue}} G:{{gValue}} B:{{bValue}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      gValue:0,
      rValue:0,
      bValue:0,
      isActive:true,
    }
  },
  computed:{
    activeColor(){
      return `rgb(${this.gValue}, ${this.rValue}, ${this.bValue})`;
    }
  },
  methods:{
    getCoord(event){
      if (this.isActive){
        this.gValue = event.clientX - event.target.offsetLeft;
        this.rValue = event.clientY - event.target.offsetTop;
      }
    },
    getCoordB(event){
      if (this.isActive){
        this.bValue = event.clientY - event.target.offsetTop;
      }
    },
    toggleActive(){
      this.isActive = !this.isActive;
    }
  }
}

</script>

<style scoped>
  .hover {
    display:flex;
  }

  .hover-rg {
    width:256px;
    height:256px;
    background:#eee;
    margin-left:30px;
  }

  .hover-b{
    width:40px;
    height:256px;
    background:#eee;
    margin-left:20px;
  }
</style>
