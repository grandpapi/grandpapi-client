export const selectMdl = state => state.models;
export const selectMdlId = state => selectMdl(state).mdlId;
export const selectMdlName = state => selectMdl(state).mdlName;
export const selectMdlSchema = state => selectMdl(state).mdlSchema;
export const selectUserMdlNames = state => selectMdl(state).userMdls.map(mdl => mdl.mdlName);
