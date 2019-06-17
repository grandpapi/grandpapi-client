import { post } from './request';

const BASE_PATH = '/api/v1/meganap';

export const postDb = db => post(`${BASE_PATH}/databases`, db);
