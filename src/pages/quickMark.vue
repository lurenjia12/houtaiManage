<template>
  <div>
    <order-head></order-head>
    <ftable-lists></ftable-lists>
  </div>

</template>

<script>
  import '../../static/css/iconfont.css';
  import '../../static/css/tub.css';
  import orderHead from "../components/quickMark/orderHead";
  import FtableLists from "../components/quickMark/ftableLists";
    export default {
        name: "quickMark",
      components:{
        orderHead,
        FtableLists
      },

    }
</script>

<style scoped>

</style>
