import axios from 'axios'
import URL from '../common/urlApi.js'

//获取轮播图数据
export function getBannerData(){
	return new Promise((resolve, reject)=>{
		axios.get(`${URL.bannerApi}?__t=1508576717833`)
		.then((response)=>{
//			console.log(response);
			const banner=response.data.data
			resolve(banner);
		})
		
		
	})
}

//获取首页电影列表数据
export function getmovieListData(page,count){
	return new Promise((resolve, reject)=>{
		axios.get(`${URL.movieListApi}?__t=1508593535170&page=${page}&count=${count}`)
		.then((response)=>{
//			console.log(response);
			const movies=response.data.data;
			resolve(movies);
		})
	})
}

//获取地址列表数据

export function getaddressData(){
	return new Promise((resolve, reject)=>{
		axios.get(`${URL.addressListApi}?__t=1508742166745`)
		.then((response)=>{
//			console.log(response);
			let cities=response.data.data.cities;
			resolve(cities);
		})
	})
}

//获取电影详情数据
export function getfilmDetailData(id){
	return new Promise((resolve,reject)=>{
		axios.get(`${URL.filmDetailApi}${id}?__t=1508750091299`)
		.then((response)=>{
//			console.log(response);
			resolve(response.data.data.film)
		})
	})
}

//获取电影详情数据
export function getCinemaData(){
	return new Promise((resolve,reject)=>{
		axios.get(`${URL.cinemaApi}?__t=1508775200887`)
		.then((response)=>{
//			console.log(response);
			resolve(response.data.data.cinemas)
		})
	})
}








