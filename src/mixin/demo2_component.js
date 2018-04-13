import React, {Component} from 'react';
class Demo2_component extends Component {
    constructor() {
	    super();
	    this.state = {
	        count: 0
	    }
	}
	componentWillMount() {
	    console.log(this)
	}
	add(){
		this.setState({
			count:this.state.count+1
		})
	}
	subtract(){
		this.state.count>0?this.setState({
			count:this.state.count-1
		}):null
	}
}


export default Demo2_component;