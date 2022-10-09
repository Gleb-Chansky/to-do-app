<template>
  <section class="container">
    <form class="form">
      <label for="title" class="form__title">Title:</label>
      <input
        type="text"
        placeholder="Example: Market"
        id="title"
        class="form__input"
        :class="{ red: store.isEmptyTitle }"
        v-model="store.title"
      />
      <label for="description" class="form__title">Description:</label>
      <textarea
        type="text"
        placeholder="Example: Buy a cheese, mayonnaise, carrots and onions."
        id="description"
        class="form__input description"
        :class="{ red: store.isEmptyDescription }"
        v-model="store.description"
      >
      </textarea>
      <button class="form__button" @click="store.createTask" type="button">
        Save
      </button>
    </form>
  </section>
</template>

<script setup>
import { useStore } from "@/stores/store";
const store = useStore();
</script>
