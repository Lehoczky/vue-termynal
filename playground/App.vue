<template>
  <div>
    <div class="links">
      <router-link to="/">Basic</router-link>
      <router-link to="/autoscroll">Autoscroll</router-link>
    </div>

    <router-view />
  </div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({})
</script>

<style>
.links {
  display: grid;
}
</style>
