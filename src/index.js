import app from "./app.js";
import { getConexion } from "./database/conexion.js";
getConexion();

app.listen(8080);
app.get("/", (req, res) => {
    res.send("¡Hola mundo!");
});
console.log("Jacob");
