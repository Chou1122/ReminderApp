import { createAction, createReducer } from "@reduxjs/toolkit";
import { format } from "date-fns";

const tmpToday = new Date(Date.now());
const today = format(tmpToday, 'dd/MM/yyyy');

const initalState: any = {
    openDateTask: false,
    useDateTask: false,
    dateTask: today,
}

export const actionTurnDateTask = createAction<boolean>('dateTest/turnDate');
export const actionSetUseDateTask = createAction<boolean>('dataTest/setUseDateTask');
export const actionSetDateTask = createAction<any>('dateTest/setDateTask');

const dateTaskRedux = createReducer(initalState, builder => {
    builder.addCase(actionTurnDateTask, (state: any, action: any) => {
        const tmp: any = action.payload;
        state['openDateTask'] = tmp;
    }).addCase(actionSetUseDateTask, (state: any, action: any) => {
        const tmp: any = action.payload;
        state['useDateTask'] = tmp;
    }).addCase(actionSetDateTask, (state: any, action: any) => {
        const tmp: any = action.payload;
        state['dateTask'] = tmp;
    })
})

export default dateTaskRedux;