import { createAction, createReducer } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const initalState: any = [
    {indexList: 0, indexTask: 1},
    {indexList: 0, indexTask: 2},
    {indexList: 0, indexTask: 3},
]

export const actionHandleFlaggedTask = createAction<any>('flaggedGroup/addFlaggedTask');

const flaggedGruopRedux = createReducer(initalState, builder => {

    builder.addCase(actionHandleFlaggedTask, (state:any, action: any) => {
        const myAction = action.payload;
        const indexList = myAction.indexList;
        const indexTask = myAction.indexTask;

        let pos = -1;
        for (let i = 0; i < state.length; ++i) {
            if (state[i].indexList == indexList && state[i].indexTask == indexTask) {
                pos = i; 
                break;
            }
        }

        if (pos != -1) {
            state.splice(pos,1);
        } else {
            state.push({indexList: indexList, indexTask: indexTask});
        }
    })
    
})

export default flaggedGruopRedux;