<template>
	<div class='wrapper'>
		<div class="city">
			<router-link to="/">
				<div class="iconfont">&#xe601;</div>
			</router-link>
			城市选择
		</div>
		<div class="choose">
			<input type="text" placeholder="输入城市名或拼音" v-model='keyword'>
		</div>
		<div class="search" ref='rollList' v-show='keyword'>
			<ul class="searchList">
				<li 
					class='searchItem border-bottom' 
					v-for='item of result'
					@click='handleSwitch(item.name)'
				>
					{{item.name}}
				</li>
				<li 
					class='searchItem' 
					v-show='hasNoData'
				>
					没有找到匹配数据！
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Bscroll from 'Better-scroll'
	export default{
		name: 'CityHeader',
		data () {
			return {
				keyword: '',
				result: [],
				timer: 0
			}
		},
		methods: {
			handleSwitch (res) {
				this.$store.dispatch('switchCity',res)
				this.$router.push('/')
			}
		},
		computed: {
			hasNoData () {
				return !this.result.length
			}
		},
		props: {
			city: Object
		},
		watch: {
			keyword () {
				const list = []
				if(this.timer){
					clearTimeout(this.timer)
				}
				if(!this.keyword){
					this.result = []
					return
				}
				this.timer=setTimeout(()=>{
					for(let i in this.city){
					this.city[i].forEach( (value)=>{
						if(value.spell.indexOf(this.keyword)>-1 ||
							value.name.indexOf(this.keyword)>-1){
							list.push(value)
						}
					})
				}
				this.result = list
				console.log(this.result)
			},100)
			}
		},
		mounted () {
			this.scroll = new Bscroll(this.$refs.rollList)
		}
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
		.search
			position absolute
			overflow hidden
			z-index 1
			top 1.72rem
			right 0
			bottom 0
			left 0
			background #ccc
			.searchList
				.searchItem
					background #fff
					color #666
					height .76rem
					line-height .76rem
					font-size 16px
					padding .1rem .2rem
</style>