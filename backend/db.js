const mysql = require("mysql2");

const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tienda_celulares"
});

conexion.connect((err) => {
    if(err){
        console.log("Error:", err);
    } else {
        console.log("MySQL conectado");
    }
});

module.exports = conexion;