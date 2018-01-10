import React, { Component } from 'react';

class Shape extends Component {
    render() {
        return (
            <div className="chapter3">
                {/* 自适应椭圆 */}
                <h1>利用了border-radius接收百分比，且基于元素的长宽进行水平和锤子方向的半径解析</h1>
                <div className="adaptive-ellipse base">
                    <div className="circle">长宽一样就是圆</div>
                    <div className="ellipse">长宽不一样就是椭圆</div>
                    <div className="half-ellipse">半圆或者椭圆</div>
                    <div className="quarter-ellipse">四分之一的圆或者椭圆</div>
                </div>
                {/* 平行四边形 */}
                <h1>利用伪元素的transform变形</h1>
                <div className="parallelogram base">
                    <div className="parallelogram-1">
                        <p>内容不会变形</p>
                    </div>
                </div>
                {/* 菱形裁剪 */}
                <h1>利用clip-path属性</h1>
                <div className="diamond base">
                    <div className="diamond-1">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515383383749&di=bc5592e10b7e72085a2b2c031b66c834&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2F1208%2F1712%2Fntk-1712-67346.jpg" alt="..."/>
                    </div>
                    <div className="circle-1">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515383383749&di=bc5592e10b7e72085a2b2c031b66c834&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2F1208%2F1712%2Fntk-1712-67346.jpg" alt="..."/>
                    </div>
                </div>

                {/* 切角效果的背景 */}
                <h1>利用CSS渐变角度+透明色的效果</h1>
                <div className="angle base">
                    <div className="one">切一个角</div>
                    <div className="four">切四个角</div>
                    <div className="four-mixin">利用less的mixin切四个角</div>                    
                </div>
            </div>
        );
    }
}

export default Shape;
