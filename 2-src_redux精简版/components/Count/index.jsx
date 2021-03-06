import React, {Component} from 'react';
import store from '../../redux/store';

class Count extends Component {

  state = {
    carName: '凯迪拉克'
  };

  // componentDidMount(){
  //   // 检测redux中状态的变化，只要变化，就调用reducer
  //   store.subscribe(() => {
  //     this.setState({});
  //   })
  // }

  increment = () => {
    const {value} = this.selectNum;
    store.dispatch({type: 'increment', data: value*1})
  };

  decrement = () => {
    const {value} = this.selectNum;
    store.dispatch({type: 'decrement', data: value*1})
  };

  incrementIfOdd = () => {
    const count = store.getState();
    const {value} = this.selectNum;
    if (count % 2 === 1){
      store.dispatch({type: 'increment', data: value*1})
    }
  };

  incrementAsync = () => {
    const {value} = this.selectNum;
    setTimeout(() => {
      store.dispatch({type: 'increment', data: value*1})
    },1000);
  };
  
  render() {
    return (
        <div>
          <h2>当前计数为：{store.getState()}</h2>
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

export default Count;