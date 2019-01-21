<template>
	<div>
		<city-header></city-header>
		<city-list :city='cities' :hot='hotcit'></city-list>
		<city-alphabet :city='cities'></city-alphabet>
	</div>
</template>

<script>
	import axios from 'axios'
	import CityHeader from './header'
	import CityList from './list'
	import CityAlphabet from './alphabet'
	export default{
		name: 'City',
		data () {
			return {
				cities: {},
				hotcit: []
			}
		},
		methods: {
			getCityInfo () {
				axios.get('/api/citys.json')
					.then(this.getMessage)
			},
			getMessage (res) {
				console.log(res)
				res = res.data
				if( res.data && res.ret){
					const data = res.data
					this.cities = res.data.cities
					this.hotcit = res.data.hotCities
				}
			}
		},
		mounted () {
			this.getCityInfo()
		},
		components: {
			CityHeader,
			CityList,
			CityAlphabet
		}
	}
</script>

<style>
	
</style>