import { getRandomInt } from '@src/util/misc';
import { IPropiedad } from '@src/models/Propiedad';
import { Propiedad } from './Conexion';

// **** Functions **** //

/**
 * Get one user.
 */
async function getOne(id: number): Promise<any | null> {
  return await Propiedad.findOne({ id: id });
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
  return await Propiedad.find({});
}


/**
 * Add one user.
 */
async function add(propiedad: IPropiedad): Promise<any> {
  do{
    propiedad.id = getRandomInt()
  } while(await persists(propiedad.id));
  return await (new Propiedad(propiedad)).save();
}

/**
 * Update a user.
 */
async function update(propiedad: IPropiedad): Promise<any> {
  return await Propiedad.findOneAndUpdate({ id: propiedad.id }, new Propiedad(propiedad), { new: true });
}

/**
 * Delete one user.
 */
async function delete_(id: number): Promise<any> {
  return await Propiedad.findOneAndDelete({ id: id });
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
