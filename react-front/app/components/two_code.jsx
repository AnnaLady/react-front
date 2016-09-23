import React from 'react';
import ReactDOM from 'react-dom';
export default class TwoCode extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="two-dimensional-code">
        <div className="mes-wrap">
          <div className="mes-row mes-first">
            <div className="add-border clearfix">
              <span className="mes-label font-22 mes-title">浙 000006</span>
              <span className="pull-right">
                <span className="mes-box">生效中</span>
                <span><strong>有效期 至</strong> 2016<strong> 年 </strong>12<strong> 月 </strong>20<strong> 日 </strong></span>
              </span>
            </div>
          </div>
          <div className="mes-row">
            <div className="add-border clearfix">
              <div className="mes-col">
                <span className="mes-label">机动车所有人</span>
                <span className="pull-right">金俊杰</span>
              </div>
              <div className="mes-col">
                <span className="mes-label">住址</span>
                <span className="pull-right">杭州市余杭区良褚街道东方西路</span>
              </div>
              <div className="mes-col">
                <span className="mes-label">车牌类型</span>
                <span className="pull-right">小型轿车</span>
              </div>
              <div className="mes-col">
                <span className="mes-label">厂牌型号</span>
                <span className="pull-right">奔驰BJ7204GEL</span>
              </div>
              <div className="mes-col">
                <span className="mes-label">发动机号</span>
                <span className="pull-right">10412936</span>
              </div>
              <div className="mes-col">
                <span className="mes-label">车辆识别代码/车架号码</span>
                <span className="pull-right">LE4WG4CB0GL175376</span>
              </div>
              <div className="mes-col">
                <span className="mes-label">核定载质量</span>
                <span className="pull-right">0 <strong>千克</strong></span>
              </div>
              <div className="mes-col">
                <span className="mes-label">核定载客</span>
                <span className="pull-right">5 <strong>人</strong></span>
              </div>
            </div>
          </div>
          <div className="mes-row">
            <div className="add-border chapter-wrap clearfix">
              <div className="inner-col">
                <span className="mes-label">发牌机关章</span>
                <span className="mes-chapter">浙江省杭州市公安局交通警察支队</span>
              </div>
              <div className="pull-right inner-col">
                <span className="mes-label">签发人</span>
                <div className="user-mes-wrap pull-right">
                  <span className="user-name font-18">张鹤</span>
                  <span>2016<strong> 年 </strong>9<strong> 月 </strong>20<strong> 日</strong></span>
                </div>
              </div>
            </div>
          </div>
          <div className="mes-row mes-last">
            <span className="mes-label">备注</span>
            <span className="other-mes">备注信息</span>
          </div>
        </div>
      </div>
    )
  }
}
