// 引入Count的UI组件
import CountUI from '../../components/Count';

// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux';

import {
  increment,
  decrement,
  incrementAsync
} from '../../redux/count_action';

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
)(CountUI);
