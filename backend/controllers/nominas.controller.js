import { ModeloNomina } from "../models/nominas.model.js";

export const testNomina =() =>{
    console.log('Si funcina la conexion de nomina')
}

ModeloNomina.create({
    cantidad: 2100,
    dias_trabajados: 7,
    descuento: 180
})