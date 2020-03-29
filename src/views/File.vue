<template>
    <div>
        <swiper ref="myswiper">
            <div class="swiper-slide" v-for="n in 10" :key="n">{{n}}</div>
        </swiper>
        <Header :class="isFixed?'fixed':''"></Header>
        <router-view></router-view>
    </div>
</template>
<script>
import swiper from './File/Swiper'
import Header from './File/Header'
export default {
  data () {
    return {
      isFixed: false
    }
  },
  components: {
    swiper,
    Header
  },
  mounted () {
    window.onscroll = this.handScroll // 不能加（），否则会返回undefined
  },
  beforeDestroy () {
    // console.log('beforeDestroy')
    window.onscroll = null
  },
  methods: {
    handScroll () {
      // console.log('111')
      // console.log(document.documentElement.scrollTop, this.$refs.myswiper.$el.offsetHeight)// 获取滚动距离和轮播高度
      // if(滚动距离>=轮播的高度)
      if (document.documentElement.scrollTop >= this.$refs.myswiper.$el.offsetHeight) {
        // console.log('fixed')
        this.isFixed = true
      } else {
        // console.log('unfixed')
        this.isFixed = false
      }
    }
  }
}
</script>
