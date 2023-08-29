<template>
  <div class="filterBlock">
    <v-select
      clearable
      color="blue"
      label="Filter by country"
      :items="countries"
      variant="underlined"
      v-model="filterByCountry"
    ></v-select>

    <v-select
      clearable
      color="blue"
      label="Filter by score"
      :items="scores"
      variant="underlined"
      v-model="filterByScore"
    ></v-select>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import { useStore } from "@/store";

const store = useStore();
const filterByCountry = ref(null);
const filterByScore = ref(null);
const countries = ["Russia", "USA", "India", "UK"];
const scores = ["20>", "<20"];

watch(filterByCountry, (newValue) => {
  store.preloaderStatus = true;

  // Эмуляция запроса
  setTimeout(() => {
    store.preloaderStatus = false;
    store.filterByCountry = newValue;
  }, 300);
});

watch(filterByScore, (newValue) => {
  store.preloaderStatus = true;

  // Эмуляция запроса
  setTimeout(() => {
    store.preloaderStatus = false;
    store.filterByScore = newValue;
  }, 300);
});
</script>

<style lang="scss" scoped>
.filterBlock {
  width: 50%;

  @media (max-width: 1024px) {
    width: 100%;
  }
}
</style>
