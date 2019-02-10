// Old outdated code

// var canvas = d3.select('body').append('svg')
// 	.attr('width', 500)
// 	.attr('height', 500)
// var diagonal = d3.svg.diagonal()
// 	.source({x:10, y: 10})
// 	.target({x: 300, y:300})

// canvas.append('path')
// 	.attr('fill', "none")
// 	.attr('stroke','black')
// 	.attr("d", diagonal)



 
let family = {
	"name": "Eve",
	"children": [
    {
      "name": "Cain"
    },
    {
      "name": "Seth",
      "children": [
        {
          "name": "Enos"
        },
        {
          "name": "Noam"
        }
      ]
    },
    {
      "name": "Abel"
    },
    {
      "name": "Awan",
      "children": [
        {
          "name": "Enoch"
        }
      ]
    },
    {
      "name": "Azura"
    }
  ]
}

// testing tree
// console.log(d3.hierarchy(tree))

// // member = tree.children[2]
// console.log("Tree descendants", root.descendants())
// // console.log("Member ancestors", member.ancestors())

// d3.cluster(root)

// d3.tree(root)

// d3.select()

// d3.json()

// var svgContainer = d3.select("body").append("svg")
//                                     .attr("width", 200)
//                                     .attr("height", 200);

// //Draw the Circle
// var circle = svgContainer.append("circle")
//                          .attr("cx", 30)
//                          .attr("cy", 30)
//                          .attr("r", 20);
//   var svg = d3.select("body")
//     .append("svg")
//     .attr("width", 500)
//     .attr("height", 50)
//     .style("background-color", "yellow")
//     .style("border", "2px solid orange");

// shit code
const svg = d3.select('body').append('svg')

// const width = document.body.clientWidth
// const height = document.body.clientHeight
const width = 500
const height = 500
const margin = { top: 50, right: 50, bottom: 50, left: 50};
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;
const root = d3.hierarchy(family)
const myTree = d3.tree()
	.size([innerHeight, innerWidth])

const zoomG = svg.attr('width', width).attr('height', height)
				.append('g')
				
const g = zoomG.append('g')
				.attr('transform', `translate(${margin.left}, ${margin.right})`)
	
svg.call(d3.zoom().on('zoom', () =>{
	zoomG.attr('transform', d3.event.transform)
}))

const links = myTree(root).links()
const linkPathGenerator = d3.linkHorizontal()
	.x(d => d.y)
	.y(d => d.x)
g.selectAll('path').data(links)
	.enter().append('path')
	.attr('d', linkPathGenerator)

g.selectAll('text').data(root.descendants())
	.enter().append('text')
		.attr('x', d=> d.y)
		.attr('y', d=> d.x)
		.attr('dy', '0.32em')
        .attr('text-anchor', d=> d.children ? 'middle' : 'start')
        .attr('font-size', d => 3.25 - d.depth + 'em')
		.text(d => d.data.name)