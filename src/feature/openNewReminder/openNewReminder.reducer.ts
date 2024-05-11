import { createAction, createReducer } from "@reduxjs/toolkit";

const initalState: any = {
    openTab: false
}

export const actionSetOpenNewReminderTab = createAction<boolean>('openNewReminder/actionSetOpenNewReminderTab');

const openNewReminderRedux = createReducer(initalState, builder => {
    builder.addCase(actionSetOpenNewReminderTab, (state: any, action: any) => {
       const val = action.payload;

       state.openTab = val;
    })
    
})

export default openNewReminderRedux ;