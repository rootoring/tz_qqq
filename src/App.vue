<template>
  <div class="app">
    <main class="container">
      <userFilter />
      <usersLists />
    </main>
  </div>
</template>

<script setup>
import userFilter from "./components/userFilter.vue";
import usersLists from "./components/usersLists";
</script>

<style lang="scss">
.app {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  .container {
    width: 70%;
    padding: 12px;
    display: flex;
    gap: 33px;
    align-items: center;
    @media (max-width: 1024px) {
      width: 95%;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
