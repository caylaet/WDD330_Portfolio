//create an array of hikes
const hikeList = [
    {
      name: "Bechler Falls",
      imgSrc: "falls.jpeg",
      imgAlt: "Image of Bechler Falls",
      distance: "3 miles",
      difficulty: "Easy",
      description:
        "Beautiful short hike along the Bechler river to Bechler Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead."
    },
    {
      name: "Teton Canyon",
      imgSrc: "falls.jpeg",
      imgAlt: "Image of Bechler Falls",
      distance: "3 miles",
      difficulty: "Easy",
      description: "Beautiful short (or long) hike through Teton Canyon.",
      directions:
        "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead."
    },
    {
      name: "Denanda Falls",
      imgSrc: "falls.jpeg",
      imgAlt: "Image of Bechler Falls",
      distance: "7 miles",
      difficulty: "Moderate",
      description:
        "Beautiful hike through Bechler meadows river to Denanda Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead."
    }
  ];
  
  //on load grab the array and insert it into the page
  window.addEventListener("load", () => {
    view.showHikeList();
  });

  const view = {

    showHikeList() {
      const hikeListElement = document.getElementById("hikes");
      hikeListElement.innerHTML = "";
      this.renderHikeList(hikeList, hikeListElement);
      document.getElementById("back_button").classList.add("hidden");
    },
    
    renderHikeList(hikes, parent) {
      hikes.forEach(hike => {
        parent.appendChild(renderOneHike(hike));
      });
    },

    showOneHike() {
      console.log(this);
      console.log(this.firstChild.nextSibling);
      const hikeName = this.firstChild.nextSibling.textContent;
      console.log(hikeName);
      const hike = getHikeByName(hikeName);
      const hikeListElement = document.getElementById("hikes");
      hikeListElement.innerHTML = "";
      renderHike(hike, hikeListElement);
      document.getElementById("back_button").classList.remove("hidden");
    }

  }
  function renderHike(hike,parent){
    parent.appendChild(renderOneHikeDetails(hike))
  }

  function getHikeByName(hikeName) {
    return hikeList.find(hike => hike.name === hikeName);
  }

  function renderOneHike(hike) {
    const item = document.createElement("li");
    item.addEventListener("click",view.showOneHike)
  
    item.innerHTML = ` <h2>${hike.name}</h2>
          <div class="image"><img src="${hike.imgSrc}" alt="${hike.imgAlt}"></div>
          <div>
                  <div class="text">
                      <h3>Distance</h3>
                      <p>${hike.distance}</p>
                  </div>
                  <div class="text">
                      <h3>Difficulty</h3>
                      <p>${hike.difficulty}</p>
                  </div>
          </div>`;
  
    return item;
  }
  function renderOneHikeDetails(hike) {
    const item = document.createElement("li");
  
    item.innerHTML = ` <h2>${hike.name}</h2>
          <div class="image"><img src="${hike.imgSrc}" alt="${hike.imgAlt}"></div>
          <div>
                  <div class="text">
                      <h3>Distance</h3>
                      <p>${hike.distance}</p>
                  </div>
                  <div class="text">
                      <h3>Difficulty</h3>
                      <p>${hike.difficulty}</p>
                  </div>
                  <div class="text">
                      <h3>Description</h3>
                      <p>${hike.description}</p>
                  </div>
                  <div class="text">
                      <h3>Directions</h3>
                      <p>${hike.directions}</p>
                  </div>
          </div>`;
  
    return item;
  }
