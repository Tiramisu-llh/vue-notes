<template>
  <div>
    tiramisu
    <!-- hello vue
    <input type="text" ref="mytext" />
    <button @click="hand">add</button>-->
    <tabbar></tabbar>
    <!-- <ul>
      <li v-for="data in datalist" :key="data">{{data}}</li>
    </ul>-->
    <!-- <navbar>
      <button @click="isShow=!isShow">navbar-click</button>
      要在Navbar.vue中设置插槽
    </navbar>-->
    <!-- <sidebar v-show="isShow"></sidebar> -->
    <!--路由容器-->
    <router-view></router-view>
  </div>
</template>

<script>
// import navbar from './components/Navbar'
// import sidebar from './components/Sidebar'
// import axios from 'axios'
// 全局组件
// 模块化
// import Vue from 'vue'
// 注册全局
// Vue.component("navbar",navbar)
// Vue.component("sidebar",sidebar)
import tabbar from '@/components/Tabbar'
export default {
  data () {
    return {
      // datalist: [],
      // isShow: false
    }
  },
  methods: {
    // hand () {
    //   // console.log("tiramisu",this.$refs.mytext.value) //获取值
    //   this.datalist.push(this.$refs.mytext.value) // 添加到数组中
    // }
  },
  components: {
    tabbar
  },
  mounted () {
    // 调用接口
    //   axios.get('/posts').then(res => {
    //     console.log(res.data)
    //   })
    // },
    // components: {
    //   navbar: navbar, // 组件名，组件对象
    //   sidebar: sidebar
  }
}
</script>
<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  html{
    height: 100%;
  }
  li{
    list-style: none;
  }
</style>
