import { createAction, createReducer } from "@reduxjs/toolkit";

const initalState: any = {
    openTab: false
}

export const actionSetOpenTabInfoList = createAction<boolean>('openInfoList/actionSetOpenTabInfoList');

const openInfoListRedux = createReducer(initalState, builder => {
    builder.addCase(actionSetOpenTabInfoList, (state: any, action: any) => {
       const val = action.payload;

       state.openTab = val;
    })
    
})

export default openInfoListRedux ;