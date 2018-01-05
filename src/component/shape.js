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
                        // 用一张图片来试一试
                    </div>
                </div>
            </div>
        );
    }
}

export default Shape;
