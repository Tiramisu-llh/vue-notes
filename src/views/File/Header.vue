<template>
  <div>
    <ul>
      <router-link to="Nowplaying" tag="li" activeClass="active">Tiramisu</router-link>
      <router-link to="Comingsoon" tag="li" activeClass="active">Mousse</router-link>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul{
  display: flex;
  li{
    flex:1;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background:white;
  }
}

.active{
  color:red;
  border-bottom: 2px solid red;
}

.fixed{
  position: fixed;
  left:0px;
  top:0px;
  width:100%;
  height:40px;
  background:white;
}
</style>
