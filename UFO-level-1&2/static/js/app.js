// from data.js
var tableData = data;

// YOUR CODE HERE!
//level 1
var tbody = d3.select("tbody");

data.forEach((info) => {
    var row = tbody.append("tr");
    Object.entries(info).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

var button = d3.select("#filter-btn")

button.on("click", function() {
    tbody.html("");
    d3.event.preventDefault(); 
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(input => input.datetime === inputValue);

    filteredData.forEach((filteredinfo) => {
        var row2 = tbody.append("tr");
        Object.entries(filteredinfo).forEach(([key, value]) => {
            var cell2 = row2.append("td");
            cell2.text(value);
            });
    });
});  

var resetbutton = d3.select("#reset")

resetbutton.on("click", function() {
    tbody.html("");
    data.forEach((info) => {
        var row = tbody.append("tr");
        Object.entries(info).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
});  

//level 2

d3.selectAll("#query").on("change",update);
function update(){
    var dropdownmenu=d3.selectAll("#query").node();
    var category=dropdownmenu.value;

    if(category==='datetime'){
        var button2 = d3.select("#filter-btn2");
        button2.on("click", function() {
            tbody.html("");
            d3.event.preventDefault(); 
            var inputElement2 = d3.select("#filter");
            var inputValue2 = inputElement2.property("value");
            var filteredData2 = tableData.filter(input2 => input2.datetime === inputValue2);
        
            filteredData2.forEach((filteredinfo2) => {
                var row2 = tbody.append("tr");
                Object.entries(filteredinfo2).forEach(([key, value]) => {
                    var cell2 = row2.append("td");
                    cell2.text(value);
                    });
            });
        });       
    }   
 

    if(category==='state'){
        var statebutton = d3.select("#filter-btn2");
        statebutton.on("click", function() {
            tbody.html("");
            d3.event.preventDefault(); 
            var stateinputElement = d3.select("#filter");
            var stateinputValue = stateinputElement.property("value");
            var statefilteredData = tableData.filter(stateinput => stateinput.state === stateinputValue);
        
            statefilteredData.forEach((statefilteredinfo) => {
                var staterow = tbody.append("tr");
                Object.entries(statefilteredinfo).forEach(([key, value]) => {
                    var statecell = staterow.append("td");
                    statecell.text(value);
                    });
            });
        });       
    }   
  


     if(category==='city'){
        var citybutton = d3.select("#filter-btn2");

        citybutton.on("click", function() {
            tbody.html("");
            d3.event.preventDefault(); 
            var cityinputElement = d3.select("#filter");
            var cityinputValue = cityinputElement.property("value");
            var cityfilteredData = tableData.filter(cityinput => cityinput.city === cityinputValue);
        
            cityfilteredData.forEach((cityfilteredinfo) => {
                var cityrow = tbody.append("tr");
                Object.entries(cityfilteredinfo).forEach(([key, value]) => {
                    var citycell = cityrow.append("td");
                    citycell.text(value);
                    });
            });
        });    
     }

     if(category==='country'){
        var countrybutton = d3.select("#filter-btn2");

        countrybutton.on("click", function() {
            tbody.html("");
            d3.event.preventDefault(); 
            var countryinputElement = d3.select("#filter");
            var countryinputValue = countryinputElement.property("value");
            var countryfilteredData = tableData.filter(countryinput => countryinput.country === countryinputValue);
        
            countryfilteredData.forEach((countryfilteredinfo) => {
                var countryrow = tbody.append("tr");
                Object.entries(countryfilteredinfo).forEach(([key, value]) => {
                    var countrycell = countryrow.append("td");
                    countrycell.text(value);
                    });
            });
        });    
     }

     if(category==='shape'){
        var shapebutton = d3.select("#filter-btn2");

        shapebutton.on("click", function() {
            tbody.html("");
            d3.event.preventDefault(); 
            var shapeinputElement = d3.select("#filter");
            var shapeinputValue = shapeinputElement.property("value");
            var shapefilteredData = tableData.filter(shapeinput => shapeinput.shape === shapeinputValue);
        
            shapefilteredData.forEach((shapefilteredinfo) => {
                var shaperow = tbody.append("tr");
                Object.entries(shapefilteredinfo).forEach(([key, value]) => {
                    var shapecell = shaperow.append("td");
                    shapecell.text(value);
                    });
            });
        });   
     }
}

var reset2button = d3.select("#reset2")

reset2button.on("click", function() {
    tbody.html("");
    data.forEach((info) => {
        var row = tbody.append("tr");
        Object.entries(info).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
});  