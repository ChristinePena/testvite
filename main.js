fetch('data.json')
  .then(response =>
  {
    console.log(response.status) //<-- Tiene status
    console.log(response.ok)

    response.ok && console.log("ejectutamos cliente") // <-- status entre 200-299

    return response.json()
  }

  )
  .then((data) => // <-- Aqui si esta data
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


  }).catch(error => console.log("Hay un error que no está entre 200 y 50x"));