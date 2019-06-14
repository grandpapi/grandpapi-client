import { createAction } from 'promise-middleware-redux';
import { testPost } from '../../services/grandpAPI';

export const [
  postNickname,
  POST_NICKNAME,
  POST_NICKNAME_PENDING
] = createAction('POST_NICKNAME', testPost);
