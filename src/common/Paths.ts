/**
 * Express router paths go here.
 */


export default {
  Base: '/api',
  Usuario: {
    Base: '/usuario',
    Get: '/',
    GetOne: '/:id',
    Add: '/',
    Update: '/',
    Delete: '/:id',
  },
  Chat: {
    Base: '/chat',
    Get: '/',
    GetOne: '/:id',
    Add: '/',
    Update: '/',
    Delete: '/:id',
  },
  Propiedad: {
    Base: '/propiedad',
    Get: '/',
    GetOne: '/:id',
    Add: '/',
    Update: '/',
    Delete: '/:id',
  },
} as const;
