<template>
  <div id="app">
    <keep-alive>
    <router-view/>
    </keep-alive>
    <router-view name="footer"></router-view>
  </div>
</template>

<style scoped>
*{ margin : 0; padding : 0;}
ul,li{ list-style: none;}
img{ display: block;}
html,body{ height:100%;}
.clearfix:after{ content:""; display: block; clear:both;}
#app{
  height: 100%;
}
</style>
