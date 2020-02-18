import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test'
import ChartWrapper from './ChartWrapper'
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from './Component/dropdown'
import {Container, Row, Col} from 'react-bootstrap'
// api https://udemy-react-d3.firebaseio.com/ages.json
class App extends Component   {


  constructor(props){
    super(props)
    this.state = {
      nameState:0,
      gender:"Men"
    }
    this.onClickMe = this.onClick.bind(this)
    //this.genderSelected = this.genderSelected.bind(this)

  }

  genderSelected = (gender)=>{
    console.log(gender)
    this.setState({ gender})
  }


  onClick=()=>{
    console.log(this.state.nameState)
    this.setState({
      nameState:this.state.nameState + 1
    }
      
    )
  }

  render() {
    const {nameState, gender} = this.state
    return (
      <div className="App">
        <Navbar bg="light">
          <Navbar.Brand>bar chart</Navbar.Brand>
        </Navbar>
      <Container>
        <Row><Col xs={12}>
          <Dropdown 
        gender={gender}
        genderSelect={this.genderSelected} /></Col></Row>
        <Row><Col xs={12}><ChartWrapper /></Col></Row>
      </Container>
     
      </div>
    );
  }

 
}

export default App;
