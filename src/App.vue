<template>
  <nav class="header">
    <router-link to="/" class="header__link main" @click="store.updateTask"
      >ToDo APP</router-link
    >
    <router-link to="/tasks" class="header__link" @click="store.updateTask"
      >Tasks</router-link
    >
    <router-link to="/add" class="header__link"> Add Task</router-link>
  </nav>
  <PopupComponent />
  <router-view />
</template>

<script setup>
import PopupComponent from "./components/PopupComponent.vue";
import { useStore } from "@/stores/store";
const store = useStore();
</script>
