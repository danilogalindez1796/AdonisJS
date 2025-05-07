import Router from "@adonisjs/core/services/router";

Router.get('/usuarios', async(ctx)=>{
    return ctx.response.json({mensaje:" esta es la api de usuarios"})
  })

//rutas con parametros
Router.get('/usuarios/id', async({params, request, response})=>{
    return response.json({mensaje:`usuario ${params.id} visualizado`})
  })
Router.post('/usuarios',async({request, response})=>{
    const datos= request.body()
    return response.json({mensaje:'usuario almacenado', datos:datos})
})
Router.put('/usuarios/:id',async({params, request, response})=>{
    const datos= request.body()
    return response.json({mensaje:`usuario ${params.id} actualizado`, data:datos})
})
Router.delete('/usuarios/:id',async({params, request, response})=>{
    return response.json({mensaje:`usuario ${params.id} eliminado`})
})
