<template>
	<ul class='list'>
		<li 
			class="item" v-for='( item,key ) of city' 
			:key='key'
			:ref='key' 
			@click='handleLetterClick'
			@touchstart='handleTouchStart'
			@touchmove='handleTouchMove'
			@touchend='handleTouchEnd'
		>
			{{ key }}
		</li>
	</ul>
</template>

<script>
export default{
	name: 'CityAlphabet',
	data () {
		return {
			touchStatus: false
		}
	},
	props: {
		city: Object
	},
	methods: {
		handleLetterClick (e) {
			this.$emit('change',e.target.innerText)
		},
		handleTouchStart () {
			this.touchStatus = true
		},
		handleTouchMove (e) {
			if(this.touchStatus){
				const listY = this.$refs['A'][0].offsetTop
				const touchY = e.touches[0].clientY - 86
				const index = Math.floor((touchY - listY)/20)
				console.log(index)
			}
		},
		handleTouchEnd () {
			this.touchStatus = false
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