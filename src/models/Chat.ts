import moment from 'moment';
import Usuario, { IUsuario } from './Usuario';
import { IMensaje } from './Mensaje';
import { isContext } from 'vm';


// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate user keys.';


// **** Types **** //

export interface IChat {
  id: number;
  mensajes: [IMensaje];
  vendedor: IUsuario;
  comprador: IUsuario;
}


// **** Functions **** //

/**
 * Create new User.
 */
function new_(
    mensajes?: [IMensaje],
    vendedor?: IUsuario,
    comprador?: IUsuario,
    id?: number,
    ): IChat {
    return {
        id: (id ?? -1),
        mensajes: (mensajes ?? [{} as IMensaje]),
        vendedor: (vendedor ?? {} as IUsuario),
        comprador: (comprador ?? {} as IUsuario),
    };
    };

/**
 * Get user instance from object.
 */
function from(param: object): IChat {
  if (!isChat(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  const p = param as IChat;
  return new_(p.mensajes, p.vendedor, p.comprador, p.id);
}

/**
 * See if the param meets criteria to be a user.
 */
function isChat(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg && typeof arg.id === 'number' && 
    "mensajes" in arg && Array.isArray(arg.mensajes) &&
    "vendedor" in arg && Usuario.isUsuario(arg) &&
    "comprador" in arg && Usuario.isUsuario(arg)
  );
}


// **** Export default **** //

export default {
  new: new_,
  from,
  isChat,
} as const;
