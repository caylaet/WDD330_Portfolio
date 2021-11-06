
const urlInitial = "https://swapi.dev/api/starships";

const view = document.getElementById("display");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const nav = document.getElementById("nav");
const back = document.getElementById("back");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");

let page;
let starship; 
// console.log(starship);
let table;
let nextURL;
let previousURL;

function setNext(data){
    // console.log(data);
    nextURL = data.next;
    // console.log(nextURL);

}

function setPrevious(data){
    previousURL = data.previous;
    // console.log(previousURL);
}


function displayData(data){
    view.innerHTML = "";
    // console.log(data);
    table = "<table> <tr> <th>Starship Names</th></tr>";
    data.results.forEach(element => {
        table += "<tr>";
        table += `<td class="starshipName" name="${element.name}">${element.name}</td>`;
        table +="</tr>";
        
    });

    table += "</table>";
    view.innerHTML = table;
}
function displayOne(element){
    view.innerHTML = "";
    table = `<table><table> <tr> <th>${element.name}</th></tr>`;
    table += "<tr>";
    table += `<td>Model:</td>`;
    table += `<td>${element.model}</td>`;
    table +="</tr>";

    table += "<tr>";
    table += `<td>Manufacturer:</td>`;
    table += `<td>${element.manufacturer}</td>`;
    table +="</tr>";

    table += "<tr>";
    table += `<td>Cost in Credits:</td>`;
    table += `<td>${element.cost_in_credits}</td>`;
    table +="</tr>";

    table += "<tr>";
    table += `<td>Length:</td>`;
    table += `<td>${element.length}</td>`;
    table +="</tr>";

    table += "<tr>";
    table += `<td>cargo capacity:</td>`;
    table += `<td>${element.cargo_capacity}</td>`;
    table +="</tr>";

    table += "<tr>";
    table += `<td>Max Atmosphering Speed:</td>`;
    table += `<td>${element.max_atmosphering_speed}</td>`;
    table +="</tr>";

    table += "</table>";
    view.innerHTML = table;
}
async function getStarships(url){
    try {
        const response = await fetch(url);
        const result = response.json();
        return result;
    } catch (error) {
        console.log(error);
        
    }
 
}


function displaySpaceShipByName(name){
    const link ="https://swapi.dev/api/starships/?page=" + page;
        getStarships(link).then(
            response => response.results.forEach( element => {
                if (element.name == name){
                    displayOne(element);
                } 
            })
        )
}
function test(){
    // console.log(this.innerHTML);
    const name = this.innerHTML;
    displaySpaceShipByName(name);
    nav.classList.add("hidden");
    back.classList.remove("hidden");
};

function backButton(){
    const url = "https://swapi.dev/api/starships/?page=" + page;
    getStarships(url).then(data =>{
        displayData(data);
        setNext(data);
        setPrevious(data);
        addListeners();
        nav.classList.remove("hidden");
        back.classList.add("hidden");
    })
}

function addListeners(){
    starship = document.getElementsByTagName("td");
    for (let i = 0; i < starship.length; i++) {
        // console.log(starship[i]);
        starship[i].addEventListener("click", test);
    }
}

getStarships(urlInitial).then(data =>{
    // console.log(data);
    displayData(data);
    setNext(data);
    setPrevious(data);
    addListeners();
    nav.classList.remove("hidden");
    back.classList.add("hidden");
    page = "1";
})


previous.addEventListener('click', () => {
    if (previousURL){
        page = previousURL.slice(previousURL.length-1);
        console.log(page);
        getStarships(previousURL).then(data =>{
            displayData(data);
            setNext(data);
            setPrevious(data);
            addListeners();
            nav.classList.remove("hidden");
            back.classList.add("hidden");
            
        })
    }
    else{
        console.log(previousURL);
    }
    console.log(page);
});

next.addEventListener('click', () => {
    console.log(nextURL);
    if (nextURL){
        page = nextURL.charAt(nextURL.length-1);
        console.log(page);
        getStarships(nextURL).then(data =>{
            displayData(data);
            setNext(data);
            setPrevious(data);
            addListeners();
            nav.classList.remove("hidden");
            back.classList.add("hidden");
            
        })
    }
    else{
        console.log(nextURL);
    }
    
});

function createContent(link){
    return function(){
        if (link){
            page = link.charAt(link.length-1);
            // console.log(page);
            getStarships(link).then(data =>{
                displayData(data);
                setNext(data);
                setPrevious(data);
                addListeners();
                nav.classList.remove("hidden");
                back.classList.add("hidden");
                
            })
        }
        else{
            console.log(nextURL);
        }
    }// console.log(link);
    
}

// previous.addEventListener("click", createContent(previousURL));
// next.addEventListener("click", createContent(nextURL));
page1.addEventListener("click", createContent("https://swapi.dev/api/starships/?page=1"));
page2.addEventListener("click", createContent("https://swapi.dev/api/starships/?page=2"));
page3.addEventListener("click", createContent("https://swapi.dev/api/starships/?page=3"));
page4.addEventListener("click", createContent("https://swapi.dev/api/starships/?page=4"));
back.addEventListener("click",backButton);