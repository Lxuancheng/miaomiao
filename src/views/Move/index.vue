 这里是定义页面组件，页面组件注册到路由，然后通过router-view来显示，不同的页面组件通过跳转到
 对应的路由来显示相应的组件
<template>
    <div id="main">
      <Header />
      <div id="content">
      <div class="movie_menu">
      <router-link to="/move/city" tag="div" class="city_name">
        <span>大连</span><i class="iconfont icon-lower-triangle"></i>
      </router-link>
      <div class="hot_swtich">
        <router-link to="/move/nowplaying" tag="div" class="hot_item">正在热映</router-link>
        <router-link to="/move/comingsoon" tag="div" class="hot_item">即将上映</router-link>
      </div>
      <router-link to="/move/search" tag="div" class="search_entry">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  components: {
    Header
  }
}
</script>

<style scoped>
#main{ height: 100%; display: flex; flex-direction:column;}
#content .movie_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;}
.movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
.movie_menu .city_name.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .city_name.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
.movie_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
.movie_menu .hot_item.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_item.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
.movie_menu .search_entry.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry i{  font-size:24px; color:red;}
</style>
