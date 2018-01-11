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

                {/* 满幅的背景，定下宽度的内容 */}
                <h1>满幅的背景，定下宽度的内容：利用了calc()函数来计算margin,但是并不算好用</h1>
                <ul className="centermargin">
                    <li>
                        <p>即使眼前唯有漫寞长夜,也只愿坚持自己的抉择,你的步伐与我如此相似,令我畏惧这片欲罢不能的天空</p>
                    </li>
                    <li>
                        <p>即使眼前唯有漫寞长夜,也只愿坚持自己的抉择,你的步伐与我如此相似,令我畏惧这片欲罢不能的天空</p>
                    </li>
                    <li>
                        <p>即使眼前唯有漫寞长夜,也只愿坚持自己的抉择,你的步伐与我如此相似,令我畏惧这片欲罢不能的天空</p>
                    </li>
                    <li>
                        <p>即使眼前唯有漫寞长夜,也只愿坚持自己的抉择,你的步伐与我如此相似,令我畏惧这片欲罢不能的天空</p>
                    </li>
                </ul>

                {/* 根据兄弟元素的数量来设置样式 */}
                <h1>根据兄弟元素的数量来设置样式：利用多个伪元素nth-child</h1>
                <ul className="brother">
                    <li>
                        <img src="https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=09a7358eaa64034f1bc0ca54ceaa1254/dbb44aed2e738bd4f1404962a08b87d6277ff904.jpg" />
                    </li>
                    <li>
                        <img src="https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=09a7358eaa64034f1bc0ca54ceaa1254/dbb44aed2e738bd4f1404962a08b87d6277ff904.jpg" />
                    </li>
                    <li>
                        <img src="https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=09a7358eaa64034f1bc0ca54ceaa1254/dbb44aed2e738bd4f1404962a08b87d6277ff904.jpg" />
                    </li>
                    <li>
                        <img src="https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=09a7358eaa64034f1bc0ca54ceaa1254/dbb44aed2e738bd4f1404962a08b87d6277ff904.jpg" />
                    </li>
                </ul>
            


            </div>
        );
    }
}

export default Layout;
