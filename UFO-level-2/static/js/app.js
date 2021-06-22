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
    var inputElement2 = d3.select("#city");
    var inputValue2 = inputElement.property("value");
    var inputElement3 = d3.select("#state");
    var inputValue3 = inputElement.property("value");
    var inputElement4 = d3.select("#country");
    var inputValue4 = inputElement.property("value");
    var inputElement5 = d3.select("#shape");
    var inputValue5 = inputElement.property("value");
    if (inputValue !== "") {
        var filteredData = tableData.filter(input => input.datetime === inputValue);
    }
    else 
        {var filteredData = tableData;
    }
    filteredData.forEach(function(ufoReport)   {
    
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    
    
    
    console.log(filteredData)};