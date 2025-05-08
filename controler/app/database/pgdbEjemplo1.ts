import { Client } from 'pg';

const pgdbEjemplo1 = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'root',
    database: 'Ejemplo1'
});

pgdbEjemplo1.connect()
export default pgdbEjemplo1;