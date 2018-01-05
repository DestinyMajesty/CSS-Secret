import React, { Component } from 'react';

class Frame extends Component {
	render() {
		return (
			<div className="chapter2">
				{/* 边框特性 */}
				<div className="frame-background base">
					<div className="transparent-frame">我要當一個半透明边框</div>
					<div className="double-border-frame">我要双层边框</div>
					<div className="double-border-frame-2">我要双层虚线边框</div>
					<div className="linear-gradient-box">渐变边框</div>
					<div className="linear-gradient-footnote">渐变边框变种=>脚注</div>		
					<div className="tiaowen-frame">条纹边框</div>		
				</div>
				{/* 背景定位 */}
				<div className="background-position base">
					<div className="img-position">背景图片位置扩展</div>
					<div className="img-origin">背景图片定位起点</div>
				</div>
				{/* 条纹背景-CSS线性渐变 */}
				<div className="tiaowen base">
					<div className="linear-gradient">渐变色</div>
					<div className="linear-gradient-2">黄色由上到下从20%开始渐变往下渐变，蓝色又上到下80%的地方往上开始</div>
					<div className="linear-gradient-3">都从50%，就是两个实色了</div>
					<div className="linear-gradient-4">利用50%，再加上background-size属性，即可以得到条纹了</div>
					<div className="linear-gradient-5">利用30%，再加上background-size属性，不等宽条纹</div>
					<div className="linear-gradient-6">多种颜色的条纹</div>
					<div className="linear-gradient-7">锤子的条纹</div>
					<div className="linear-gradient-8">斜着的条纹</div>
					<div className="linear-gradient-9">同色调的条纹</div>																					
				</div>
				{/* 其他实现 */}
				<div className="something-else base">
					<div className="something"><div>用两个div来实现：边框内圆角</div></div>
					
					<div className="radial-gradient-box">波点背景</div>														
				</div>
			</div>
		);
	}
}

export default Frame;
