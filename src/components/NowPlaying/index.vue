<template>
  <div class="movie_body" ref="movie_body">
    <Loading v-if="isLoding"/>
    <Scroller v-else :handleToScroll='handleToScroll' :handleToTouchEnd='handleToTouchEnd'>
        <ul>
            <li class="pullDown">{{pullDownMsg}}</li>
            <li v-for="item of moveList" :key="item.id">
                <div class="pic_show" @tap='handleToDetail'><img :src='item.img | setwh("128.180")'></div>
                <div class="info_list">
                    <h2>{{item.nm}}<img src='@/assets/maxs.png' v-if='item.version'></h2>
                    <p>观众评 <span class="grade">{{item.sc}}</span></p>
                    <p>主演: {{item.star}}</p>
                    <p>{{item.showInfo}}</p>
                </div>
                <div class="btn_mall">
                    购票
                </div>
            </li>
            <!-- <li>
                <div class="pic_show"><img src="/images/movie_1.jpg"></div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p>观众评 <span class="grade">9.2</span></p>
                    <p>主演: 陈建斌,任素汐,潘斌龙</p>
                    <p>今天55家影院放映607场</p>
                </div>
                <div class="btn_mall">
                    购票
                </div>
            </li> -->
        </ul>
    </Scroller>
    </div>
</template>

<script>
import axios from 'axios'
// import BScroll from 'better-scroll'

export default {
  data () {
    return {
      moveList: [],
      pullDownMsg: '',
      isLoding: true,
      preveCityId: -1
    }
  },
  activated () {
    let cityId = this.$store.state.city.id
    if (this.preveCityId === cityId) {
      return
    }
    this.isLoding = true
    axios.get('/api/movieOnInfoList?cityId=' + cityId)
      .then(res => {
        if (res.data.msg === 'ok') {
        //   console.log(res.data.data.movieList)
          this.moveList = res.data.data.movieList
          this.preveCityId = cityId
          this.isLoding = false
          // console.log(123)
          // this.$nextTick(() => {
          //   /* eslint-disable no-new */ // 使下面那行代码不会报错
          //   let scroll = new BScroll(this.$refs.movie_body, {
          //     tap: true,
          //     probeType: 1
          //   })
          //   scroll.on('scroll', (pos) => {
          //     // console.log('scroll')
          //     if (pos.y > 30) {
          //       this.pullDownMsg = '数据正在更新中'
          //     }
          //   })
          //   scroll.on('touchEnd', (pos) => {
          //     // console.log('end')
          //     if (pos.y > 30) {
          //       axios.get('/api/movieOnInfoList?cityId=10')
          //         .then(res => {
          //           if (res.data.msg === 'ok') {
          //           //   console.log(res.data.data.movieList)
          //             this.pullDownMsg = '数据更新完成'
          //             setTimeout(() => {
          //               this.moveList = res.data.data.movieList
          //               this.pullDownMsg = ''
          //             }, 1000)
          //           }
          //         })
          //     }
          //   })
          // })
        }
      })
  },
  filters: {
    setwh: (url, arg) => {
      //   console.log(url)
      return url.replace(/w\.h/, arg)
    }
  },
  methods: {
    handleToDetail () {
      console.log('hello')
    },
    handleToScroll (pos) {
      if (pos.y > 30) {
        this.pullDownMsg = '数据正在更新中'
      }
    },
    handleToTouchEnd (pos) {
      if (pos.y > 30) {
        axios.get('/api/movieOnInfoList?cityId=10')
          .then(res => {
            if (res.data.msg === 'ok') {
            //   console.log(res.data.data.movieList)
              this.pullDownMsg = '数据更新完成'
              setTimeout(() => {
                this.moveList = res.data.data.movieList
                this.pullDownMsg = ''
              }, 1000)
            }
          })
      }
    }
  }
}
</script>

<style scoped>
#content .movie_body{ flex:1; overflow:auto;}
.movie_body ul{ margin:0 12px; overflow: hidden;}
.movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
.movie_body .pic_show{ width:64px; height: 90px;}
.movie_body .pic_show img{ width:100%;}
.movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
.movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
.movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
.movie_body .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
.movie_body .btn_pre{ background-color: #3c9fe6;}
.movie_body .pullDown{margin: 0; padding: 0; border:none}
</style>
