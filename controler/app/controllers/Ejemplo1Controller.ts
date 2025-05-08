import pgdbEjemplo1 from "../database/pgdbEjemplo1.js";

export default class Ejemplo1Controller {
    async obtenerProductos({ request, response }) {

        const result=await pgdbEjemplo1.query('SELECT * FROM "Reservas"')
        console.log(result.rows)
        return response.json({ Mensaje: result.rows });
    }

    async obtenerProductosId({ params, request, response }) {
        const result=await pgdbEjemplo1.query(`SELECT * FROM "Reservas" WHERE "Id" = ${params.id}; `)
        console.log(result.rows)
        return response.json({ mensaje: result.rows });
    }

    async crearProductos({ request, response }) {
        const {Id,Descripcion,fecha,nombre_persona}=request.body()
        const result=await pgdbEjemplo1.query('INSERT INTO "Reservas"("Id", "Descripcion", "fecha", "nombre_persona")VALUES ($1, $2, $3, $4)', [Id, Descripcion, fecha, nombre_persona])
        if(result.rowCount>0){
        return response.json({ Mensaje: request.body});
       }else{
        return response.json({mensaje:"no se ha insertado"})
    }
    }

    async actualizarProductos({ params, request, response }) {
    const Id=params.id
    const {Descripcion,fecha,nombre_persona}=request.body()
    const result = await pgdbEjemplo1.query(
    'UPDATE "Reservas" SET "Descripcion" = $1, "fecha" = $2, "nombre_persona" = $3 WHERE "Id" = $4',[Descripcion, fecha, nombre_persona, Id] )
     return response.json({ mensaje: 'Producto actualizado correctamente' })
}

    async eliminarProductos({ params, request, response }) {
        const id=params.id
        const result=await pgdbEjemplo1.query(`DELETE FROM "Reservas" WHERE "Id" = $1`,[id])
        return response.json({ Mensaje: `reserva ${params.id} eliminado` });
    }
}
