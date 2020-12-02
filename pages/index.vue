<template>
  <div
    class="flex justify-center items-center text-center w-screen h-screen bg-blue-200"
  >
    <Video class="object-cover" />
    <nuxt-link
      class="absolute bottom-0 mb-12 bg-white border-1 shadow-xl border-black text-black text-2xl font-bold px-20 py-2 rounded-xl"
      :to="`/${rand}`"
      >Another!</nuxt-link
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  transition: 'page',

  computed: {
    rand(): string {
      return Math.random().toString(20).substr(2, 3)
    },
  },
})
</script>

<style scoped>
.page-enter-active {
  animation: acrossOut 1s ease-out both;
}
.page-leave-active {
  animation: acrossIn 1s ease-in both;
}
@keyframes acrossIn {
  100% {
    -webkit-transform: rotateY(180deg);
    -webkit-animation-timing-function: ease-out;
  }
}
@keyframes acrossOut {
  0% {
    -webkit-transform: rotateY(180deg);
    -webkit-animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: rotateY(0);
    -webkit-animation-timing-function: ease-in;
  }
}
</style>
