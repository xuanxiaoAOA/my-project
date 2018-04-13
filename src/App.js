import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DemoMixin1_1 from './mixin/demo1_1'
import DemoMixin1_2 from './mixin/demo1_2'
import DemoMixin2_1 from './mixin/demo2_1'
import DemoMixin2_2 from './mixin/demo2_2'
class App extends Component {
  constructor() {
      super();
      this.state = {
          num: 0
      }
  }
  change(){
    this.setState({
      num:this.state.num+1
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div onClick={this.change.bind(this)}>总和：{this.state.num}</div>
        <DemoMixin1_1/>
        <DemoMixin1_2/>
        <DemoMixin2_1/>
        <DemoMixin2_2/>
      </div>
    );
  }
}

export default App;
