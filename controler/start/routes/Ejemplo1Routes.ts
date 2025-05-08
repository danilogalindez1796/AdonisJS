import Router from "@adonisjs/core/services/router";
import Ejemplo1Controller from "#controllers/Ejemplo1Controller";

const ejemplo1 = new Ejemplo1Controller();

Router.get('/ejemplo1', ejemplo1.obtenerProductos);
Router.get('/ejemplo1/:id', ejemplo1.obtenerProductosId);
Router.put('/ejemplo1/:id', ejemplo1.actualizarProductos);
Router.post('/ejemplo1', ejemplo1.crearProductos);
Router.delete('/ejemplo1/:id', ejemplo1.eliminarProductos);
