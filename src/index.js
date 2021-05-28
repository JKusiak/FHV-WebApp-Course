// const casesAustriaURL = "https://api.covid19api.com/dayone/country/austria";
// const activeWorldURL = "https://api.covid19api.com/summary";

// const width = 1920;
// const height = 1080;
// const margin = {top: 45, right: 45, bottom: 45, left: 45};
// const innerWidth = width - margin.left - margin.right;
// const innerHeight = height - margin.top - margin.bottom;


// function addCanvasSVG() {
//       let canvas = d3.select("body")
//       .append("svg")
//             .attr("width", width)
//             .attr("height", height)
//       .append("g")
//             .attr("transform", `translate(${margin.left}, ${margin.top})`);

//       return canvas;
// }

// function drawBarGraph(data, canvas) {
//       const xScale = scaleLinear()
//             .domain([0, max(data, d => d.activeCases)]);

//       console.log(xScale.domain);
      
//       canvas.selectAll('rect').data(data)
//             .enter().append('rect')
//             .attr('width', 100)
//             .attr('height', 100)    
// }

// d3.json(activeWorldURL, (error, jsonData) => {
//       const barData = jsonData.Countries.map(country => {
//             return {
//                   countryName: country.Country,
//                   activeCases: country.TotalConfirmed - country.TotalDeaths - country.totalRecovered
//             }
//       }).sort((a, b) => (b.activeCases - a.activeCases)).slice(0, 10);

//       const svgCanvas = addCanvasSVG();
//       drawBarGraph(barData, svgCanvas);
// });