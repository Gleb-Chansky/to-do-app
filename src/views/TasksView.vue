<template>
  <section class="container tasks">
    <ul class="task__list" v-if="store.tasks.length === 0">
      <li class="task__list-item">
        <p class="task__item-text">Oops, you haven't created any tasks...</p>
        <p class="task__item-text">Do you want to do it?</p>
        <router-link to="/add" class="task__item-link">
          Just click here
        </router-link>
      </li>
    </ul>
    <ul class="task__list" v-else>
      <li
        class="task__list-item full-item"
        v-for="(task, index) in store.tasks"
        :key="index"
      >
        <p class="task__item-title">{{ task.title }}</p>
        <p class="task__item-description">{{ task.description }}</p>
        <div class="task__button-wrapper">
          <button class="task__item-button edit" @click="store.editTask(index)">
            Edit
          </button>
          <button class="task__item-button delete" @click="store.checkDelete">
            Delete
          </button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { useStore } from "@/stores/store";
const store = useStore();
</script>
