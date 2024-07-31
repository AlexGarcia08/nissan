import { ModeloAdministrativo } from "../models/administrativos.model.js";

export const testAdministrativo =() =>{
    console.log('Si funcina la conexion de administrativos')
}

ModeloAdministrativo.create({
    name: "Alex",
    horas_laboradas: 7,
    pago_dia: 230
})