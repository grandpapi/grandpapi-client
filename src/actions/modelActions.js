import { createAction } from 'promise-middleware-redux';
import { postModel, patchModel, getModels } from '../services/modelMegaNapAPI';

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

export const [
  fetchModels, 
  FETCH_MODELS,
  FETCH_MODELS_PENDING
] = createAction('FETCH_MODEL', getModels);
