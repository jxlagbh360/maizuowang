import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import BetterScroll from 'better-scroll'


import Header from '../components/home/HomeHeader.js'
import HotMovie from '../components/home/HotMovie.js'
import HotActives from '../components/home/HotActives.js'
import Coming from '../components/home/Coming.js'

import Banner from '../components/home/HomeBanner.js'
import List from '../components/home/HomeList.js'

import AddressPage from './AddressPage.js'
import FilmDetail from '../components/home/FilmDetail.js'

import PubSub from 'pubsub-js'

import { getBannerData ,getmovieListData } from '../services/homeService.js'

let homeScroll;
export default class HomePage extends Component{
	constructor({ history }){
		super();
		this.state={
			refreshImg:'../dist/image/refreshPic.jpg',
			bannerData:[],
			page:1,
			count:8,
			films:[],
			pages:{},
			flag:'none',
			detailId:''
		}
		this.history = history;
		
		
	}
	
	render(){
		return (
			<div>
				<div id="home" class="page">
					<Header address={this.state.city} 
					goSubpage={this.goSubpage.bind(this)}/>
					<div class="content" ref="content">
						<div class="wrapper">
							<div id="top" >
								<img src={this.state.refreshImg} />
							</div>
							
							
							<Banner bannerData={this.state.bannerData} 
							refresh={this.refreshScroll.bind(this)}/>
							
							<List goDetail={this.goDetail.bind(this)} 
							films={this.state.films}
							refresh={this.refreshScroll.bind(this)}/>
							
							<div id="bottom" onClick={this.loadMoreList.bind(this)}>
								点击加载更多
							</div>
						</div>
					</div>
				</div>
				
				<Route path="/home/address" component={AddressPage}/>
				<Route path="/home/detail/:id" component={FilmDetail}/>
			</div>
		)
	}
	//申请列表数据
	requestData(flag){
		if(flag === 'refresh'){
			this.setState({
			page:1,
			films:[]
		},()=>{
			getmovieListData(this.state.page,this.state.count)
			.then((result)=>{	
				this.setState({
					films:result.films
				})
			})
		})
		}else{
			this.setState({
				page:++this.state.page
			},()=>{
				getmovieListData(this.state.page,this.state.count)
				.then((result)=>{
					let newFilms=this.state.films.concat(result.films);
//					console.log(newFilms)
					this.setState({
						films:newFilms
					})
				});
			})
			
		}	
	}
	//进入选择城市
	goSubpage(path){
		this.history.push(path);
	}
	goDetail(id){
//		console.log(id);
		this.history.push('/home/detail/'+id);
	}
	componentWillMount(){
		this.requestData('refresh');
		getBannerData().then((result)=>{
			
			this.setState({
				bannerData:result.billboards
			})
			
		});
		
		PubSub.subscribe('address', (msg, data)=>{
			this.setState({city: data});
		})
	}
	
	componentDidMount(){
		homeScroll = new BetterScroll(this.refs.content, {
			probeType: 3,
			click: true,
			tap: true
		});
		
		homeScroll.on('scrollStart', ()=>{
			this.refreshScroll();
		})
		
		
		//初始化，让下滑刷新状态不显示，滚动到头部在最顶部
		let box1=document.getElementById("top");
		let refreshHeight= box1.offsetHeight;
//		console.log(refreshHeight);
		homeScroll.scrollTo(0, -refreshHeight);
		//监听滚动结束时
		homeScroll.on('scrollEnd', ()=>{
			//用户下拉的，但是没有达到刷新条件
			if(homeScroll.y > -refreshHeight && homeScroll.y < 0){
				homeScroll.scrollTo(0, -refreshHeight, 200);
			}
			
			
			if(homeScroll.y >= 0){
				//刷新触发了
//				console.log('需要执行刷新了');
				//自己下拉刷新请求新数据，并且清空原数组
				this.requestData("refresh");
				//收起刷新div
				setTimeout(()=>{
					homeScroll.scrollTo(0, -refreshHeight, 200);
				}, 1000);
			}
			
		
		})
	}

	//点击加载更多，加载
	loadMoreList(){
		this.requestData();
	}
	refreshScroll(){
		homeScroll.refresh();
	}
		
	

}