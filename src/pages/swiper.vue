<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of swiper" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>	
</template>

<script>
  export default {
    name: 'HomeSwiper',
    props: {
        swiper: Array
    },
    data() {
      return {
        swiperOption: {
          autoplay: true,
        	pagination: {
        		el:'.swiper-pagination'
        	},
        	loop: true
        }
      }
    },
    computed: {
      showSwiper () {
        return this.swiper.length
      }
    }
 }
</script>

<style lang="stylus" scoped>
	.wrapper >>> .swiper-pagination-bullet-active
		background: #fff
	.wrapper >>> .swiper-pagination-bullets
		bottom: 2px
	.wrapper
		overflow:hidden
		width:100%
		height:0
		padding-bottom:26.7%
		background:#ccc
		img
			width:100%
</style>