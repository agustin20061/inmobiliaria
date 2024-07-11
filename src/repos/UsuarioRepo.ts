import { IUsuario } from '@src/models/Usuario';
import { getRandomInt } from '@src/util/misc';
import { db } from './db';
import schemas from './schemas';
import mongoose from 'mongoose';

const DB_URL: string = "mongodb://localhost:27017/Pernado";

mongoose.connect(process.env.DATABASE || DB_URL);

const Usuario = mongoose.model('Usuario', schemas.usuarioSchema);

// **** Functions **** //

const convertirAUsuarioSchema = (usuario: IUsuario): any => ({
  ...usuario,
  compras: usuario.compras.map(compra => ({
      ...compra,
      vendedor: compra.vendedor.id
  }))
});

/**
 * Get one user.
 */
async function getOne(id: number): Promise<any | null> {
  return await Usuario.findOne({ id: id });
}

/**
 * See if a user with the given id exists.
 */
async function persists(id: number): Promise<boolean> {
  return !!(await getOne(id));
}

/**
 * Get all users.
 */
async function getAll(): Promise<any[]> {
  return await Usuario.find({});
}


/**
 * Add one user.
 */
async function add(usuario: IUsuario): Promise<any> {
  do{
    usuario.id = getRandomInt()
  } while(await persists(usuario.id));
  return await (new Usuario(convertirAUsuarioSchema(usuario))).save();
}

/**
 * Update a user.
 */
async function update(usuario: IUsuario): Promise<any> {
  return await Usuario.findOneAndUpdate({ id: usuario.id }, new Usuario(convertirAUsuarioSchema(usuario)), { new: true });
}

/**
 * Delete one user.
 */
async function delete_(id: number): Promise<any> {
  return await Usuario.findOneAndDelete({ id: id });
}


// **** Export default **** //

export default {
  getOne,
  persists,
  getAll,
  add,
  update,
  delete: delete_,
} as const;
