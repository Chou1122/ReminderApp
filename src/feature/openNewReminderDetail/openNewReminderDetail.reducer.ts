import { createAction, createReducer } from "@reduxjs/toolkit";

const initalState: any = {
    openTab: false
}

export const actionSetOpenNewReminderDetailTab = createAction<boolean>('openNewReminderDetail/actionSetOpenNewReminderDetailTab');

const openNewReminderDetailRedux = createReducer(initalState, builder => {
    builder.addCase(actionSetOpenNewReminderDetailTab, (state: any, action: any) => {
       const val = action.payload;

       state.openTab = val;
    })
    
})

export default openNewReminderDetailRedux ;