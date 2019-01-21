<template>
	<div class='wrapper'>
		<div class="city">
			<router-link to="/">
				<div class="iconfont">&#xe601;</div>
			</router-link>
			城市选择
		</div>
		<div class="choose">
			<input type="text" placeholder="输入城市名或拼音">
		</div>
	</div>
</template>

<script>
	export default{
		name: 'CityHeader'
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/variable.styl'
	.wrapper
		background $bgColor
		.city
			padding .3rem 0 0 .2rem
			height .6rem
			text-align center
			font-size 18px
			color #fff
			.iconfont
				position absolute
				color #fff
		.choose
			height .62rem
			padding .1rem .2rem
			input
				box-sizing border-box
				text-align center
				width 100%
				height .52rem
				line-height .52rem
				border-radius .3rem
				color #666
				padding .2rem
			
</style>