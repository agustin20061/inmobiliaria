import mongoose from 'mongoose';
import { TipoPropiedad } from '@src/models/TipoPropiedad';

const direccionSchema = new mongoose.Schema({
    calle: String,
    numero: Number,
    piso: Number,
    departamento: String,
    provincia: String,
    ciudad: String,
    codigoPostal: Number
});

const caracteristicasSchema = new mongoose.Schema({
    cantidadAmbientes: Number,
    m2Totales: Number,
    m2Cubiertos: Number,
    cantidadBanios: Number,
    cantidadDormitorios: Number,
    cantidadToilettes: Number,
    anioConstruccionRemodelacion: Number,
    cantidadPlantas: Number,
    cantidadGarages: Number,
    cantidadElevadores: Number,
    parrilla: Boolean,
    pileta: Boolean,
    balcon: Boolean,
    patio: Boolean,
    gimnasio: Boolean,
    seguridad: Boolean
});

const mensajeSchema = new mongoose.Schema({
    contenido: String,
    fecha: Date,
    cliente: Boolean
});

const chatSchema = new mongoose.Schema({
    id: Number,
    mensajes: [mensajeSchema],
    vendedor: Number,
    comprador: Number
});

const preguntaSchema = new mongoose.Schema({
    id: Number,
    texto: String,
    respuesta: String,
    usuario: Number,
    propiedad: Number
});

const propiedadSchema = new mongoose.Schema({
    id: Number,
    titulo: String,
    descripcion: String,
    duenio: Number,
    precio: Number,
    alquiler: Boolean,
    tipoPropiedad: TipoPropiedad,
    expensas: Number,
    imagenes: [String],
    preguntas: [preguntaSchema],
    caracteristicas: [caracteristicasSchema]
});

const compraSchema = new mongoose.Schema({
    propiedad: propiedadSchema,
    calificacion: Number,
    comentario: String
});

const usuarioSchema = new mongoose.Schema({
    id: Number,
    dni: Number,
    mail: String,
    telefono: String,
    nombre: String,
    apellido: String,
    nombreUsuario: String,
    contrasenia: String,
    fechaNacimiento: Date,
    propiedades: [Number],
    direccion: direccionSchema,
    compras: [compraSchema]
});

/*const tipoPropiedadSchema = new mongoose.Schema({
    tipo: {
        type: String,
        enum: TipoPropiedad,
    },
});*/

export default {
    // Aquí puedes exportar tus schemas si es necesario
};
