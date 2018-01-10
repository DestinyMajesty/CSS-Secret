import React from 'react'
import APP from './App'
import Frame from './component/frame'
import Shape from './component/shape'
import Visual from './component/visual' 
import Layout from './component/layout'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'
const BasicExample = () => (
	<Router>
		<div>
			<ul className="navigation">
				<li><Link to="/">主页</Link></li>
				<li><Link to="/frame">背景与边框</Link></li>
				<li><Link to="/shape">形状</Link></li>				
				<li><Link to="/visual">视觉效果</Link></li>
				<li><Link to="/layout">结构与布局</Link></li>				
								
			</ul>
			<hr />
			<Route exact path="/" component={APP} />
			<Route path="/frame" component={Frame} />
			<Route path="/shape" component={Shape} />
			<Route path="/visual" component={Visual} />
			<Route path="/layout" component={Layout} />					
								
		</div>
	</Router>
)
export default BasicExample