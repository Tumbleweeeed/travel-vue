<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :swiper="swiperList"></home-swiper>
    <home-icon :icon="iconList"></home-icon>
    <home-recommend :recommend="recommendList"></home-recommend>
    <home-weekend :weekend = "weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './header'
import HomeSwiper from './swiper'
import HomeIcon from './icons'
import HomeRecommend from './recommend'
import HomeWeekend from './weekend'
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      lastCity: '',
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    getHomeInfo () {
      axios.get('./static/api/index.json?city=' + this.$store.state.city)
        .then(this.showMessage)
    },
    showMessage (res) {
      res = res.data
      if ( res.ret && res.data ){
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  },
  activated () {
    if(this.lastCity !== this.$store.state.city){
      this.lastCity = this.$store.state.city
      this.getHomeInfo()
    }
  }
}
</script>

<style>
</style>