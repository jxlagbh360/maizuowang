import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import PubSub from 'pubsub-js'
import { getaddressData } from '../services/homeService.js'
export default class AddressPage extends Component{
	constructor({ history }){
		super();
		this.history = history;
		this.state = {
			city: [],
			isGoback: false,
			letter:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
			
		}
	}
	
	
	render(){
		let className = "page";
		if(this.state.isGoback){
			className += " disappear";
		}
		return (
			<ReactCSSTransitionGroup 
			  transitionName="example"
		      transitionAppear={true}
		      transitionAppearTimeout={300}
		      transitionEnter={false}
		      transitionLeave={false}>
			<div id="address" class={className}>
				<div class='choice-city one-bottom-px'>
					<span class={"iconfont icon-fanhui"} 
					onClick={()=>{
						this.history.goBack();
					}}></span> 城市选择
				</div>
				
				<div class='add-content'>
					<div class='wrapper'>
						<p>GPS定位您所在的城市</p>
						<h3 onClick={()=>{
							//反向转值
							PubSub.publish('address', '深圳');
							this.pageGoBack();
							
						}}>深圳</h3>
						<p>热门城市</p>
						<ul class='hot-city'>
							<li onClick={()=>{
								//反向转值
								PubSub.publish('address', '深圳');
								this.pageGoBack();
							}}>深圳</li>
							<li onClick={()=>{
								//反向转值
								PubSub.publish('address', '上海');
								this.pageGoBack();
							}}>上海</li>
							<li onClick={()=>{
								//反向转值
								PubSub.publish('address', '广州');
								this.pageGoBack();
							}}>广州</li>
							<li onClick={()=>{
								//反向转值
								PubSub.publish('address', '北京');
								this.pageGoBack();
							}}>北京</li>
						</ul>
						<div class="city-box">
							{
								/*this.state.city.map((item, i)=>(
									<button key={i} onClick={()=>{
										//反向转值
										this.props.selectCity(item);
										//返回上一页
										this.props.history.goBack();
										
									}}>{item}</button>
									))
									*/
								/*this.state.city.map((item, i)=>(
									<div class='city' key={i} onClick={()=>{
										//反向转值
										PubSub.publish('address', item);
										this.pageGoBack();
										
									}}>{item}</div>
								))	*/
							}
						</div>
					</div>
				</div>
				
			
			</div>
			</ReactCSSTransitionGroup>
		)
	}
	
	pageGoBack(){
		//执行返回的动画
		this.setState({isGoback: true});
		
		setTimeout(()=>{
			//返回上一页
			this.history.goBack();
		}, 300);
	}
	
	componentWillMount(){
		getaddressData().then((result)=>{
//			console.log(result);
			let cityArr=[];
			for(var i=0;i<result.length;i++){
				cityArr = cityArr.concat(result[i]);
			}
//			console.log(cityArr);
			this.setState({
				city:result
			})
		});
	}
	
}