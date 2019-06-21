import { post, get } from './request';

const BASE_PATH = '/api/v1/meganap';

export const postDb = db => post(`${BASE_PATH}/databases`, db);
export const getDbs = userId => get(`${BASE_PATH}/databases/${userId || ''}`);
