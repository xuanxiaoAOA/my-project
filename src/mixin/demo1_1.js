import React, {Component} from 'react';
import Demo1_GetName  from "./demo1_getName";

class Demo1_1 extends Component {
	componentWillMount() {
        console.log('Demo1_1 componentWillMount')
	}
    render() {
	    console.log('Demo1_1 render',this)
        return (
            <div><span style={{color:'red'}}>Demo1_1 将组件传递给Demo1_GetName组件</span> {this.props.username}</div>
        )
    }
}


export default Demo1_GetName(Demo1_1);