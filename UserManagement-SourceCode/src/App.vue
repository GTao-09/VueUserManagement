<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    AppHeader: Header
  }
}
</script>

<style>

</style>
