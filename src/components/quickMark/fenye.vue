
<template>
  <div>
    <div class="showFooter">
      显示第1到第 2 条记录，总共{{erweimadata.length}}条记录
    </div>
    <!--<Page :total="33" :page-size="10"></Page>-->
  </div>
</template>

<script>
    export default {
        name: "fenye",
      props:['erweimadata'],
    }
</script>

<style scoped>

</style>
