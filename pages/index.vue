<template>
<main>
<Body/>
<div>
<div class="z-10" data-aos="slide-right" v-for="item in mountains.data">
    <Card v-bind:title="item.attributes.title" v-bind:description="item.attributes.description" v-bind:id="item.id"/>
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
    this.mountains = await fetch("http://localhost:1337/api/cards").then(res =>
      res.json()
      )
    },
   props: {
    card: Array
  }
  }
</script>
