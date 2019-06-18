import { post, patch, get } from './request';

const BASE_PATH = '/api/v1/meganap';

export const postModel = model => post(`${BASE_PATH}/models`, model);
export const patchModel = model => patch(`${BASE_PATH}/models`, model);
//do we want this to be off of the database's URL (the models associated with a DB?)
//this is wrong 
export const getModels = () => get(`${BASE_PATH}/models`);
