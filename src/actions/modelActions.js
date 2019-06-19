import { createAction } from 'promise-middleware-redux';
import { postModel, getModels } from '../services/modelMegaNapAPI';

export const [
  createModel,
  CREATE_MODEL,
  CREATE_MODEL_PENDING
] = createAction('CREATE_MODEL', postModel);

export const [
  fetchModels, 
  FETCH_MODELS,
  FETCH_MODELS_PENDING
] = createAction('FETCH_MODEL', getModels);
