import React, { Component } from 'react';

class Font extends Component {
    render() {
        return (
            <div className="chapter5">
                {/* 文本行的斑马条纹 */}
                <h1>文本行的斑马条纹,利用了背景渐变、背景定位基准来实现</h1>
                <div className="zebra base">
                    <div className="poetry">
                        <p>即使眼前唯有漫寞长夜,也只愿坚持自己的抉择,你的步伐与我如此相似,令我畏惧这片欲罢不能的天空</p>
                        <p>你的身影与我如此相似，仿佛无声哭泣回荡心胸，纵然一无所知更为幸福，我却一定无法为之满足</p>
                        <p>我不曾选择平坦的道路,也不曾拂去脚上的尘土,唯有如此也能得以生存,想必你一定会微笑赞同对你许下郑重承诺,若你某日向我飞奔而来,绝不会有丝毫回避,我将坦诚迎接你的目光</p>
                    </div>

                </div>

            </div>
        );
    }
}

export default Font;
