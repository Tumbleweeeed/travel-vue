<template>
	<div>
		<div
			class="item"
			v-for="(item,index) of list"
			:key="index"
		>
			<div class="item-title border-bottom">
				<span item-ticket></span>
				{{ item.title }}
			</div>
			<div v-if="item.children" class="item-childent">
				<detail-list :list="item.children"></detail-list>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DetailList',
	props: {
		list: Array
	}
}
</script>

<style lang='stylus' scoped>
	.item-title
		padding .2rem .8rem
		line-height 
		.item-ticket
			width: .36rem;
		    height: .4em;
		    left: .2rem;
		    top: .1rem
		    background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.5rem no-repeat;
		    margin-right: .1rem;
		    background-size: .5rem 4rem;
	.item-childent
		padding-left .6rem
		font-size 96%
</style>