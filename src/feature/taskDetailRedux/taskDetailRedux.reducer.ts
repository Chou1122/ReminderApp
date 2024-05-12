import { createAction, createReducer } from "@reduxjs/toolkit";
import { initialSampleTask } from "./taskDetailSample";


export interface taskDetailType{
    keyList: number,
    keyTask: number,
    nameTask: string,
    noteTask: string,
    dateTask: string,
    useDateTask: boolean,
    minuteTask: number,
    hourTask: number,
    useTimeTask: boolean,
    useTagsTask: boolean,
    useLocationTask: boolean,
    useMessTask: boolean,
    useFlagTask: boolean,
    urlTask: string,
    priorityTask: string,
    isNew: boolean,
    isChecked: boolean,
}

const initalStateTask:any = initialSampleTask;
   
export const actionAddNewTask = createAction<any>('taskDetailRedux/addNewTask');
export const actionDeleteTask = createAction<any>('taskDetailRedux/DeleteTask');

const taskDetailRedux = createReducer(initalStateTask, builder => {
    builder.addCase(actionAddNewTask, (state: any, action: any) => {
       const myAction = action.payload;

       const keyList = myAction.keyList;
       const newTask = myAction.newTask;

       let newKeyTask = 0;
       
       for (let i = 0; i < state['countTaskList'].length; ++i) {
            if (state['countTaskList'][i]['keyList'] == keyList) {
                newKeyTask = state['countTaskList'][i]['countTask'] + 1;
                state['countTaskList'][i]['countTask'] = state['countTaskList'][i]['countTask'] + 1;
                break;
            }
       }

       newTask.keyList = keyList;
       newTask.keyTask = newKeyTask;

       state['listTask'].push(newTask);
    }).addCase(actionDeleteTask, (state: any, action: any) => {
        const myAction = action.payload;
        const keyList = myAction.keyList;
        const keyTask = myAction.keyTask;

        let posTask = 0;

        for (let i = 0; i <state['listTask'].length; ++i) {
            if (state['listTask'][i]['keyList'] == keyList && state['listTask'][i]['keyTask'] == keyTask) {
                posTask = i;
                break;
            }
        }

        state['listTask'].splice(posTask,1);
    })
    
})

export default taskDetailRedux;
