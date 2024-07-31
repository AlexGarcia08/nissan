import {Schema, model} from 'mongoose'

export const esquemaAdministrativo = new Schema({ //modelo
    name:{
        type: String
    },
    horas_laboradas:{
        type: Number
    },
    pago_dia:{
        type: Number
    }
 })
 
export const ModeloAdministrativo = new model ('Administrativo', esquemaAdministrativo)