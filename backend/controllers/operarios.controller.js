import { modeloOperario } from "../models/operarios.model.js";

export const testOperarios = () =>{
    console.log("funciona la conexion de operario")
}

modeloOperario.create({
    name:"Erik",
    horas_laboradas: 7,
    pago_dia: 413
})