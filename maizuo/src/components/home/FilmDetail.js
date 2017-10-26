import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { getfilmDetailData } from '../../services/homeService.js'

export default class HomeList extends Component{
	constructor({history,location,match}){
		super();
//		console.log(match);
		this.state={
			isGoback:false,
			detailId:match.params.id,
			filmInfo:null
		}
		this.match=match;
		this.history = history;
		this.location = location;
		
	}
	
	render(){
		let className = "page";
		if(this.state.isGoback){
			className += " disappear";
		}
		if(this.state.filmInfo){
			return (
				<div id="detail" class={className}>
					<div class='choice-city one-bottom-px'>
						<span class={"iconfont icon-fanhui"} 
						onClick={()=>{
							this.history.goBack();
						}}></span>
					</div>
					<img src={this.state.filmInfo.cover.origin}/>
					<div>
						<h2>影片简介</h2>
						<p>导演:{this.state.filmInfo.director}</p>
						<p>主演:
							{
								this.state.filmInfo.actors.map((item,i)=>{
									return(
										<span key={i}>{item.name} |</span>
									)
								})
							}
						</p>
						<p>地区语言:{this.state.filmInfo.language}</p>
						<p>类型:{this.state.filmInfo.category}</p>
						<p>上映日期:不知道</p>
						<p>{this.state.filmInfo.synopsis}</p>
					</div>
					<button>立即购票</button>
				</div>
			)
		}
		else{
			return(
				<div id="detail">
				</div>
			)
		}
	}
	
	componentWillMount(){
		getfilmDetailData(this.state.detailId)
		.then((result)=>{
//			console.log(result);
			this.setState({filmInfo:result})
		});
	}
	
	
	
}

//HomeList.proptypes = {
//	refresh: PropTypes.func
//}
