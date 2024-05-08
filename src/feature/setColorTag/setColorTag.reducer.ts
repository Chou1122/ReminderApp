import { createAction, createReducer } from "@reduxjs/toolkit";
import { setColorTagType } from "./setColorTag.type";

interface actionChangeColorType {
    tagName: string,
    color: string
}

const initialState: setColorTagType = {
        home2BackgroundColor: '#E5E7EB',
        doneBtnColor: '#3B82F6',  
}

export const actionChangeColor = createAction<actionChangeColorType>('setColorTag/changeColor');

const setColorTagReducer = createReducer(initialState, builder => {
    builder.addCase(actionChangeColor, (state: any, action: any) => {
        const tmp: actionChangeColorType = action.payload;
        const tagName: string = tmp.tagName;
        const color: string = tmp.color;

        state[tagName] = color;
    })
})

export default setColorTagReducer;