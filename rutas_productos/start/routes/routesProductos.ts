import Router from "@adonisjs/core/services/router"


//almacenar
Router.post('/productos', async ({ request, response }) => {
  const datos = request.body()
  return response.json({ mensaje: 'Producto almacenado', datos: datos })
})

//Visualizar
Router.get('/productos/:id', async ({  params, request, response}) => {
  return response.json({ mensaje: `Producto ${params.id} visualizado` })
})

//Actualizar
Router.put('/productos/:id', async ({ params, request, response }) => {
  const datos = request.body()
  return response.json({ mensaje: `Producto ${params.id} actualizado`, datos: datos })
})

//Eliminar
Router.delete('/productos/:id', async ({  params, request, response }) => {
  return response.json({ mensaje: `Producto ${params.id} eliminado `})
})