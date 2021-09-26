const links = [
    {
      label: "Week1",
      url: "week1/index.html"
    },
    {
      label: "Week2",
      url: "week2/index.html"
    }
  ];
  let text;
  links.forEach(myFunction);
  
  function myFunction(value) {
    var label = document.createElement("li");
    var url = document.createElement("a");
    var link = document.createTextNode(value.label);         
    // Append the text node to anchor element.
    url.appendChild(link); 
    url.href = value.url
    label.appendChild(url);
    document.getElementById("table_of_contents").appendChild(label);

  }
  