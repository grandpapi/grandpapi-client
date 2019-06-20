export const selectSession = state => state.session;
export const selectToken = state => selectSession(state).token;
export const selectNickname = state => selectSession(state).nickname;
export const selectUserId = state => selectSession(state).userId;
export const selectCurrentDatabase = state => selectSession(state).currentDatabase;
export const selectCurrentModel = state => selectSession(state).currentModel;
export const selectCurrentModelSchema = state => selectCurrentModel(state).mdlSchema;
