// import React,{Component} from 'react';
import * as d3 from 'd3'
import { svg } from 'd3'

// export default D3Chart
const data = [20, 12, 16, 24, 20]
const url = "https://udemy-react-d3.firebaseio.com/ages.json"

const menUrl = "https://udemy-react-d3.firebaseio.com/tallest_men.json"
export default class D3Chart {
    constructor(element) {
        //   console.log(d3.select(element))
        const svg = d3.select(element)
            .append("svg")
            .attr("width", 500)
            .attr("height", 500)
      


        d3.json(menUrl).then(data=>{
            const rects = svg.selectAll("rect")
            .data(data)
            rects.enter()
            .append("rect")
            .attr("x",(d,i)=>i*100)
            .attr("y",50)
            .attr("width",50)
            .attr("height", d=>d.age * 10)
            .attr("fill", d=>{
                if (d.age> 10){
                    return "red"
                }
                
                    return "green"
                
            })
        })
        
        // data.forEach((d, i) => {

        //     svg.append("rect")
        //         .attr("x", i*100)
        //         .attr("y", 50)
        //         .attr("width", 50)
        //         .attr("height", d)
        //         .attr("fill", "gary")

        // })
    }
}