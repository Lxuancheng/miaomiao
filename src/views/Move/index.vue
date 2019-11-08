 这里是定义页面组件，页面组件注册到路由，然后通过router-view来显示，不同的页面组件通过跳转到
 对应的路由来显示相应的组件
<template>
    <div id="main">
      <Header />
      <div id="content">
      <div class="movie_menu">
      <router-link to="/move/city" tag="div" class="city_name">
        <span>{{this.$store.state.city.nm}}</span><i class="iconfont icon-lower-triangle"></i>
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
         <router-view></router-view> <!--在电影页面还有城市/热映/将上映/搜索页面,所以将这些组件作为 -->
      </keep-alive>       <!-- 子路由嵌套到move路由中，在这里通过router-view来展示子路由-->
      </div>
      <router-view name='detail'></router-view>
    </div>
</template>

<script>
import axios from 'axios'
import Header from '@/components/Header'
import { messageBox } from '@/components/Js'
export default {
  components: {
    Header
  },
  mounted () {
    setTimeout(() => {
      axios.get('/api/getLocation')
        .then((res) => {
          // console.log(res.data)
          let msg = res.data.msg
          if (msg === 'ok') {
            let nm = res.data.data.nm
            let id = res.data.data.id
            if (id === parseInt(this.$store.state.city.id)) {
              return
            }
            messageBox({
              title: '定位',
              content: nm,
              cancel: '取消',
              ok: '切换城市',
              handleOk () {
                localStorage.setItem('nowNm', nm)
                localStorage.setItem('nowId', id)
                location.reload()
              }
            })
          }
        })
    }, 1000)
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
