import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Redirect,Switch } from 'react-router-dom'

import HomePage from './pages/HomePage.js'
import CinemaPage from './pages/CinemaPage.js'
import CardPage from './pages/CardPage.js'
import MarketPage from './pages/MarketPage.js'
import MePage from './pages/MePage.js'

export default class App extends Component{
	
	constructor(){
		super();
		this.state = {
			tabData: [
				{title: '电影', icon: 'icon-dianying', path: '/home'},
				{title: '影院', icon: 'icon-yingyuana', path: '/cinema'},
				{title: '卖座卡', icon: 'icon-qiapian', path: '/card'},
				{title: '商城', icon: 'icon-shangcheng', path: '/market'},
				{title: '我的', icon: 'icon-wode', path: '/me'}
			]
		}
	}
	
	render(){
		return (
			<Router>
			<div id="app">
				
				<Switch>
					{/* 路径'/'的重定向  */}
					<Route path="/" exact render={()=>{
						return <Redirect to="/home"/>
					}}/>
					
					<Route path="/home" component={HomePage}/>
					<Route path="/cinema" component={CinemaPage}/>
					<Route path="/card" component={CardPage}/>
					<Route path="/market" component={MarketPage}/>
					<Route path="/me" component={MePage}/>
					
					{/* 路径'*'的匹配 */}
					<Route component={HomePage}/>
				</Switch>
				
				<nav class="tabs one-top-px">
				{
					this.state.tabData.map((item, i)=>{
						return (
							<NavLink key={i} to={item.path}>
								
								<span class={"iconfont "+item.icon}></span>
								<span >{item.title}</span>
								
								
							</NavLink>
						)
					})
				}
				</nav>
				
			</div>
			</Router>
		)
	}
	
	
	
	
}
