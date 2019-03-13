<template>
	<div>
		<city-header :city='cities'></city-header>
		<city-list :city='cities' :hot='hotcit' :letter='letter'></city-list>
		<city-alphabet :city='cities' @change='handelListChange'></city-alphabet>
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
				hotcit: [],
				letter: ''
			}
		},
		methods: {
			getCityInfo () {
				axios.get('./static/api/citys.json')
					.then(this.getMessage)
			},
			getMessage (res) {
				res = res.data
				if( res.data && res.ret){
					const data = res.data
					this.cities = res.data.cities
					this.hotcit = res.data.hotCities
				}
			},
			handelListChange (world) {
				this.letter = world
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