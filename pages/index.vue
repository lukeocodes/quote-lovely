<template>
  <div
    class="flex justify-center items-center text-center w-screen h-screen bg-blue-200"
  >
    <p>{{ joke }}</p>
    <nuxt-link
      class="absolute bottom-0 mb-12 bg-white border-1 shadow-xl border-black text-black text-2xl font-bold px-20 py-2 rounded-xl"
      :to="`/rand`"
      >Another!</nuxt-link
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  transition: 'page',

  async fetch() {
    const submissions = this.$store.getters.submissions
    const submission =
      submissions[Math.floor(Math.random() * submissions.length)]

    this.joke = await this.$content('submissions', submission).fetch()
  },

  async asyncData({ $content, store }) {
    const submissions = store.getters.submissions
    const submission =
      submissions[Math.floor(Math.random() * submissions.length)]

    const joke = await $content('submissions', submission).fetch()

    return { joke }
  },

  data() {
    return {
      joke: {},
    }
  },

  fetchOnServer: false,
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
