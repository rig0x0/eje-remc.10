//servidor en node y express
//definiciones
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//configuracion
app.use( express.static('public') );
/*app.get("/", (req, res) => {
    res.send("En teoria el index.html")
});*/

app.get("/", (req, res) => {
    res.send("En teoria 404.html")
});

//corriendo el proceso del servidor
app.listen(port, ()=>{
    console.log('El servidor esta corriendo en el puerto',port);
});