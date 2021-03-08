import React, {Component} from 'react';

class Count extends Component {
  state = {
    count:0
  };

  increment = () => {
    const {value} = this.selectNum;
    const {count} = this.state;
    this.setState({
      count: count + value*1
    })
  };

  decrement = () => {
    const {value} = this.selectNum;
    const {count} = this.state;
    this.setState({
      count: count - value*1
    })
  };

  IncrementIfOdd = () => {
    const {value} = this.selectNum;
    const {count} = this.state;
    if (count % 2 === 1){
      this.setState({
        count: count + value*1
      })
    }
  };

  IncrementAsync = () => {
    const {value} = this.selectNum;
    const {count} = this.state;
    setTimeout(() => {
      this.setState({
        count: count + value*1
      })
    },1000);
  };

  render() {
    return (
        <div>
          <h2>当前求和为：{this.state.count}</h2>
          <select ref={c => this.selectNum = c}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.IncrementIfOdd}>奇数时加</button>
          <button onClick={this.IncrementAsync}>异步加</button>
        </div>
    );
  }
}

export default Count;