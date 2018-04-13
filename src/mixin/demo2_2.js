import React, {Component} from 'react';
import Demo2_component  from "./demo2_component";

class Demo2_1 extends Demo2_component {
    componentWillMount() {
        console.log('Demo2_2 componentWillMount')
    }
    render() {
        console.log('Demo2_2 render')
        return (
            <div style={styles.box}>
                <span style={{color:'red'}}>Demo2_2 继承Demo2_component</span>
                <p style={styles.font} onClick={this.add.bind(this)}>+</p>
                <p style={styles.font} onClick={this.subtract.bind(this)}>-</p>
                <p>{this.state.count}</p>
            </div>
        )
    }
    
}

let styles={
    box:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    font:{
        background:'#42b983',
        display: 'flex',
        width:44,
        height:44,
        justifyContent: 'center',
        alignItems: 'center',
    }
}
export default Demo2_1;