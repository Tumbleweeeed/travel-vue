<template>
	<div>
		<div class='banner' @click='showGallaryImg'>
			<img class='banner-img' :src="banner" alt="">
			<div class='imgs'>4<span class='iconfont'>&#xe612;</span></div>
			<p>{{ name }}</p>
		</div>
		<fade-animation>
			<gallary-img :imgs='imgs' v-show='showGallary' @close='closeGallaryImg'>
			</gallary-img>
		</fade-animation>
	</div>
</template>

<script>
import GallaryImg from 'gallary/gallaryimg'
import FadeAnimation from 'animate/fade'
export default {
	name: 'DetailBanner',
	data () {
		return {
			showGallary: false
		}
	},
	props: {
		name: String,
		banner: String,
		imgs: Array
	},
	components: {
		GallaryImg,
		FadeAnimation
	},
	methods: {
		showGallaryImg () {
			this.showGallary = true
		},
		closeGallaryImg () {
			this.showGallary = false
		}
	}
}
</script>

<style lang='stylus' scoped>
	@import '~styles/variable.styl'
	.banner
		position relative
		overflow hidden
		height 0
		padding-bottom 55%
		.banner-img
			width 100%
	.imgs
		position absolute
		bottom .8rem
		left .2rem
		padding .05rem .2rem
		background rgba(0,0,0,.7)
		color #eee
		border-radius .5rem
	p
		position absolute
		bottom 0
		left 0
		padding-left .2rem
		padding-bottom .26rem
		width 100%
		font-size .36rem
		line-height .36rem
		color #fff
		background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.9))
		
</style>