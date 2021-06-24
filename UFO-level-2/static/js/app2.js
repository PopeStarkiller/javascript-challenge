// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach(function(ufoReport)   {
    
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});

// var form = d3.select("#form-group");
var button = d3.select("#filter-btn");

button.on("click", runEnter);
// form.on("submit",runEnter);

function runEnter() {
    d3.event.preventDefault();
    tbody.selectAll('tr').remove();

let filters = [
    {key:"datetime",value: d3.select("#datetime").property("value")},
    {key:"city",value: d3.select("#city").property("value")},
    {key:"state",value: d3.select("#state").property("value")},
    {key:"country",value: d3.select("#country").property("value")},
    {key:"shape",value: d3.select("#shape").property("value")}
]

var filteredData = tableData


filters.forEach(function(item){
    if (item.value !== "")
    filteredData = filteredData.filter(input => input[item.key] === item.value);
  })
  filteredData.forEach(function(ufoReport)   {
    
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
})
//   console.log(filteredData)
}
