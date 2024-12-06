<template>
  <div class="max-w-5xl mx-auto px-10">
    <header class="flex gap-3 sticky bg-white top-0 py-2 mb-1">
      <router-link class="button" to="/">Basic</router-link>
      <router-link class="button" to="/scrolling-terminal"
        >Autoscroll</router-link
      >
      <router-link class="button" to="/intersection-observer"
        >IntersectionObserver</router-link
      >
      <router-link class="button" to="/unmount-during-animation"
        >Unmount during animation</router-link
      >
    </header>

    <router-view />
  </div>
</template>
