import React, {Component} from 'react'

export default (WrappedComponent) => {
    class Demo1_GetName extends Component {
        constructor() {
            super();
            this.state = {
                username: ''
            }
        }
        componentWillMount() {
            this.setState({
                username: 'name'
            })
        }
        render() {
            return <WrappedComponent {...this.state} />
        }
    }

    return Demo1_GetName
}