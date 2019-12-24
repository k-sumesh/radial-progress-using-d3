import * as d3 from 'd3'
const percentage = "50"
const trackWidth = "12"
const trackColor = "#555555"
const fillColor = "#00C0FF"
const textColor = '#00C0FF'
const strokeColor = "#FFFFFF"
const strokeSpacing = "4px"
// const wrapper = document.getElementById('progress')
const start = 0;
const end = parseFloat(percentage)
const raduis = 30
const border = trackWidth
const endAngle = Math.PI * 2
const boxSize = raduis * 2
let count = end
let progress = start
const step = end < start ? -0.01 : 0.01

let circle = d3.arc()
    .innerRadius(raduis)
    .outerRadius(raduis - border)
    .startAngle(0)
    
const svg = d3.select('#progress').append('svg').attr('width', boxSize).attr('height', boxSize)
const g = svg.append('g').attr('transform', `translate(${boxSize / 2},${boxSize / 2})`)
const track = g.append('path').attr('fill', trackColor).attr('stroke', strokeColor).attr('stroke-width', strokeSpacing)
    .attr('d', circle.endAngle(endAngle))
var value = g.append('path').attr('fill', fillColor)
    .attr('stroke', strokeColor).attr('stroke-width', strokeSpacing)

    function update(progress) {
        //update position of endAngle
        value.attr('d', circle.endAngle(endAngle * progress));
        //update text value
        // numberText.text(formatText(progress));
      } 
      
      (function iterate() {
        //call update to begin animation
        update(progress);
        if (count > 0) {
          //reduce count till it reaches 0
          count--;
          //increase progress
          progress += step;
          //Control the speed of the fill
          setTimeout(iterate, 10);
          iterate()
        }
      })();