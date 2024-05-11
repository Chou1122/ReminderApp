import { createAction, createReducer } from "@reduxjs/toolkit";

const initalState: any = {
    openTab: false
}

export const actionSetC2PriorityTaskOpen = createAction<boolean>('c2PriorityTaskOpen/actionSetC2PriorityTaskOpen');

const c2PriorityTaskOpenRedux = createReducer(initalState, builder => {
    builder.addCase(actionSetC2PriorityTaskOpen, (state: any, action: any) => {
       const val = action.payload;

       state.openTab = val;
    })
    
})

export default c2PriorityTaskOpenRedux  ;