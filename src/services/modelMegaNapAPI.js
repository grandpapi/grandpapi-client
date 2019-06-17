import { post, patch } from './request';

const BASE_PATH = '/api/v1/meganap';

export const postModel = model => post(`${BASE_PATH}/models`, model);
export const patchModel = model => patch(`${BASE_PATH}/models/${model.mdlId}`, model);
console.log('service', postModel);
