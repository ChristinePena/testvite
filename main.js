fetch('data.json')
  .then(function (response)
  {
    if (response.ok)
    {
      console.log("OK");
      response.blob().then(function (miBlob)
      {
        var objectURL = URL.createObjectURL(miBlob);
        miImagen.src = objectURL;
      });
    } else
    {
      console.log("Respuesta de red OK pero respuesta HTTP no OK");
    }
  })
  .catch(function (error)
  {
    console.log("Hubo un problema con la petición Fetch:" + error.message);
  });

fetch('https://jsonplaceholder.typicode.com/todos/1')
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