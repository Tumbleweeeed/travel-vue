<template>
	<div>
		<div class="recommend">热销推荐</div>
		<ul>
			<router-link tag='li' class="item" v-for="(item,index) of recommend" :key="index" :to="'/detail/' + index">
				<div>
					<img :src="item.imgUrl" alt="">
				</div>
				<div class="info">
					<p class="info-title">{{ item.title }}</p>
					<p class="info-text">{{ item.text }}</p>
					<button>查看详情</button>
				</div>
			</router-link>
		</ul>	
	</div>
</template>

<script>
export default{
	name: 'HomeRecommend',
	props: {
		recommend: Array
	},
	data () {
		return {
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