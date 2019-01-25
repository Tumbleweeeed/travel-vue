<template>
	<div class='overall' ref='roll'>
		<div>
			<div class="area border-topbottom">
				<div class="title">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">{{ this.$store.state.city }}</div>
					</div>
				</div>
			</div>
			<div class="area border-topbottom">
				<div class="title">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper" v-for='item of hot' :key='item.id'>
						<div class="button" @click='handleSwitch(item.name)'>{{item.name}}</div>
					</div>
				</div>
			</div>
			<div class="area border-topbottom" v-for='( item,key ) of city' :key='key' :ref='key'>
				<div class="title">{{ key }}</div>
				<ul class='list'>
					<li 
						class='item border-bottom' 
						v-for='innerItem of item' 
						:key='innerItem.id'
						@click='handleSwitch(innerItem.name)'
					>
						{{ innerItem.name }}
					</li>
				</ul>
			</div>
		</div>

	</div>
</template>

<script>
import Bscroll from 'Better-scroll'
export default{
	name: 'CityList',
	props: {
		hot: Array,
		city: Object,
		letter: String 
	},
	methods: {
		handleSwitch (res) {
			this.$store.dispatch('switchCity',res)
			this.$router.push('/')
		}
	},
	watch: {
		letter () {
			if(this.letter){
				const element = this.$refs[this.letter][0]
				this.scroll.scrollToElement(element)
			}
		}
	},
	mounted () {
		this.scroll = new Bscroll(this.$refs.roll)
	}
}
</script>

<style lang='stylus' scoped>
	@import '~styles/variable.styl'
	.border-topbottom
		&:after
			border-color #ccc
		&:before
			border-color #ccc
	.overall
		position absolute
		overflow hidden
		top 1.72rem
		right 0
		bottom 0
		left 0
		.title
			height .6rem
			line-height .6rem
			background #eee
			color #666
			padding-left .2rem
		.button-list
			overflow hidden
			padding .2rem
			padding-right .6rem
			.button-wrapper
				width 33.33%
				float left
				.button
					border .02rem solid #ccc
					border-radius .06rem
					text-align center
					margin .1rem
					padding .1rem 0
		.list
			.item
				line-height .76rem
				color #666
				padding-left .2rem
</style>