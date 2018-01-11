import React from 'react'
import APP from './App'
import Frame from './component/frame'
import Shape from './component/shape'
import Visual from './component/visual' 
import Layout from './component/layout'
import Font from './component/font'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'
const BasicExample = () => (
	<Router>
		<div className="content">
			<ul className="navigation">
				<li><Link to="/">主页</Link></li>
				<li><Link to="/frame">背景与边框</Link></li>
				<li><Link to="/shape">形状</Link></li>				
				<li><Link to="/visual">视觉效果</Link></li>
				<li><Link to="/layout">结构与布局</Link></li>
				<li><Link to="/font">字体</Link></li>
			</ul>
			<main>
				<Route exact path="/" component={APP} />
				<Route path="/frame" component={Frame} />
				<Route path="/shape" component={Shape} />
				<Route path="/visual" component={Visual} />
				<Route path="/layout" component={Layout} />
				<Route path="/font" component={Font} />	
					
			</main>
			<footer>
				<p>"最美的人儿，在高处的栅栏上，静静的凝望。那一抹流淌着这神采的眼神，那托着双颊的小手，还有那无言的红楼，这是最美的一幅画。"</p>
				<p>即使眼前唯有漫寞长夜,也只愿坚持自己的抉择,你的步伐与我如此相似,令我畏惧这片欲罢不能的天空</p>
			</footer>
								
		</div>
	</Router>
)
export default BasicExample