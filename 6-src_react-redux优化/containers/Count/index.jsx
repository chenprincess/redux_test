// 引入Count的UI组件
import React, {Component} from 'react';

// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux';

import {
  increment,
  decrement,
  incrementAsync
} from '../../redux/count_action';

// 定义UI组件
class Count extends Component {

  state = {
    carName: '凯迪拉克'
  };

  increment = () => {
    const {value} = this.selectNum;
    this.props.increment(value*1);
  };

  decrement = () => {
    const {value} = this.selectNum;
    this.props.decrement(value*1);
  };

  incrementIfOdd = () => {
    const {value} = this.selectNum;
    if (this.props.count % 2 === 1){
      this.props.increment(value*1);
    }
  };

  incrementAsync = () => {
    const {value} = this.selectNum;
    this.props.incrementAsync(value*1,1000);
  };

  render() {
    // console.log(this.props);
    return (
        <div>
          <h2>当前计数为：{this.props.count}</h2>
          <select ref={c => {this.selectNum = c}}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.incrementIfOdd}>当前求和为奇数时加</button>
          <button onClick={this.incrementAsync}>异步加</button>
        </div>
    );
  }
}

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
    // 映射状态
    state => ({count: state}),
    // 映射操作状态的方法，可以是一个对象（简写）
    {
      increment,
      decrement,
      incrementAsync
    }
)(Count);
