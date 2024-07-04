import moment from 'moment';
import { IPropiedad } from './Propiedad';
import Direccion, { IDireccion } from './Direccion';
import { IUsuario } from './Usuario';


// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate user keys.';


// **** Types **** //

export interface IPregunta {
  id: number;
  texto: string;
  respuesta: string;
  usuario: IUsuario;
  propiedad: IUsuario;
}


// **** Functions **** //

/**
 * Create new User.
 */
function new_(
  texto?: string,
  respuesta?: string,
  usuario?: IUsuario,
  propiedad?: IUsuario,
  id?: number, // id last cause usually set by db
): IPregunta {
  return {
    id: (id ?? -1),
    texto: (texto ?? ''),
    respuesta: (respuesta ?? ''),
    usuario: (usuario ?? {} as IUsuario),
    propiedad: (propiedad ?? {} as IUsuario),
  };
}

/**
 * Get user instance from object.
 */
function from(param: object): IPregunta {
  if (!isPregunta(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  const p = param as IPregunta;
  return new_(p.texto, p.respuesta, p.usuario, p.propiedad);
}

/**
 * See if the param meets criteria to be a user.
 */
function isPregunta(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg && typeof arg.id === 'number' && 
    'texto' in arg && typeof arg.texto === 'string' &&
    'respuesta' in arg && typeof arg.respuesta === 'string' &&
    'usuario' in arg && typeof arg.usuario === 'object' &&
    'propiedad' in arg && typeof arg.propiedad === 'object'
    );
}


// **** Export default **** //

export default {
  new: new_,
  from,
  isPregunta,
} as const;
