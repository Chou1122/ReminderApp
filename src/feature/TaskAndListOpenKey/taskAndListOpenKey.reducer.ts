import { createAction, createReducer } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const initalState: any = {
    indexList: 0,
    indexTask: 0,
}


export const actionSetIndexList = createAction<any>('taskAndListOpenKey/setList');
export const actionSetIndexTask = createAction<any>('taskAndListOpenKey/setTask');

const taskAndListOpenKeyRedux = createReducer(initalState, builder => {

    builder.addCase(actionSetIndexList, (state:any, action: any) => {
       state.indexList = action.payload;
    }).addCase(actionSetIndexTask, (state: any, action: any) => {
       state.indexTask = action.payload;
    })
    
})

export default taskAndListOpenKeyRedux;