<template>
  <div class="popup invisible" :class="{ visible: store.isVisible }">
    <div class="popup__inner">
      <div class="popup__header">
        <span class="popup__header-title">Deleting a task</span>
        <span class="popup__header-button" @click="store.updateTask">X</span>
      </div>
      <hr />
      <div class="popup__main">
        <span class="popup__main-title"
          >Do you really want to delete a task?</span
        >
      </div>
      <div class="popup__footer">
        <button class="popup__footer-button edit" @click="store.updateTask">
          No
        </button>
        <button
          class="popup__footer-button delete"
          @click="store.deleteTask(index)"
        >
          Yes
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "@/stores/store";
const store = useStore();
</script>
