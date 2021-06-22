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
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    // console.log(inputValue);
    if (inputValue !== "") {
        var filteredData = tableData.filter(input => input.datetime === inputValue);
    }
    else 
        {var filteredData = tableData;
    }
    // tbody.append(filteredData)
    // var filteredData = tableData.filter(date => parseDate(date.datetime) === parseDate(inputValue));
    filteredData.forEach(function(ufoReport)   {
    
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    
    
    
    console.log(filteredData)};