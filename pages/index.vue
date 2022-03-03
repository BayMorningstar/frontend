<template>
<main>
<hero-section/>
<div>
<div class="z-10" data-aos="slide-right" v-for="item in mountains.data" :key="item">
    <card v-bind:title="item.attributes.title" v-bind:description="item.attributes.description" v-bind:id="item.id"/>
</div>
</div>
</main>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return{
      mountains: []
      }
  },
    async fetch() {
    this.mountains = await fetch("http://0.0.0.0:4040/api/cards").then(res =>
      res.json()
      )
    },

  }
</script>
