import { createAction } from 'promise-middleware-redux';
import { postModel, patchModel } from '../services/modelMegaNapAPI';

export const [
  createModel,
  CREATE_MODEL,
  CREATE_MODEL_PENDING
] = createAction('CREATE_MODEL', postModel);

export const [
  addEntry,
  ADD_ENTRY,
  ADD_ENTRY_PENDING
] = createAction('ADD_ENTRY', patchModel);
