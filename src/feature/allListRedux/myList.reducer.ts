import { createAction, createReducer } from "@reduxjs/toolkit";
import { myListType, myTaskType } from "./myList.type";
import { initialState } from "./myListSample";

import { actionHandleFlaggedTask } from "../flaggedGroupRedux/flaggedGroup.reducer";
import { useDispatch } from "react-redux";
          
export const actionAddList = createAction<any>('setMyList/addList');
export const actionDeleteList = createAction<Number>('setMyList/deleteList');
export const actionCheckTask = createAction<any>('setMyList/setTask/checkedTask');
export const actionDeleteTask = createAction<any>('setMyList/setTask/deleteTask');
export const actionAddTask = createAction<any>('setMyList/setTask/addTask');
export const actionClearCheckTask = createAction<any>('setMyList/setTask/clearCheckTask');
export const actionSetFlagTask = createAction<any>('setMyList/actionSetFlagTask');

export const actionAddListAndTask = createAction<any>('setMyList/addListAndTask');
export const actionAddListFlagAndTask = createAction<any>('setMyList/actionAddListFlagAndTag');

const setMyList = createReducer(initialState, builder => {

    builder.addCase(actionAddList, (state: any, action: any) => {
        state['countKey']++;
        state['myListArr'].push(action.payload);
        state['myListArr'][state['myListArr'].length-1]['indexKey'] = state['countKey'];

        state['myListArr'][state['myListArr'].length-1]['taskList'] = {
          countTaskKey: -1,
          taskListArr: []
        }
    }).addCase(actionAddListAndTask, (state: any, action: any) => {
      const newAction = action.payload;
      const newList = newAction.newList;
      const newTask = newAction.newTask;

      state['countKey']++;
      state['myListArr'].push(newList);
      state['myListArr'][state['myListArr'].length-1]['indexKey'] = state['countKey'];

      state['myListArr'][state['myListArr'].length-1]['taskList'] = {
        countTaskKey: 0,
        taskListArr: [
          newTask,
        ]
      }
    }).addCase(actionDeleteList, (state: any, action: any) => {
      const indexToDelete = action.payload;
      state['myListArr'] = state['myListArr'].filter((item: any) => item.indexKey !== indexToDelete);
    })
    .addCase(actionCheckTask, (state: any, action: any) => {
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

    })
    .addCase(actionDeleteTask, (state: any, action: any) => {
      const indexList:any = action.payload;
      
      for (let i = 0; i < state['myListArr'].length; i++) {
      
        if (indexList == state['myListArr'][i]['indexKey']) {

          state['myListArr'][i]['taskList']['taskListArr'] = state['myListArr'][i]['taskList']['taskListArr'].filter((item:any) => item['isChecked'] == false);  
          state['myListArr'][i]['numberBox'] = state['myListArr'][i]['taskList']['taskListArr'].length;
          break;
        }
      }
      
    })
    .addCase(actionClearCheckTask, (state:any, action:any) => {
      const indexList:any = action.payload;

      for (let i = 0; i < state['myListArr'].length; i++) {
      
        if (indexList == state['myListArr'][i]['indexKey']) {
          for (let j = 0; j < state['myListArr'][i]['taskList']['taskListArr'].length; ++j) {
            state['myListArr'][i]['taskList']['taskListArr'][j]['isChecked'] = false;  
          }
          break;
        }
      }

    })
    .addCase(actionAddTask, (state:any, action: any) => {
      const myAction:any = action.payload;

      const indexList = myAction.indexList;
      const nameTask = myAction.nameTask;
      const noteTask = myAction.noteTask;

      for (let i = 0; i < state['myListArr'].length; i++) {
      
        if (indexList == state['myListArr'][i]['indexKey']) {

          state['myListArr'][i]['taskList']['countTaskKey']++;

          const indexTask = state['myListArr'][i]['taskList']['countTaskKey'];

          const sampleTask:myTaskType = {
            isChecked: false,
            isNew: true,
            nameTask: nameTask,
            keyTask: indexTask,
            isFlagged: false,
            noteTask: noteTask,
            useDate: false,
            dateTask: '12/09/2003',
            useTime: false,
            hourTask: 12,
            minuteTask: 5,
          }

          state['myListArr'][i]['taskList']['taskListArr'].push(sampleTask);
          state['myListArr'][i]['numberBox'] = state['myListArr'][i]['taskList']['taskListArr'].length;

          break;
        }
      }
    }).addCase(actionSetFlagTask, (state:any, action: any) => {
        const myAction:any = action.payload;

        for (let i = 0; i < state['myListArr'].length; i++) {
          if (myAction.indexList == state['myListArr'][i]['indexKey']) { 
            for (let j = 0; j < state['myListArr'][i]['taskList']['taskListArr'].length; j++) {
              if (state['myListArr'][i]['taskList']['taskListArr'][j]["keyTask"] == myAction.indexTask) {
                state['myListArr'][i]['taskList']['taskListArr'][j]['isFlagged'] = !state['myListArr'][i]['taskList']['taskListArr'][j]['isFlagged'];
                break;
              }
            }
            break;
          }
        }
    })

})

export default setMyList;