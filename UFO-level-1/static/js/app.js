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

var form = d3.select("#form-group");
var button = d3.select("#filter-btn");

button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {
    d3.event.preventDefault();
    var inputElement = d3.select("#date-time");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    var filteredData = tableData.filter(date => parseDate(date.datetime) === parseDate(inputValue));
    console.log(filteredData)}