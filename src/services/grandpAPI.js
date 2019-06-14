import { post } from './request';

const BASE_PATH = '/api/v1/test';

export const testPost = nickname => post(BASE_PATH, { nickname });
