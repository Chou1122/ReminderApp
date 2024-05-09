import { createAction, createReducer } from "@reduxjs/toolkit";
import { openTabType } from "./opentab.type";

interface openTabState {
    openTabList: openTabType
}

const initalState: openTabState = {
    openTabList: {
        newGroupTab: false,
        newListTab: false,
        newTaskTab: false,
        newTaskDetailTab: false,
        priorityTaskTab: false,
        cPriorityTaskTab: false,
        settingDetailTaskTab: false,

        indexListOpened: -1,
        indexTaskOpened: -1,

        titleNewTask: '',
    }
}

export const actionOpenTab = createAction<string>('opentab/actionOpen');
export const actionCloseTab = createAction<string>('opentab/actionClose');
export const actionSetIndexListOpened = createAction<number>('opentab/actionSetIndexListOpend');
export const actionSetIndexTaskOpened = createAction<number>('opentab/actionSetIndexTaskOpened');
export const acitonSetTitleNewTask = createAction<string>('openTab/actionSetTitleNewTask');

const openTabReducer = createReducer(initalState, builder => {
    builder.addCase(actionOpenTab, (state: any, action: any) => {
        const tmpTab: string = action.payload;
        state['openTabList'][tmpTab] = true;
    }).addCase(actionCloseTab, (state: any, action: any) => {
        const tmpTab: string = action.payload;
        state['openTabList'][tmpTab] = false;
    }).addCase(actionSetIndexListOpened, (state: any, action: any) => {
        const tmpIndex: number = action.payload;
        state['openTabList']['indexListOpened'] = tmpIndex;
    }).addCase(actionSetIndexTaskOpened, (state: any, action: any) => {
        const tmpIndex: number = action.payload;
        state['openTabList']['indexTaskOpened'] = tmpIndex;
    }).addCase(acitonSetTitleNewTask, (state: any, action: any) => {
        const titleNewTask = action.payload;
        // console.log('new: ',titleNewTask);
        state['openTabList']['titleNewTask'] = titleNewTask;
    })
    
})

export default openTabReducer;