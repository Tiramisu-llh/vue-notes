<template>
  <div>
    nowplaying
    <ul>
      <li v-for="data in datalist" :key="data.title" @click="changePage(data.id)">
        <!-- <img :src=""/> -->
        <h3>{{data.title}}</h3>
        <p>body{{data.body}}</p>
        <p>id：{{data.id}}</p>
      </li>
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
    // axios.get('http://jsonplaceholder.typicode.com/posts').then(res => {
    //   console.log(res.data)
    //   this.datalist = res.data
    // })
    axios({
      url: 'http://jsonplaceholder.typicode.com/posts'
    }).then(res => {
      console.log(res.data)
      this.datalist = res.data
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
<style scoped>
  p{
    text-indent: 2em;
  }
</style>
