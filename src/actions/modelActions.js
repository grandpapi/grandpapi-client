import { createAction } from 'promise-middleware-redux';
import { postModel, getModels } from '../services/modelMegaNapAPI';

export const UPDATE_MDL_STATE = 'UPDATE_MDL_STATE';

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

export const updateMdlState = (mdlName, mdlId, mdlSchema) => ({
  type: UPDATE_MDL_STATE,
  payload: { mdlName, mdlId, mdlSchema }
});
