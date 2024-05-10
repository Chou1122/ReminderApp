import { createAction, createReducer } from "@reduxjs/toolkit";

const initalState: any = {
    openTimeTask: false,
    minuteTimeTask: 5,
    hourTimeTask: 12,
    useTimeTask: false,
}

export const actionTurnTimeTask = createAction<boolean>('timeTest/turnTime');
export const actionSetMinuteTask = createAction<number>('timeTest/setMinuteTask');
export const actionSetHourTask = createAction<number>('timeTest/setHourTask');
export const actionSetUseTimeTask = createAction<boolean>('timeSet/setUseTimeTask');

const timeTaskRedux = createReducer(initalState, builder => {
    builder.addCase(actionTurnTimeTask, (state: any, action: any) => {
        const tmp: any = action.payload;
        state['openTimeTask'] = tmp;
    }).addCase( actionSetMinuteTask, (state: any, action: any) => {
        const tmp: any = action.payload;
        state['minuteTimeTask'] = tmp;
    }).addCase( actionSetHourTask, (state: any, action: any) => {
        const tmp: any = action.payload;
        state['hourTimeTask'] = tmp;
    }).addCase( actionSetUseTimeTask, (state: any, action: any) => {
        const tmp: any = action.payload;
        state['useTimeTask'] = tmp;
    })
    
})

export default timeTaskRedux;