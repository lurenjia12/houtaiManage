<template>
  <div class="ftableLists">
    <ffunction></ffunction>
    <ftable-show></ftable-show>
  </div>
</template>

<script>
    import Ffunction from "./ffunction";
    import FtableShow from "./ftableShow";
    export default {
        name: "ftableLists",
      components: {
        FtableShow,
          Ffunction,
        }
    }
</script>

<style scoped>

</style>
