<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import quickmark from './pages/quickMark'
  import  orderManage from './pages/orderManage'
export default {
  name: 'App',
  components:{
    orderManage,
    quickmark
  }
}
</script>

<style>


</style>
