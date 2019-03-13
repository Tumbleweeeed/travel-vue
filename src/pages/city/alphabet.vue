<template>
	<ul class='list'>
		<li 
			class="item" v-for='( item,key ) of city' 
			:key='key'
			:ref='key' 
			@click='handleLetterClick'
			@touchstart.prevent='handleTouchStart'
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
	computed: {
		letters () {
			const letters = []
			for(let i in this.city){
				letters.push(i)
			}
			return letters
		}

	},
	data () {
		return {
			touchStatus: false,
			listY: 0,
			timer: null
		}
	},
	updated () {
		this.listY = this.$refs['A'][0].offsetTop
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
				if(this.timer) {
					clearTimeout(this.timer)
				}
				this.timer = setTimeout( ()=>{
					const touchY = e.touches[0].clientY - 86
					const index = Math.floor((touchY - this.listY)/20)
					this.$emit('change',this.letters[index])
				},16)

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
			width .6rem
			line-height .4rem
			text-align center
			color $bgColor
</style>