<template>
  <div>
    <FtableLists></FtableLists>
    <!--<fedit-table></fedit-table>-->
  </div>
</template>

<script>
  import FtableLists from '../components/shiyan/ftableShow'
  import '../../static/css/iconfont.css'
  import '../../static/css/tub.css';
  import FeditTable from "../components/shiyan/feditTable";
  export default {
    components: {
      FeditTable,
      FtableLists,
    }
  }
</script>

<style scoped>

</style>
