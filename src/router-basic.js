import React from 'react'
import APP from './App'
import Frame from './component/frame'
import Shape from './component/shape' 
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
			</ul>
			<hr />
			<Route exact path="/" component={APP} />
			<Route path="/frame" component={Frame} />
			<Route path="/shape" component={Shape} />			
		</div>
	</Router>
)
export default BasicExample