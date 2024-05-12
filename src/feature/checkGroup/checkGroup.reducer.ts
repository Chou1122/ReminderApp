import { createAction, createReducer } from "@reduxjs/toolkit";

const initalState: any = {
    checkGroup: [
        true,true,true,true,false
    ]
}

export const actionCloseGroup = createAction<number>('checkGroup/closeGroup');
export const actionOpenGroup = createAction<number>('checkGroup/openGroup');

const checkGroupRedux = createReducer(initalState, builder => {
    builder.addCase(actionCloseGroup, (state: any, action: any) => {
       const index = action.payload;

       state.checkGroup[index] = false;
    }).addCase(actionOpenGroup, (state: any, action: any) => {
        const index = action.payload;
 
        state.checkGroup[index] = true;
     })
    
    
})

export default checkGroupRedux;