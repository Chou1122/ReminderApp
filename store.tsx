import { configureStore } from "@reduxjs/toolkit";

import openTabReducer from "./src/feature/opentab/opentab.reducer";
import setColorTagReducer from "./src/feature/setColorTag/setColorTag.reducer";
import setMyList from "./src/feature/allListRedux/myList.reducer";

export const store = configureStore({
  reducer: {
    openTab: openTabReducer,
    setColorTag: setColorTagReducer,
    setMyList: setMyList,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
