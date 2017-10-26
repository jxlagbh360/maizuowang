import React, { Component } from 'react'
import PropTypes from 'prop-types'



export default class HomeBanner extends Component{
	constructor(){
		super();
		
		
	}
	render(){
		return (
			<div class="banner swiper-container" ref="banner">
			    <div class="swiper-wrapper">
			    
			    	{
			    		this.props.bannerData.map((item, i)=>{
				    		return (
				    			<div class="swiper-slide" key={i}>
				    				<img src={item.imageUrl}/>
				    			</div>
				    		)
				    	})
			    	}
			    </div>
			    <div class="swiper-pagination"></div>
			</div>
		)
	}
	
	componentDidMount(){
		this.swiper = new Swiper(this.refs.banner, {
			pagination: '.swiper-pagination'
		});
	}
	
	componentDidUpdate(){
		this.swiper.update();
		this.props.refresh();
		
	}
	
	
}

HomeBanner.proptypes = {
	refresh: PropTypes.func,
	bannerData: PropTypes.array
}