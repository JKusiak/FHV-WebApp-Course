const casesAustriaURL = "https://api.covid19api.com/dayone/country/austria";
const activeWorldURL = "https://api.covid19api.com/summary";

const width = 1240;
const height = 550;
const margin = {top: 45, right: 45, bottom: 45, left: 75};

// accessors
const xValue = d => d.countryName;
const yValue = d => d.activeCases;


function addCanvasSVG(translationX, translationY) {
      let canvas = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr('transform', `translate(${translationX}, ${translationY})`);   

      return canvas;
}


function renderBarGraph(data, canvas) {
      const xScale = d3.scaleBand()
            .domain(data.map(element => xValue(element)))
            .range([0, width - margin.right])
            .padding(0.3);

      const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, element => yValue(element))])
            .range([height, 0]);

      canvas.append("g")
            .call(d3.axisBottom(xScale))
            .attr('transform', `translate(${margin.left - 20}, ${height - margin.bottom + 5})`)
            .style('font-weight', 'bold')
            .style('font-size', '16')
            .selectAll('.domain, .tick line')
                  .remove();

      canvas.append("g")
            .attr('transform', `translate(${margin.left}, ${-margin.bottom + 5})`)
            .call(d3.axisLeft(yScale))
            .selectAll('.tick line')
                  .remove();

      canvas.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('fill', '#e52728')
            .attr('height', 0)
            .attr('y', height - margin.bottom + 5)
            .attr('width', xScale.bandwidth())
            .attr('x', element => xScale(xValue(element)) + margin.left - 20)
            .transition()
            .duration(3000)
            .attr('height', element => height - yScale(yValue(element)) + 5)
            .attr('y', element => yScale(yValue(element)) - margin.bottom)
}


function renderLineGraph(data, canvas) {
      const xScale = d3.scaleTime()
            .domain(d3.extent(data, element => element.date))
            .range([0, width - margin.right])

      const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, element => element.activeCases)])
            .range([height, 0]);

      const xAxis = d3.axisBottom(xScale)
            .tickSize(-height)
            
      const yAxis = d3.axisLeft(yScale)
            .tickSize(-width);

      canvas.append('g')
            .call(xAxis)
            .attr('transform', `translate(${margin.left}, ${height - margin.bottom})`)
            .selectAll(".tick line")
            .attr("stroke", "#DCDCDC");
            
      canvas.append('g')
            .call(yAxis)
            .attr('transform', `translate(${margin.left}, ${-margin.bottom})`)
            .selectAll(".tick line")
            .attr("stroke", "#DCDCDC");

      canvas.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "#e52728")
            .attr("stroke-width", 4)
            .attr("d", d3.line()
                .x(element => xScale(element.date) + margin.left)
                .y(element => yScale(element.activeCases) - margin.bottom));
}


d3.json(activeWorldURL, (jsonData) => {
      const barData = jsonData.Countries.map(country => {
            return {
                  countryName: country.CountryCode,
                  activeCases: country.TotalConfirmed - country.TotalDeaths - country.TotalRecovered
            }
      }).sort((a, b) => (b.activeCases - a.activeCases)).slice(0, 10);
      
      const barCanvas = addCanvasSVG(margin.left, margin.top);
      renderBarGraph(barData, barCanvas);
});


d3.json(casesAustriaURL, (jsonData) => {
      const lineData = jsonData.map(element => {

            return {
                  date: new Date(element.Date),
                  activeCases: element.Active
            }
      });
      
      const lineCanvas = addCanvasSVG(margin.left, margin.top);
      renderLineGraph(lineData, lineCanvas);
})