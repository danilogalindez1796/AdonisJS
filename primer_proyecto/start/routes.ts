import Router from "@adonisjs/core/services/router";
import './routes/routesUsuario.ts'

Router.get('/api', async (res,req) =>{
  return({mensaje:"Esta es una prueba de la ruta"})
})
Router.get('/usuario', async()=>{
  return({msj:"Esta es la ruta de usuarios"})
})
Router.get('/blogs', async(ctx)=>{
  return ctx.response.json({blogs:"Esta es la ruta de en formato json"})
})
Router.get('/blog', async({request,response})=>{
  return response.json({blogs:"Esta es la ruta de en formato json 23"})
})