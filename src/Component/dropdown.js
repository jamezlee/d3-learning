import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

class dropdown extends Component {
    constructor(props) {
        super(props)
    }
   
    render() {
        return(
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {this.props.gender}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onSelect={() => this.props.genderSelect("men")}>Men</Dropdown.Item>
                    <Dropdown.Item  onSelect={() => this.props.genderSelect("women")}>Women</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )

    }
    
}
export default dropdown