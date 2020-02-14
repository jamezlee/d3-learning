import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test'
import ChartWrapper from './ChartWrapper'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
// api https://udemy-react-d3.firebaseio.com/ages.json
class App extends Component   {


  constructor(props){
    super(props)
    this.state = {
      nameState:0
    }
    this.onClickMe = this.onClick.bind(this)
  }

  onClick=()=>{
    console.log(this.state.nameState)
    this.setState({
      nameState:this.state.nameState + 1
    }
      
    )
  }

  render() {
    const {nameState} = this.state
    return (
      <div className="App">
        <Navbar bg="light">
          <Navbar.Brand>bar chart</Navbar.Brand>
        </Navbar>
      <Container>
      <ChartWrapper />
      </Container>
     
      </div>
    );
  }

 
}

export default App;
