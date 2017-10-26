import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class CinemaList extends Component{
	constructor(){
		super();
		this.state={
			isShow1:false,
			isShow2:false
		}
		
	}
	
	render(){
//		let dom1='';
//		let dom2='';
//		if(isShow1){
//			dom1=<span class='watch-food'>观影小食品</span>
//		}
//		if(isShow2){
//			dom2=<span class='buy-sub'>购票立减5.2元</span>
//		}

//		console.log(this.props.cinemaObj);
		let cinemasHtml = [];
		for( let key in this.props.cinemaObj ){
			
			let value = this.props.cinemaObj[key];
//			console.log(value);
			let listHtml = value.list.map((item, index)=>{
				return (
					<li key={index} class="cinema-list one-bottom-px">
						<h3 class='title'>
							<span class='cinema-name'>{item.name}</span>
							<span class='price'> 27.8起</span>
						</h3>
						<p class='address'>{item.address}</p>
						<div class='activies'>
							<span class='watch-food'>观影小食品</span>
							<span class='buy-sub'>购票立减5.2元</span>
						</div>
					</li>
				)
			})
		
			let html = (
				<div key={key}>
					<h1 onClick={this.titleClick.bind(this, key)}>{value.name}</h1>
					<ul>
						{value.isShow?listHtml: ''}
					</ul>
				</div>
			);
			cinemasHtml.push(html);
		
		}
		return (
			<ul class="list">
				<div class='cinema-banner'>
					<img src={this.props.bannerImg}/>
				</div>
				
				{cinemasHtml}
			
				{
				
				
					
			
			
//					this.props.cinemaObj.map((item, i)=>{
////						console.log(item);
//					
//						return (
//							<li key={i} class="cinema-list one-bottom-px" 
//							>
//								
//								<h3 class='title'>
//									<span class='cinema-name'>{item.name}</span>
//									<span class='price'> 27.8起</span>
//								</h3>
//								<p class='address'>{item.address}</p>
//								<div class='activies'>
//									<span class='watch-food'>观影小食品</span>
//									<span class='buy-sub'>购票立减5.2元</span>
//								</div>
//								
//								
//								
//							</li>
//						)
//					})

				}
			</ul>
		)
	}
	
	titleClick(key){
		//获得对应的区域的值
		let value = this.props.cinemaObj[key];
		value.isShow = !value.isShow;
		
		this.setState({data: this.props.cinemaObj});
		
	}
	
	componentDidUpdate(){
		this.props.refresh();
	}
	

	

	
}

CinemaList.proptypes = {
	refresh: PropTypes.func,
	cinemaObj: PropTypes.object,
	bannerImg: PropTypes.string
}
