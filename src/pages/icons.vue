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
		data () {
			return {
				iconList: [
					{
						id: '001',
						imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
						text: '景点门票'
					},
					{
						id: '002',
						imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
						text: '一日游'
					},
					{
						id: '003',
						imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
						text: '北京必游'
					},
					{
						id: '004',
						imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
						text: '帝都范儿'
					},
					{
						id: '005',
						imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
						text: '动植物园'
					},
					{
						id: '006',
						imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
						text: '故宫'
					},
					{
						id: '007',
						imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
						text: '名胜古迹'
					},
					{
						id: '008',
						imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png',
						text: '北京滑雪'
					},
					{
						id: '009',
						imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
						text: '泡温泉'
					},
					{
						id: '010',
						imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b2/bfbc5d66e0ab5a02.png',
						text: '冰雪大世界'
					}
				],
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
				this.iconList.forEach((item,index)=>{
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