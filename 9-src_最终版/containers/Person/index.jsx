import React, {Component} from 'react';
import {add_person} from '../../redux/actions/person';
import {connect} from 'react-redux';

class Person extends Component {
  addPerson =() => {
    const name = this.nameNode.value;
    const age = this.ageNode.value*1;
    const id = new Date().getTime();
    const obj = {id, name, age};
    this.props.add_person(obj);
    this.nameNode.value = '';
    this.ageNode.value = '';
  };

  render() {
    return (
        <div>
          <h2>上面组件的求和为：{this.props.count}</h2>
          <input type="text" placeholder='请输入姓名' ref={c => this.nameNode = c}/>
          <input type="text" placeholder='请输入年龄' ref={c => this.ageNode = c}/>
          <button onClick={this.addPerson}>添加</button>
          <ul>
            {
              this.props.person.map(p => {
                return <li key={p.id}>{p.name}--{p.age}</li>
              })
            }
          </ul>
        </div>
    );
  }
}

export default connect(
    // 映射状态
    state => ({
      person: state.person,
      count: state.count
    }),
    // 映射操作状态的方法
    {
      add_person
    }
)(Person);