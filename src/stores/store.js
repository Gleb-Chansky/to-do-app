import { defineStore } from "pinia";
import router from "../router/index";

export const useStore = defineStore("store", {
  state: () => ({
    tasks: [],
    editedTask: null,
    title: "",
    description: "",
    isEmptyTitle: false,
    isEmptyDescription: false,
  }),

  actions: {
    createTask() {
      if (this.title && this.description) {
        if (this.editedTask === null) {
          this.tasks.unshift({
            title: this.title,
            description: this.description,
          });
          this.updateTask();
          this.isEmptyTitle = false;
          this.isEmptyDescription = false;
        } else {
          this.tasks[this.editedTask].title = this.title;
          this.tasks[this.editedTask].description = this.description;
          this.updateTask();
        }
        router.push("tasks");
      } else if (this.title && !this.description) {
        this.isEmptyTitle = false;
        this.isEmptyDescription = true;
      } else if (!this.title && !this.description) {
        this.isEmptyTitle = true;
        this.isEmptyDescription = true;
      } else {
        this.isEmptyTitle = true;
        this.isEmptyDescription = false;
      }
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    editTask(index) {
      this.editedTask = index;
      this.title = this.tasks[index].title;
      this.description = this.tasks[index].description;
      router.push("add");
    },
    updateTask() {
      this.editedTask = null;
      this.title = "";
      this.description = "";
    },
  },
  persist: true,
});
