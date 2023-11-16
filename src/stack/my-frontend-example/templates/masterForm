<script lang="ts">
import { defineComponent } from 'vue'
import type { Task } from '@/types'

export default defineComponent({
  props: {
    task: Object    
  },
  data() {
    return {
      form: this.$props.task as Task
    }
  },
  emits: ['submit'],
  methods: {
    submit() {          
      this.$emit('submit', this.form )
    }
  }
})
</script>

<template>
  <form @submit.prevent="submit">
    <div class="m-2">
      <label>Title</label>
      <input type="text" v-model="form.title">
    </div>

   <div class="m-4">
      <label>Description</label>
      <textarea v-model="form.description"></textarea>
    </div>

    <div class="m-4">
      <label>Done</label>
      <input type="checkbox" v-model="form.done"/>
    </div>

    <button type="submit" class="btn btn-primary m-2">
      Save
    </button>
  </form>
</template>
