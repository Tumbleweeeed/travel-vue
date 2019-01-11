<template>
	<div>
		<div class="recommend">周末去哪</div>
		<ul>
			<li class="item" v-for="(item,index) of weekend" :key="index">
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
	props: {
		weekend: Array
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