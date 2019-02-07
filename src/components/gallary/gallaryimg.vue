<template>
	<div class='wrapper' @click='closeGallary'>
		<div class="container">
			<swiper :options="swiperOption">
				<swiper-slide v-for="(item,index) of imgs" :key="index">
					<img class='gallary-img' :src="item" alt="">
		    	</swiper-slide>
		    	<div class="swiper-pagination"  slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
export default {
	name: 'GallaryImg',
	props: {
		imgs: {
			type: Array,
			default () {
				return ['http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_r_800x800_87ef5b1b.jpg','http://img1.qunarzz.com/sight/p0/1511/11/119129bba8323f0d90.water.jpg_r_800x800_0f07ddeb.jpg']
			}
		}
	},
	data () {
		return {
			swiperOption: {
				pagination: {
					el:'.swiper-pagination',
					type:'fraction'
				},
				loop: true,
				observeParents: true,
				observer: true
			}		
		}
	},
	methods: {
		closeGallary () {
			this.$emit('close')
		}
	}
}
</script>

<style lang='stylus' scoped>
	@import '~styles/variable.styl'
	.wrapper
		display flex
		z-index 99
		position fixed
		flex-direction column
		justify-content center
		top 0
		right 0
		bottom 0
		left 0
		background #000
		.container
			height 0
			width 100%
			padding-bottom 75%
	.gallary-img
		width 100%
	.swiper-pagination-fraction
		color #fff
		bottom -1rem
	.swiper-container
		overflow visible
</style>