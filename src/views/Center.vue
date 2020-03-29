<template>
  <div>center</div>
</template>
<!--局部守卫-->
<script>
// const auth = {
//   isLogin () {
//     return false // true放行，false进入login
//   }
// }
export default {
  beforeRouteEnter (to, from, next) {
    // console.log('局部盘查')
    // if (auth.isLogin()) {
    //   next()
    // } else {
    //   next('/Login')
    // }
    next()
  }
}
</script>
