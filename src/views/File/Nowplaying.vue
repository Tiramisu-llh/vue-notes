<template>
  <div>
    nowplaying
    <ul>
      <li v-for="data in datalist" :key="data" @click="changePage(data)">{{data}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    axios.get('http://jsonplaceholder.typicode.com/posts').then(res => {
      console.log(res.data)
    })
  },
  methods: {
    changePage (id) {
      console.log(id)
      // 编程式导航-路径跳转
      // this.$router.push(`/detail/${id}`);
      // 编程式导航-路由名字跳转
      this.$router.push({ name: 'cannoli', params: { myid: id } })
    }
  }
}
</script>
