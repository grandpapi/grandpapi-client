import { post } from './request';

const BASE_PATH = '/api/v1';

export const postDb = db => post(`${BASE_PATH}/databases`, db);
