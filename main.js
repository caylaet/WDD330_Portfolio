const links = [
    {
      label: "Week1",
      url: "week1/index.html"
    },
    {
      label: "Week2",
      url: "week2/index.html"
    },
    {
      label: "Week3",
      url: "week3/index.html"
    },
    {
      label: "Week4",
      url: "week4/index.html"
    },
    {
      label: "Week5",
      url: "week5/index.html"
    },
    {
      label: "Week6",
      url: "week6/index.html"
    },
    {
      label: "Week7",
      url: "week7/index.html"
    },
    {
      label: "Week8",
      url: "week8/index.html"
    },
    {
      label: "Week9",
      url: "week9/index.html"
    },
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
  