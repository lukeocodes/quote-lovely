<template>
  <div>Random Redirect Incoming</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  beforeMount() {
    this.$router.push({
      path: '/',
    })
  },
})
</script>
