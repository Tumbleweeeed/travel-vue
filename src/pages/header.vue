<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont">&#xe601;</div>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe636;</span>
		    	输入城市/景点/游玩主题
		</div>
		<router-link to="/city">
			<div class="header-right">
				{{ this.$store.state.city }}
				<span class="iconfont arrow">&#xe695;</span>
			</div>
		</router-link>
	</div>
</template>

<script>
export default{
  name: 'HomeHeader',
  props: {
  	city: String
  	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/variable.styl'
	.header
		height:.86rem
		line-height:.86rem
		background:$bgColor
		color:#fff
		display:flex
		.header-left
			width:.64rem
			float:left
		.iconfont
			text-align:center
		.header-input
			flex:1
			height:.64rem
			line-height:.64rem
			margin-top:.12rem
			padding-left:.2rem
			background:#fff
			border-radius:.1rem
			color:#ccc
		.header-right
			width:1.24rem
			float:right
			text-align:center
			color #fff
			.arrow
				margin-left:-.05rem

</style>