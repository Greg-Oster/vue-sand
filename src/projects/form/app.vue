<template>
  <vWrapper class="form-widget" :style="{gridColumn:gridColumn}">
    <template #default>
      <h1>Hi there</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sunt nesciunt aspernatur ipsa assumenda distinctio tenetur fugiat aliquam excepturi laudantium ab? Atque vel delectus nemo mollitia rerum maxime illo nulla?</p>
      <base-button 
          class="active" 
          @click="encSize">
          Увеличить гриду
      </base-button>
      <base-button 
          class="active" 
          @click="decrSize">
          Уменьшить гриду
      </base-button>
      <theForm/>
    </template>
  </vWrapper>
</template>

<script>
import theForm from './theForm';

export default {
  components:{theForm},
  data() {
    return {
      gridFrom: 1,
      gridTo:3,
    }
  },
  computed: {
    gridColumn() {
      return `${this.gridFrom}/${this.gridTo}`
    }
  },
  methods: {
    encSize() {
      if (this.gridTo <= 3){
        this.gridTo++
      }
    },
    decrSize() {
      if (this.gridTo > 2){
        this.gridTo--
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.form-widget {
  grid-column: 1/3;
}
</style>