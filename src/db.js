require('dotenv').config({ path: 'variaveis.env' });
const mysql = require ('mysql2')
let dbName = '';
if(process.env.TESTE == undefined){
    const connection =  mysql.createConnection ({
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
        })
    dbName = process.env.DB_NAME;
    connection.connect( (error)=>{
        if(error) throw error;
            console.log(`Conectado ao banco de dados ${dbName}`)
        });
        module.exports = connection;
}else{
    dbName = process.env.DB_TESTE_NAME;
    const connection = mysql.createConnection ({
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_TESTE_NAME
    });
    connection.connect( (error)=>{
        if(error) throw error;
            console.log(`Conectado ao banco de dados ${dbName}`)
        });
        module.exports = connection;
}


