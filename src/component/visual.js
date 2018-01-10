import React, { Component } from 'react';

class Visual extends Component {
	render() {
		return (
			<div className="chapter4">
				{/* 单侧投影 */}
				<h1>利用了border-shadow多个值的作用的特性</h1>
                <div className="shadow base">
                    <div className="common-shadow">普通投影4边都有</div>
                    <div className="neighbor-shadow">相邻2边都有</div>
                    <div className="bottom-shadow">只有下边有</div>
                    <div className="right-shadow">只有右边有</div>
                    <div className="left-shadow">只有左边有</div>
                    <div className="left-right-shadow">左右两边有</div>
                </div>

                {/* 滤镜效果 */}
				<h1>利用css新特性blur()滤镜;</h1>
                <div className="filter base">
                    <div className="circle-1">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515383383749&di=bc5592e10b7e72085a2b2c031b66c834&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2F1208%2F1712%2Fntk-1712-67346.jpg" alt="..."/>
                    </div>
                </div>

                {/* 毛玻璃效果 */}
				<h1>伪元素和滤镜效果还有z-index的实现</h1>
                <div className="glass base">
                    <div className="original back">
                        <Leilei/>
                    </div>
                    <div className="bogus back">
                        <Leilei/>
                    </div>
                </div>

                {/* 折角效果 */}
                <h1>利用角度渐变与勾股定理</h1>
                <div className="angular base">
                    <div className="one back">45度角</div>
                </div>
			</div>
		);
	}
}

function Leilei() {
    return (
        <main>
            <div className="poetry">
                "最美的人儿，在高处的栅栏上，静静的凝望。那一抹流淌着这神采的眼神，那托着双颊的小手，还有那无言的红楼，这是最美的一幅画。"
            <footer>——
                <cite>
                        江州，小菲机
                </cite>
                </footer>
            </div>
        </main>
    )
}

export default Visual;
