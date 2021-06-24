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
    if (inputValue !== "") {
        var filteredData = tableData.filter(input => input.datetime === inputValue);
    }
    else
    {var filteredData = tableData;
    }
    console.log(filteredData)

    var inputElement2 = d3.select("#city");
    var inputValue2 = inputElement2.property("value");
    if (inputValue2 !== "") {
        filteredData = filteredData.filter(input => input.city === inputValue2);
    }
    else    {
        filteredData = filteredData    
    }
    console.log(filteredData)

    var inputElement3 = d3.select("#state");
    var inputValue3 = inputElement3.property("value");
    if (inputValue3 !== "") {
        filteredData = filteredData.filter(input => input.state === inputValue3);
    }
    else    {
        filteredData = filteredData    
    }
    console.log(filteredData)

    var inputElement4 = d3.select("#country");
    var inputValue4 = inputElement4.property("value");
    if (inputValue4 !== "") {
        filteredData = filteredData.filter(input => input.country === inputValue4);
    }
    else    {
        filteredData = filteredData    
    }
    console.log(filteredData)

    var inputElement5 = d3.select("#shape");
    var inputValue5 = inputElement5.property("value");
    if (inputValue5 !== "") {
        filteredData = filteredData.filter(input => input.shape === inputValue5);
    }
    else    {
        filteredData = filteredData    
    }
    console.log(filteredData)

    filteredData.forEach(function(ufoReport)   {
    
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    
    
    
    console.log(filteredData)};