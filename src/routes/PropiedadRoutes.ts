import HttpStatusCodes from '@src/common/HttpStatusCodes';

import PropiedadService from '@src/services/PropiedadService';
import { IPropiedad } from '@src/models/Propiedad';
import { IReq, IRes } from './types/express/misc';


// **** Functions **** //

/**
 * Get all users.
 */
async function getAll(_: IReq, res: IRes) {
  const propiedades = await PropiedadService.getAll();
  return res.status(HttpStatusCodes.OK).json({ propiedades });
}

/**
 * Get one users.
 */
async function getOne(req: IReq, res: IRes) {
  const id = +req.params.id;
  await PropiedadService.getOne(id);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Add one user.
 */
async function add(req: IReq<{propiedad: IPropiedad}>, res: IRes) {
  const { propiedad } = req.body;
  await PropiedadService.addOne(propiedad);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one user.
 */
async function update(req: IReq<{propiedad: IPropiedad}>, res: IRes) {
  const { propiedad } = req.body;
  await PropiedadService.updateOne(propiedad);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one user.
 */
async function delete_(req: IReq, res: IRes) {
  const id = +req.params.id;
  await PropiedadService.delete(id);
  return res.status(HttpStatusCodes.OK).end();
}


// **** Export default **** //

export default {
  getAll,
  add,
  getOne,
  update,
  delete: delete_,
} as const;
