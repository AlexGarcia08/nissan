import {Schema, model} from 'mongoose'

const esquemaNomina = new Schema({
    cantidad:{
        type: Number
    },
    dias_trabajados:{
        type: Number
    }, 
    descuento:{
        type: Number
    }
 })
 

export const ModeloNomina = new model ('Nomina', esquemaNomina)