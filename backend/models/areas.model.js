import {Schema, model} from 'mongoose'

const esquemaArea = new Schema({
    area:{
        type: String
    },
    trabajadores:{
        type: Number
    }
 })
 

export const ModeloArea = new model ('Area', esquemaArea)