<template>
  <div class="wrapper">
  	<swiper :options="swiperOption">
    <!-- slides -->
	    <swiper-slide v-for="item of swiperList" :key="item.id">
	    	<img :src="item.imgUrl" alt="">
	    </swiper-slide>
	    <!-- Optional controls -->
	    <div class="swiper-pagination"  slot="pagination"></div>
 	 </swiper>
  </div>	
</template>

<script>
  export default {
    name: 'HomeSwiper',
    data() {
      return {
        swiperOption: {
        	pagination: {
        		el:'.swiper-pagination'
        	},
        	loop: true
        },
        swiperList: [
        	{
        		id:'0001',
        		imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/31/da037478f37cf202.jpg_750x200_fe28d396.jpg'
        	},
        	{
        		id:'0002',
        		imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/7c/8e5c4ab8ee8b7402.jpg_750x200_dd7a38dd.jpg'
        	},
        	{
        		id:'0003',
        		imgUrl: 'http://img1.qunarzz.com/piao/fusion/1812/d6/daa880b254940402.jpg_750x200_b114308a.jpg'
        	},
        	{
        		id:'0004',
        		imgUrl: 'http://img1.qunarzz.com/piao/fusion/1812/d1/cd4f32e924a5a302.jpg_750x200_3d492837.jpg'
        	},
        ]
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