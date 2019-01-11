<template>
	<div class="icons">
		<swiper :options="swiperOption">
			<swiper-slide v-for="(page,index) of pages" :key="index">
	    		<div class="icon" v-for="item of page">
					<img :src="item.imgUrl" alt="">
					<p>{{ item.text }}</p>
				</div>
	    	</swiper-slide>
	    	<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
		     
	</div>
</template>

<script>
	export default{
		name: 'HomeIcon',
		props: {
			icon: Array
		},
		data () {
			return {
				swiperOption: {
					pagination: {
						el: '.swiper-pagination'
					}
				}
			}
		},
		computed: {
			pages () {
				const pages = []
				this.icon.forEach((item,index)=>{
					const page = Math.floor( index/8 )
					if(!pages[page]){
						pages[page] = []
					}
					pages[page].push(item)
				})
				return pages 
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/ellipsis.styl'
	.icons >>> .swiper-pagination-bullets
		bottom: 0px
	.icons >>> .swiper-pagination-bullet-active
		background: #3b3b3b
	.icons >>> .swiper-container
		height:0
		padding-bottom:53%
	.icons
		overflow:hidden
		height:0
		padding-bottom:53%
		.icon
			overflow:hidden
			float:left
			width:25%
			height:0
			padding-bottom:25%
			img
				width:70%
				padding:5% 15%
			p
				text-align:center
				ellipsis()
</style>