import './style.css'
fetch("data.json")
  .then((response) =>
  {
    if (!response.ok)
    {
      throw new Error(`HTTP error, status = ${response.status}`);
    }
    return response.json();
  })
  .then((data) =>
  {
    const frame = document.getElementById("loop");
    data.map((element) =>
    {
      console.log(element);
      let newDiv = document.createElement("div");
      newDiv.id = element.id;
      newDiv.className = "space";
      newDiv.innerHTML = `
            <div class="summary__item" data-color=${element.color}>
            <div class="flex-group">
            <img src=${element.icon} alt=""/>
            <h4>${element.category}</h4>
            </div>
            <p class="summary__score">${element.score}
            <span class="summary__light-text"> / 100</span>
            </p></div>`
        ;
      frame.appendChild(newDiv);
    });


  }).catch((error) => console.error("Error loading JSON file", error));


