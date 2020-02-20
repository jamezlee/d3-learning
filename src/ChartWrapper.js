import React,{Component} from 'react';
import D3Chart from './D3Chart';

class ChartWrapper extends Component {

    constructor(props){
        super(props)
        console.log(props)
        this.state={
            chart:null
        }
    }

    componentDidMount(){
        this.setState({
            chart: new D3Chart(this.refs.chart)
        })
    }

    // shouldComponentUpdate(){
    //     return false
    // }

    // componentDidMount() {
    //     this.setState({
    //         chart: new D3Chart(this.refs.chart, this.props.dataFromProps, this.props.circleClicked)
    //     });
    // }
 
   
 
    // static getDerivedStateFromProps(props, state) {
    //     console.log(props)
    //     console.log(state)
    //     //console.log(this.state.chart)
    //     // if (state.chart !== null) state.chart.update(props);
    //     // return state;
    // }

    // componentWillReceiveProps(nextProps, nextState) {
    //    console.log(nextProps)
    //    console.log(nextState)
    // //    console.log(this.state.chart)
    //   //  this.state.chart.update(nextProps.gender)
        
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(this.props.gender)
        console.log(nextProps)
        if(this.props.gender != nextProps){
          //  this.fetchData(nextProps);
            return true;  
        }
        else{
            return false
        }
    }

    // componentWillReceiveProps(nextProps) {
    //    console.log(nextProps)
    //    console.log(this.state.chart)
    //     //this.state.chart.update(nextProps.gender)
    //     // this.setState({
    //     //     chart:nextProps.gender
    //     // })
    // }


    render() {
        return (
            <div ref="chart"></div>
        )
    }
}
export default ChartWrapper