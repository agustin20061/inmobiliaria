import moment from 'moment';
import Propiedad, { IPropiedad } from './Propiedad';
import { IDireccion } from './Direccion';
import Direccion from './Direccion';
import Compra, { ICompra } from './Compra';


// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate user keys.';


// **** Types **** //

export interface IUsuario {
  id: number;
  nombre: string;
  apellido: string;
  nombreUsuario: string;
  contrasenia: string;
  fechaNacimiento: Date;
  propiedades: [IPropiedad];
  direccion: IDireccion;
  compras: [ICompra]
}


// **** Functions **** //

/**
 * Create new User.
 */
function new_(
  nombre?: string,
  apellido?: string,
  nombreUsuario?: string,
  contrasenia?: string,
  fechaNacimiento?: Date,
  propiedades?: [IPropiedad],
  direccion?: IDireccion,
  compras?: [ICompra],
  id?: number,// id last cause usually set by db
): IUsuario {
  return {
    id: (id ?? -1),
    nombre: (nombre ?? ''),
    apellido: (apellido ?? ''),
    nombreUsuario: (nombreUsuario ?? ''),
    contrasenia: (contrasenia ?? ''),
    fechaNacimiento: (fechaNacimiento ? new Date(fechaNacimiento) : new Date()),
    propiedades: (propiedades ?? [{} as IPropiedad]),
    direccion: (direccion ?? Direccion.new()),
    compras: (compras ?? [{} as ICompra])
  };
}

/**
 * Get user instance from object.
 */
function from(param: object): IUsuario {
  if (!isUsuario(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  const p = param as IUsuario;
  return new_(p.nombre, p.apellido, p.nombreUsuario, p.contrasenia, p.fechaNacimiento, p.propiedades, p.direccion, p.compras, p.id);
}

/**
 * See if the param meets criteria to be a user.
 */
function isUsuario(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg && typeof arg.id === 'number' && 
    'nombre' in arg && typeof arg.nombre === 'string' &&
    'apellido' in arg && typeof arg.apellido === 'string' &&
    'nombreUsuario' in arg && typeof arg.nombreUsuario === 'string' &&
    'contrasenia' in arg && typeof arg.contrasenia === 'string' &&
    'fechaNacimiento' in arg && moment(arg.fechaNacimiento as string | Date).isValid() &&
    'propiedades' in arg && Array.isArray(arg.propiedades) &&
    'direccion' in arg && Direccion.isDireccion(arg.direccion) &&
    'compras' in arg && Array.isArray(arg.compras) && arg.compras.every(Compra.isCompra)
  );
}


// **** Export default **** //

export default {
  new: new_,
  from,
  isUsuario,
} as const;