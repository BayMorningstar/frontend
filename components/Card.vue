<template>
  <v-card
    class="mx-auto my-12 w-1/2"
  >
   <v-card-title>{{title}}</v-card-title>
    <v-img
      class="white--text"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
     
    </v-img>

    <v-card-text class="text--primary">
      <div>{{description}}</div>
    </v-card-text>

    <v-card-actions>
    <NuxtLink :to="`${id}/${title}`">
      <v-btn
      class="ma-2 mx-2"
      :loading="loading"
      :disabled="loading"
      style="secondary"
      @click="loader = 'loading'"
      >
      Buy
      </v-btn></NuxtLink>
    </v-card-actions>
  </v-card>
</template>

<script>

  export default {
     props: ['title','description','id']
}
</script>