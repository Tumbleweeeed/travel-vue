<template>
	<div>
		<detail-banner :name="sightName" :banner="bannerImg" :imgs="gallaryImg"></detail-banner>
		<detail-header></detail-header>
		<detail-list :list="categoryList"></detail-list>
		<div class='test'></div>
	</div>
</template>

<script>
import DetailBanner from './detailbanner'
import DetailHeader from './header'
import DetailList from './list'
import axios from 'axios'
export default {
	name: 'Detail',
	components: {
		DetailBanner,
		DetailHeader,
		DetailList
	},
	data () {
		return {
			sightName: '',
			bannerImg: '',
			gallaryImg: [],
			categoryList: []
		}
	},
	activated () {
		this.getDetailInfo()
	},
	methods: {
		getDetailInfo () {
			axios.get('api/detail.json?id='+this.$route.params.id)
				.then(this.showMess)
		},
		showMess (res) {
			res = res.data
			if(res.data && res.ret){
				const data = res.data
				this.sightName = data.sightName
				this.bannerImg = data.bannerImg
				this.gallaryImg = data.gallaryImgs
				this.categoryList = data.categoryList
			}
		}
	}
}
</script>

<style lang='stylus'>
	.test
		height 100rem
</style> 