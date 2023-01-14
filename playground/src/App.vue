<template>
  <div class="max-w-5xl mx-auto px-10">
    <header class="flex gap-3 sticky bg-white top-0 py-2 mb-1">
      <router-link to="/">Basic</router-link>
      <router-link to="/scrolling-terminal">Autoscroll</router-link>
      <router-link class="" to="/intersection-observer"
        >IntersectionObserver</router-link
      >
    </header>

    <router-view />
  </div>
</template>
