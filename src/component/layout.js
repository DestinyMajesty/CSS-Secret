import React, { Component } from 'react';

class Layout extends Component {
	render() {
		return (
			<div className="chapter7">
				{/* 自适应内部元素的宽度 */}
				<h1>设置css属性：width:min-content</h1>
                <div className="autowidth">
                    <p>你的身影与我如此相似，仿佛无声哭泣回荡心胸，纵然一无所知更为幸福，我却一定无法为之满足</p>
                    <figure>
                        <img src="https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=09a7358eaa64034f1bc0ca54ceaa1254/dbb44aed2e738bd4f1404962a08b87d6277ff904.jpg" />
                        <figcaption>我不曾选择平坦的道路,也不曾拂去脚上的尘土,唯有如此也能得以生存,想必你一定会微笑赞同对你许下郑重承诺,若你某日向我飞奔而来,绝不会有丝毫回避,我将坦诚迎接你的目光</figcaption>
                    </figure>
                    <p>即使眼前唯有漫寞长夜,也只愿坚持自己的抉择,你的步伐与我如此相似,令我畏惧这片欲罢不能的天空</p>
                </div>
            </div>
		);
	}
}

export default Layout;
