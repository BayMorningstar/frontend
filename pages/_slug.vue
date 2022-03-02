<template>
  <div>
    <h1>{{ this.title }}</h1>
    <p>Path: {{ $route.path }}</p>
  </div>
</template>
<script>
  export default {
    async asyncData({ params }) {
      const title = params.title
      return { title }
    },
  }
</script>