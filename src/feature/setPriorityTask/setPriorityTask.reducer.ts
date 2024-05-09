import { createAction, createReducer } from "@reduxjs/toolkit";

const initalState: any = {
    taskPriority: 'None'
}

export const actionSetPriorityTask = createAction<string>('setPriorityTask/actionSetPriorityTask');

const setPriorityTask = createReducer(initalState, builder => {
    builder.addCase(actionSetPriorityTask, (state: any, action: any) => {
       const actionPriority = action.payload;

       state.taskPriority = actionPriority;
    })
    
})

export default setPriorityTask ;