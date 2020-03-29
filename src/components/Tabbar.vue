<template>
  <nav>
    <!-- 声明式导航 -->
    <ul>
        <router-link to="/file" tag="li" activeClass="myactive"><img src="">
          <i class="iconfont icon-favorite"></i>
          film
        </router-link>
        <!-- 引用iconfont -->
        <router-link to="/center" tag="li" activeClass="myactive"><img src="">
        <i class="iconfont icon-agriculture"></i>
        center</router-link>

        <router-link to="/cinema" tag="li" activeClass="myactive"><img src="">
        <i class="iconfont icon-favorites"></i>
        cinema</router-link>

      <!-- <router-link to="/film" tag="li" activeClass="myactive">
       <i class="iconfont icon-form"></i>
        film
      </router-link>
      <router-link to="/cinema" tag="li" activeClass="myactive">
       <i class="iconfont icon-form"></i>
      cinema</router-link>
      <router-link to="/center" tag="li" activeClass="myactive">
       <i class="iconfont icon-form"></i>
      center</router-link> -->
    </ul>
  </nav>
</template>

<style lang="scss" scoped>

 .myactive{
  color:red;
 }

  nav{
    position:fixed;
    bottom: 0px;
    left:0px;
    width:100%;
    height: 50px;
    background: white;
    ul{
      display: flex;
      li{
        flex:1;
        line-height: 50px;
        text-align: center;
      }
    }
  }
</style>
