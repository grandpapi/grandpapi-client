import { post, get } from './request';

const BASE_PATH = '/api/v1/meganap';

export const postModel = model => post(`${BASE_PATH}/models`, model);
export const getModels = dbId => get(`${BASE_PATH}/models?database=${dbId}`);
export const getAllModels = username => get(`${BASE_PATH}/models?username=${username}`);
