<template>
  <div class="usersBlock">
    <p class="usersBlock__title">List</p>
    <transition-group tag="ul" class="usersBlock__lists" name="fade">
      <li
        class="usersBlock__list userList"
        v-for="user of store.getFilteredUsers"
        :key="user.score"
      >
        <v-tooltip :text="user.country" location="top">
          <template v-slot:activator="{ props }">
            <img class="userList__img" v-bind="props" :src="user.avatar" />
          </template>
        </v-tooltip>

        <div class="userList__content userContent">
          <p class="userContent__title" v-html="user.title"></p>
          <p class="userContent__subtitle" v-html="user.subtitle"></p>
        </div>
      </li>
    </transition-group>
    <v-progress-circular
      v-if="store.preloaderStatus"
      class="preLoader"
      indeterminate
      color="blue-lighten-3"
      :size="80"
      :width="6"
    ></v-progress-circular>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useStore } from "@/store/index.js";
const store = useStore();

onMounted(async () => {
  await store.fetchUsers();
});
</script>
<style lang="scss">
.usersBlock {
  position: relative;
  width: 50%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  padding: 8px 0px 8px 16px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  @media (max-width: 1024px) {
    width: 100%;
  }

  .usersBlock__title {
    color: rgba(0, 0, 0, 0.6);
    align-items: center;
    display: flex;
    height: 48px;
    font-size: 0.875rem;
    font-weight: 400;
    padding: 0 16px 0 16px;
  }
  .preLoader {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .usersBlock__lists {
    display: flex;
    flex-direction: column;

    .userList {
      display: flex;
      align-items: center;
      gap: 16px;

      &:last-child .userContent {
        border-bottom: none;
      }

      .userList__img {
        height: 40px;
        width: 40px;
        border-radius: 50%;
      }

      .userContent {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-bottom: solid 1px rgba(0, 0, 0, 0.12);
        padding: 12px 10px 12px 0;

        .userContent__title {
          font-size: 1rem;
          color: rgba(0, 0, 0, 0.87);
        }

        .userContent__subtitle {
          color: rgba(0, 0, 0, 0.6);
          line-height: 1.2;
          font-size: 0.875rem;
          margin-top: 8px;
        }
      }
    }
  }
}

.grey--text {
  color: #bdbdbd !important;
}
.text--primary {
  color: rgba(0, 0, 0, 0.87) !important;
}
</style>
