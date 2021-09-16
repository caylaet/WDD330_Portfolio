const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    }
  ];
  let text;
  fruits.forEach(myFunction);
  
  function myFunction(value) {
    text += '<li> <a href="'+ value.url + '">'+value.label+ '</a></li>';
  }
  document.getElementById("table_of_contents").appendChild(text)