const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/contacto", (req,res)=>{

    const {nombre, correo, telefono, mensaje} = req.body;

    const sql = `
    INSERT INTO contactos
    (nombre,correo,telefono,mensaje)
    VALUES (?,?,?,?)
    `;

    db.query(
        sql,
        [nombre, correo, mensaje],
        (err,result)=>{
            if(err){
                return res.status(500).json(err);
            }

            res.json({
                mensaje:"Mensaje enviado correctamente"
            });
        }
    );
});

app.get("/inventario",(req,res)=>{

    db.query(
        "SELECT * FROM inventario",
        (err,result)=>{
            if(err){
                return res.status(500).json(err);
            }

            res.json(result);
        }
    );

});

app.listen(3000,()=>{
    console.log("Servidor corriendo en puerto 3000");
});