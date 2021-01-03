<template>
  <vWrapper class="long">
    <template #title>
      <h2>Test</h2>
    </template>
    <div>
      <v-data-producer>
        <template #default="slotsProps">
          <h2>{{ slotsProps.item }}</h2>
          <p>{{ slotsProps["additionalInfo"] }}</p>
        </template>
      </v-data-producer>
    </div>
  </vWrapper>
</template>

<script>
import vDataProducer from "./v-data-producer";

export default {
  components: { vDataProducer },
};
</script>

<style lang="scss" scoped>
.long {
  grid-column: 2 / 4;
}
</style>