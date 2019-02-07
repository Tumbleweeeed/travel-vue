<template>
	<div>
		<div class='back' v-show='!showAbs'>
			<router-link to='/'>
				<div class='iconfont'>&#xe601;</div>
			</router-link>
		</div>
		<div class="header" v-show='showAbs' :style='opacityStyle'>
			<router-link to="/">
				<div class="iconfont">&#xe601;</div>
			</router-link>
			景点详情
		</div>
	</div>
</template>

<script>
export default {
	name: 'DetailHeader',
	data () {
		return {
			showAbs:false,
			opacityStyle: {
				opacity: 0
			}
		}
	},
	methods:{
		handelScroll () {
			const top = document.documentElement.scrollTop
			if( top > 35){
				let opacity = top/70
				opacity = opacity>1 ? 1 : opacity
				this.opacityStyle = { opacity }
				this.showAbs = true
			}else{
				this.showAbs = false
			}
		}
	},
	activated () {
		window.addEventListener('scroll',this.handelScroll)
	},
	deactivated () {
		window.removeEventListener('scroll',this.handelScroll)
	}
}
</script>

<style lang='stylus' scoped>
	@import '~styles/variable.styl'
	.back
		position absolute
		top .2rem
		left .2rem
		width .6rem
		height .6rem
		background rgba(0,0,0,1)
		border-radius .3rem
		.iconfont
			padding .1rem
			padding-top .15rem
			color #fff
	.header
		position fixed
		top 0
		left 0
		right 0
		padding .2rem 0 0 .2rem
		height .5rem
		text-align center
		font-size 18px
		background $bgColor
		color #fff
		.iconfont
			position absolute
			color #fff
</style>