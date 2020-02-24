// import React,{Component} from 'react';
import * as d3 from 'd3'
import { svg } from 'd3'

// export default D3Chart
const data = "https://flyinglogbook-8012b.firebaseio.com/survivor/0.json"

const MARGIN = { TOP: 10, BOTTOM: 50, LEFT: 70, RIGHT: 10 }
const WIDTH = 800 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM;


export default class D3LineChart {

    constructor(element) {
        const vis = this
        vis.svg = d3.select(element)
            .append("svg")
            .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
            .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
            .append("g")
            .attr("transform", `translate(${MARGIN.LEFT},${MARGIN.TOP})`)

    
        
        vis.xLabel = vis.svg.append("text")
            .attr("x", WIDTH / 2)
            .attr("y", HEIGHT + 50)
            .attr("text-anchor", "middle")
                
        vis.svg.append("text")
            .attr("x", -(HEIGHT / 2))
            .attr("y", -50)
            .attr("text-anchor", "middle")
            .text("height in cm")
            .attr("transform", "rotate(-90)")

        vis.xAxisGroup = vis.svg.append("g")
            .attr("transform", `translate(0,${HEIGHT})`)

        vis.yAxisGroup = vis.svg.append("g")

        // Promise.all([
        //     d3.json(menUrl),
        //     d3.json(womenUrl)
        // ]).then((dataSet) => {
        //     vis.menData = dataSet[0]
        //     vis.womenData = dataSet[1]
        //     vis.update("men")
        //     // const [men, women] = dataSet
        //     // let flag = true
        //     // vis.data = men
        //     // vis.updated()
        //     // d3.interval(() => {
        //     //     vis.data = flag ? men : women
        //     //     vis.updated()
        //     //     flag =! flag
        //     // }, 1000)
        // })
       
    }

    update(gender) {
    
    }
}