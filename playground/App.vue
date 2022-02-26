<template>
  <div>
    <div class="links">
      <router-link to="/">Basic</router-link>
      <router-link to="/autoscroll">Autoscroll</router-link>
    </div>

    <router-view />
  </div>
</template>

<style>
.links {
  display: grid;
}
</style>
