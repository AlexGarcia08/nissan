import { esquemaAdministrativo } from "./administrativos.model.js";
import {model} from 'mongoose'

export const modeloOperario = new model('Operarios', esquemaAdministrativo)