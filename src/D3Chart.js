// import React,{Component} from 'react';
import * as d3 from 'd3'
import { svg } from 'd3'

// export default D3Chart
const data = [20, 12, 16, 24, 20]
const url = "https://udemy-react-d3.firebaseio.com/ages.json"
const MARGIN ={ TOP:10, BOTTOM:10, LEFT: 10, RIGHT: 10 }
const WIDTH = 800 - MARGIN.LEFT - MARGIN.RIGHT
const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM

const menUrl = "https://udemy-react-d3.firebaseio.com/tallest_men.json"
export default class D3Chart {
    constructor(element) {
        const vis = this
        //   console.log(d3.select(element))
        // svg canvels
        vis.svg = d3.select(element)
            .append("svg")
            .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT ) 
            .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM +100)
            .append("g")
            .attr("transform", `translate(${MARGIN.LEFT+50},${MARGIN.TOP+20})`)
       
      

        // constructor mention
        vis.svg.append("text")
            .attr("x", WIDTH /2)
            .attr("y", HEIGHT+40)
            .attr("text-anchor","middle")
            .text("The world tallerst man")

        vis.svg.append("text")
            .attr("x",- [ HEIGHT /2])
            .attr("y", -50)
            .attr("text-anchor","middle")
            .text("height in cm")
            .attr("transform",`rotate(-90)`)

        

            
        d3.json(menUrl).then(data=>{
            vis.data = data
            d3.interval((data,svg)=>{
                vis.update()
            },1000)
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

    update(){
        const vis = this
        const max = d3.max(vis.data,d =>{
            return d.height
        })
        const min = d3.min(vis.data, d=>{
            return d.height - 0.95
        })

        const y = d3.scaleLinear()
        .domain([min,max])
        .range([HEIGHT,0])

        const x = d3.scaleBand()
        .domain(vis.data.map(d=>d.name))
        .range([0,WIDTH])
        .padding(0.4)

        const xAxisCall = d3.axisBottom(x)
        vis.svg.append("g")
        .attr("transform",`translate(0, ${HEIGHT})`)
        .call(xAxisCall)

        const yAxisCall  = d3.axisLeft(y)
        vis.svg.append("g").call(yAxisCall)


        // const rects = svg.selectAll("rect")
        // .data(data)
        // rects.enter().append("rect")
        // .attr("x",d=>x(d.name))
        // .attr("y",d => y(d.height))
        // .attr("width",x.bandwidth)
        // .attr("height",d =>HEIGHT - y(d.height))
        // .attr("fill", "gary")
    }
}