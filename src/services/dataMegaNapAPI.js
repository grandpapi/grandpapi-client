import { post } from './request';

const BASE_PATH = 'api';

export const postData = (username, database, model, data) => post(`/${BASE_PATH}/${username}/${database}/${model}`, data);
