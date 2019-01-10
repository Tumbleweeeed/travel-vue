<template>
	<div>
		<div class="recommend">周末去哪</div>
		<ul>
			<li class="item" v-for="(item,index) of recommendList" :key="index">
				<div class="weekendImg">
					<img :src="item.imgUrl" alt="">
				</div>
				<div class="info">
					<p class="info-title">{{ item.title }}</p>
					<p class="info-text">{{ item.text }}</p>
				</div>
			</li>
		</ul>	
	</div>
</template>

<script>
export default{
	name: 'HomeWeekend',
	data () {
		return {
			recommendList: [
				{
					id: '001',
					imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
					title: '京城周末撒欢',
					text: '在帝都过周末，不仅仅是城中游！'
				},
				{
					id: '002',
					imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
					title: '京城有好泉',
					text: '细数北京温泉，温暖你的冬天'
				},
				{
					id: '003',
					imgUrl: 'http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
					title: '京城溜娃必去',
					text: '德智体美劳全面发展的亲子日，这些地方该去看看…'
				},
				{
					id: '004',
					imgUrl: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
					title: '帝都必打卡',
					text: '来北京必去的景点非这些地方莫属'
				}
			]
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/ellipsis.styl'
	.recommend
		margin:.04rem 0
		line-height:.8rem
		background:#eee
		text-indent:.2rem
	.item
		.weekendImg
			height 0
			padding-bottom 36.7%
			img
				width 100%
		.info
			padding .1rem
			padding-top .05rem
			.info-title
				line-height .50rem
				font-size .32rem
				ellipsis()
			.info-text
				margin-top .0rem
				line-height .4rem
				color #ccc
				ellipsis()
</style>