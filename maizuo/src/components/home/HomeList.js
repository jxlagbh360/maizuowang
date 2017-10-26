import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class HomeList extends Component{
	constructor(){
		super();
		
	}
	
	render(){
		return (
			<ul class="list">
			{
				this.props.films.map((item, i)=>{
//					console.log(item);
					return (
						<li key={i} class="item one-bottom-px" 
						onClick={this.goDetail.bind(this,item)}>
							<div class='leftPic'>
								<img src={item.poster.origin}/>
							</div>	
							<div class='rightContent'>
								<h3 class='title'>{item.name}</h3>
								<p class='des'>{item.intro}</p>
								<p class='cinemaCount'>{item.cinemaCount}家影院正在上映</p>
								
								<p class='activies'>
									<span>购票立减5.2元</span>
									<b>首两张特惠</b>
								</p>
								<p class='activies'>
									<span>咨讯</span>
									<b>{item.intro}</b>
								</p>
								<i class='rating'>{item.grade}</i>
							</div>
							
						</li>
					)
				})
			}
			</ul>
		)
	}
	

	
	componentDidUpdate(){
		this.props.refresh();
		
	}
	
	goDetail(item){
		this.props.goDetail(item.id);
	}
	
}

HomeList.proptypes = {
	refresh: PropTypes.func,
	films: PropTypes.array
}
