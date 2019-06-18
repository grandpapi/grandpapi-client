import { post, patch, get } from './request';

const BASE_PATH = '/api/v1/meganap';

export const postModel = model => post(`${BASE_PATH}/models`, model);
export const patchModel = model => patch(`${BASE_PATH}/models`, model);
export const getModels = dbName => get(`${BASE_PATH}/models?database=${dbName}`);
