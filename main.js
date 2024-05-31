fetch('data.json')
  .then(response =>
  {
    console.log(response.status) //<-- Tiene status
    console.log(response.ok)

    response.ok && console.log("ejectutamos cliente") // <-- status entre 200-299

    return response.json()
  }

  )
  .then(data => console.log("aqui los datos")) // <-- Aqui si esta data




  .catch(error => console.log("Hay un error que no está entre 200 y 50x"));