<template>
	<div>
		<div class="recommend">热销推荐</div>
		<ul>
			<li class="item" v-for="(item,index) of recommendList" :key="index">
				<div>
					<img :src="item.imgUrl" alt="">
				</div>
				<div class="info">
					<p class="info-title">{{ item.title }}</p>
					<p class="info-text">{{ item.text }}</p>
					<button>查看详情</button>
				</div>
			</li>
		</ul>	
	</div>
</template>

<script>
export default{
	name: 'HomeRecommend',
	data () {
		return {
			recommendList: [
				{
					id: '001',
					imgUrl: 'http://img1.qunarzz.com/sight/p0/1712/95/95f38f28a6ff19cba3.img.jpg_200x200_af967e35.jpg',
					title: '水奥雪世界',
					text: '响应国家“百万市民上冰雪”的号召，让冰雪文化深入人心'
				},
				{
					id: '002',
					imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
					title: '故宫',
					text: '是在明朝、清朝两代皇宫及其收藏的基础上建立起来的中国综合性博物馆'
				},
				{
					id: '003',
					imgUrl: 'http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_200x200_69e4a80d.jpg',
					title: '南山滑雪场',
					text: '北京南山滑雪度假村位于首都近郊东北方向密云区，距城区正南方约3公里，距北京市望和桥62公里'
				},
				{
					id: '004',
					imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/43/dea8b51719a4a69b68777baa68c146e4.water.jpg_200x200_8da8cebe.jpg',
					title: '春晖园温泉度假村',
					text: '春晖园温泉度假村位于北京市顺义区高丽营镇于庄，占地180万平方米'
				}
			]
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/ellipsis.styl'
	.recommend
		margin-top:.04rem
		line-height:.8rem
		background:#eee
		text-indent:.2rem
	.item
		display flex
		height 1.9rem
		img
			width 1.7rem
			height 1.7rem
			padding .1rem
		.info
			padding .1rem
			padding-top .15rem
			flex 1
			min-width 0
			.info-title
				line-height .54rem
				font-size .32rem
				ellipsis()
			.info-text
				margin-top .05rem
				line-height .4rem
				color #ccc
				ellipsis()
			button
				background #ff9300
				margin-top .14rem
				padding 0 .1rem
				border-radius .06rem
				line-height .44rem
				color #fff
</style>