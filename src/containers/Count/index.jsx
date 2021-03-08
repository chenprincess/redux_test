// 引入Count的UI组件
import CountUI from '../../components/Count';

// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux';

import {
  increment,
  decrement,
  incrementAsync
} from '../../redux/count_action';

// 映射状态
function mapStateToProps(state) {
  return {count: state}
}
// 映射操作状态的方法
function mapDispatchToProps(dispatch) {
  return {
    increment: data => dispatch(increment(data)),
    decrement: data => dispatch(decrement(data)),
    incrementAsync: (data,time) => dispatch(incrementAsync(data,time))
  }
}
// 使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI);
