import sql from "mssql";

const conexion = {
    user: "usuarioUvemy",
    password: "usuarioUvemy12345",
    server: "localhost",
    database: "UVemy",
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

export async function getConexion(){
    try {
        const pool = await sql.connect(conexion);
        const result = await pool.request().query("SELECT GETDATE();");
        console.log(result.recordset);
        return pool;
    } catch (error) {
        console.log(error);
    }
}
