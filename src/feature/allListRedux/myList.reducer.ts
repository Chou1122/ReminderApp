import { createAction, createReducer } from "@reduxjs/toolkit";
import { myListType } from "./myList.type";
import { initialState } from "./myListSample";
          
export const actionAddList = createAction<any>('setMyList/addList');
export const actionDeleteList = createAction<Number>('setMyList/deleteList');
export const actionCheckTask = createAction<any>('setMyList/setTask/checkedTask');
export const actionDeleteTask = createAction<any>('setMyList/setTask/deleteTask');
export const actionAddTask = createAction<any>('setMyList/setTask/addTask');
export const actionClearCheckTask = createAction<any>('setMyList/setTask/clearCheckTask');

const setMyList = createReducer(initialState, builder => {
    builder.addCase(actionAddList, (state: any, action: any) => {
        state['countKey']++;
        state['myListArr'].push(action.payload);
        state['myListArr'][state['myListArr'].length-1]['indexKey'] = state['countKey'];

        state['myListArr'][state['myListArr'].length-1]['taskList'] = {
          countTaskKey: -1,
          taskListArr: []
        }
    }).addCase(actionDeleteList, (state: any, action: any) => {
      const indexToDelete = action.payload;
      state['myListArr'] = state['myListArr'].filter((item: any) => item.indexKey !== indexToDelete);
    }).addCase(actionCheckTask, (state: any, action: any) => {
      const myAction:any = action.payload;

      for (let i = 0; i < state['myListArr'].length; i++) {
        if (myAction.indexList == state['myListArr'][i]['indexKey']) { 
          for (let j = 0; j < state['myListArr'][i]['taskList']['taskListArr'].length; j++) {
            if (state['myListArr'][i]['taskList']['taskListArr'][j]["keyTask"] == myAction.indexTask) {
              state['myListArr'][i]['taskList']['taskListArr'][j]['isChecked'] = !state['myListArr'][i]['taskList']['taskListArr'][j]['isChecked'];
              break;
            }
          }
          break;
        }
      }

    }).addCase(actionDeleteTask, (state: any, action: any) => {
      const indexList:any = action.payload;
      
      for (let i = 0; i < state['myListArr'].length; i++) {
      
        if (indexList == state['myListArr'][i]['indexKey']) {
          state['myListArr'][i]['taskList']['taskListArr'] = state['myListArr'][i]['taskList']['taskListArr'].filter((item:any) => item['isChecked'] == false);  
          state['myListArr'][i]['numberBox'] = state['myListArr'][i]['taskList']['taskListArr'].length;
          break;
        }
      }
      
    }).addCase(actionClearCheckTask, (state:any, action:any) => {
      const indexList:any = action.payload;

      for (let i = 0; i < state['myListArr'].length; i++) {
      
        if (indexList == state['myListArr'][i]['indexKey']) {
          for (let j = 0; j < state['myListArr'][i]['taskList']['taskListArr'].length; ++j) {
            state['myListArr'][i]['taskList']['taskListArr'][j]['isChecked'] = false;  
          }
          break;
        }
      }

    }).addCase(actionAddTask, (state:any, action: any) => {
      const myAction:any = action.payload;


    })
})

export default setMyList;