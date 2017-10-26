import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'


export default class HomeHeader extends Component{
	constructor(){
		super();
		this.state={
			logo:'./dist/image/logo.jpg',
			city: {title: '深圳', icon: 'icon-dizhi', path: '/home'},
			hotmovie:{title: '热映电影', path: '/home'},
			coming:{title: '即将上映', path: '/coming'},
			hotactives:{title: '热门活动', path: '/hotactives'}
		}
	}
	render(){
		return (
			<header class="header">
				<div class='h-top'>
					<div class='logo'>
						<img src={this.state.logo}/>
					</div>
					
					<div class='address'>
						<span class="select-city" 
							onClick={this.addressSelect.bind(this)}
						>{this.props.address?this.props.address:'选择地址'}</span>
						<span class={"iconfont "+this.state.city.icon}></span>
					</div>
				</div>
				
				<div class='h-bottom'>
					<NavLink to={this.state.hotmovie.path} 
					
					>{this.state.hotmovie.title}</NavLink>
					
					<NavLink to={this.state.coming.path} 
					>{this.state.coming.title}</NavLink>
					
					<NavLink to={this.state.hotactives.path} 
					>{this.state.hotactives.title}</NavLink>
				</div>
			</header>
		)
	}
	
	//点击选择城市
	addressSelect(){
		this.props.goSubpage('/home/address');
	}
	
	
	
	
	
}