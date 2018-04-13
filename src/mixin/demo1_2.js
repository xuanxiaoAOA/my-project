import React, {Component} from 'react';
import Demo1_GetName  from "./demo1_getName";

class Demo1_2 extends Component {
	componentWillMount() {
        console.log('Demo1_2 componentWillMount')
	}
    render() {
	    console.log('Demo1_2 render')
        return (
            <div><span style={{color:'red'}}>Demo1_2 将组件传递给getName组件 </span>{this.props.username}</div>
        )
    }
}


export default Demo1_GetName(Demo1_2);