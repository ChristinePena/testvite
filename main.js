fetch('https://raw.githubusercontent.com/ChristinePena/testvite/main/app/js/data.json')
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