export const selectMdl = state => state.models;
export const selectDbMdls = state => selectMdl(state).dbMdls;
export const selectAllMdls = state => selectMdl(state).allMdls;
