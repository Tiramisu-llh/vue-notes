<template>
  <div>detail</div>
</template>
<script>
export default {
  mounted () {
    console.log('要id获取详情信息', this.$route.params.myid, this.id)
    // params:
    // myid: "coke"
  }
}
</script>
