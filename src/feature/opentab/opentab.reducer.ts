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

        indexListOpened: -1,
    }
}

export const actionOpenTab = createAction<string>('opentab/actionOpen');
export const actionCloseTab = createAction<string>('opentab/actionClose');
export const actionSetIndexListOpened = createAction<number>('opentab/actionSetIndexListOpend');

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
    })
    
})

export default openTabReducer;