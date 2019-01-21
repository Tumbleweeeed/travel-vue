<template>
	<ul class='list'>
		<li class="item" v-for='( item,key ) of city' :key='key' @click='handleLetterClick'>{{ key }}</li>
	</ul>
</template>

<script>
export default{
	name: 'CityAlphabet',
	props: {
		city: Object
	},
	methods: {
		handleLetterClick (e) {
			console.log(e)
		}
	}
}
</script>

<style lang='stylus' scoped>
	@import '~styles/variable.styl'
	.list
		display flex
		flex-direction column
		justify-content center
		position absolute
		top 2rem
		right .04rem
		bottom 0
		.item
			line-height .4rem
			text-align center
			color $bgColor
</style>