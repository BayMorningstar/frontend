<template>
<main>
<header-nav class="fixed top-0 w-full z-50"></header-nav>  
  <Nuxt/>
  <main-footer></main-footer>
</main>
</template>
<script>
import MainFooter from '~/components/shared/MainFooter';
import HeaderNav from '~/components/shared/HeaderNav';
export default {
  components: {
    MainFooter,
    HeaderNav
  }
}

</script>