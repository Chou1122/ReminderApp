import { configureStore } from "@reduxjs/toolkit";

import openTabReducer from "./src/feature/opentab/opentab.reducer";
import setColorTagReducer from "./src/feature/setColorTag/setColorTag.reducer";
import setMyList from "./src/feature/allListRedux/myList.reducer";
import setPriorityTask from "./src/feature/setPriorityTask/setPriorityTask.reducer";
import timeTaskRedux from "./src/feature/timeTest/timeTest.reducer";
import dateTaskRedux from "./src/feature/dateTest/dateTest.reducer";
import openNewReminderRedux from "./src/feature/openNewReminder/openNewReminder.reducer";
import openNewReminderDetailRedux from "./src/feature/openNewReminderDetail/openNewReminderDetail.reducer";
import openInfoListRedux from "./src/feature/openInfoList/openInfoList.reducer";
import c2PriorityTaskOpenRedux from "./src/feature/c2PriorityTaskOpen/c2PriorityTaskOpen.reducer";
import checkGroupRedux from "./src/feature/checkGroup/checkGroup.reducer";
import taskDetailRedux from "./src/feature/taskDetailRedux/taskDetailRedux.reducer";

export const store = configureStore({
  reducer: {
    openTab: openTabReducer,
    setColorTag: setColorTagReducer,
    setMyList: setMyList,
    setPriorityTask: setPriorityTask,
    timeTaskRedux: timeTaskRedux,
    dateTaskRedux: dateTaskRedux,
    openNewReminderRedux: openNewReminderRedux,
    openNewReminderDetailRedux: openNewReminderDetailRedux,
    openInfoListRedux: openInfoListRedux,
    c2PriorityTaskOpenRedux: c2PriorityTaskOpenRedux,
    checkGroupRedux: checkGroupRedux,
    taskDetailRedux: taskDetailRedux,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
