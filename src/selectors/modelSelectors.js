export const selectMdl = state => state.models;
export const selectMdlId = state => selectMdl(state).mdlId;
export const selectDbMdls = state => selectMdl(state).dbMdls;
export const selectMdlName = state => selectMdl(state).mdlName;
export const selectMdlSchema = state => selectMdl(state).mdlSchema;
export const selectMdlNameShow = state => selectMdl(state).mdlNameShow;
export const selectMdlEntryShow = state => selectMdl(state).mdlEntryShow;
export const selectAddNewMdlShow = state => selectMdl(state).addNewMdlShow;
