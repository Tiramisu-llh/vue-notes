<template>
  <div class="swiper-container fileSwiper">
    <div class="swiper-wrapper">
       <slot></slot> <!--插槽 -->
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from 'swiper' // js
import 'swiper/css/swiper.min.css'
export default {
  mounted () {
    console.log('swiper-mounted')
    /* eslint-disable no-new */
    new Swiper('.fileSwiper', { // 构造函数初始化
      // direction: 'vertical'
      loop: true,
      autoplay: { // 自动轮播
        deplay: 20000 // 2秒
      },
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>
