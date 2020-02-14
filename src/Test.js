import React, {Fragment, Component } from "react";


class Test extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {name} = this.props
        return (
            <Fragment>
                <div>{name}</div>
            </Fragment>
        )
    }
}

export default Test