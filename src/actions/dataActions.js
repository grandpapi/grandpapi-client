import { createAction } from 'promise-middleware-redux';
import { postData } from '../services/dataMegaNapAPI';

export const [
  createData,
  CREATE_DATA,
  CREATE_DATA_PENDING
] = createAction('CREATE_DATA', postData);
