import { createAction, createReducer } from "@reduxjs/toolkit";
import { myListType } from "./myList.type";

const initialState: any = {
    countKey: 1,
    myListArr: [
      {
        colorBox: "#DC2626",
        iconBox: "barbell-outline",
        textBox: "Gym Target",
        numberBox: 8,
        indexKey: 0,
      },
      {
        colorBox: "#3D7CE8",
        iconBox: "list-outline",
        textBox: "Reminders",
        numberBox: 1,
        indexKey: 1,
      },
    ]
}
          
export const actionAddList= createAction<any>('setMyList/addList');
export const actionDeleteList = createAction<Number>('setMyList/deleteList');

const setMyList = createReducer(initialState, builder => {
    builder.addCase(actionAddList, (state: any, action: any) => {
        state['countKey']++;
        state['myListArr'].push(action.payload);
        state['myListArr'][state['myListArr'].length-1]['indexKey'] = state['countKey'];
    }).addCase(actionDeleteList, (state: any, action: any) => {
      const indexToDelete = action.payload;
      state['myListArr'] = state['myListArr'].filter((item: any) => item.indexKey !== indexToDelete);
  })
})

export default setMyList;