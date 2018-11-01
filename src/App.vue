<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import  orderManage from './pages/orderManage'
export default {
  name: 'App',
  components:{
    orderManage,
  }
}
</script>

<style>


</style>
