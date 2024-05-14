import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { format } from "date-fns";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";

import {
  actionSetUseDateTask,
  actionSetDateTask,
  actionTurnDateTask,
} from "../../feature/dateTest/dateTest.reducer";
import {
  actionSetUseTimeTask,
  actionSetHourTask,
  actionSetMinuteTask,
  actionTurnTimeTask,
} from "../../feature/timeTest/timeTest.reducer";
import { actionSetOpenNewReminderTab } from "../../feature/openNewReminder/openNewReminder.reducer";
import { actionSetOpenNewReminderDetailTab } from "../../feature/openNewReminderDetail/openNewReminderDetail.reducer";
import { listColor, listIcon } from "./allArrList";
import { actionAddList } from "../../feature/allListRedux/myList.reducer";
import { useNavigationState } from "@react-navigation/native";
import { actionHandleScheduledGroup } from "../../feature/scheduledGroupRedux/sheduledGroup.reducer";

import { actionAddListAndTask } from "../../feature/allListRedux/myList.reducer";
import { actionHandleFlaggedTask } from "../../feature/flaggedGroupRedux/flaggedGroup.reducer";

export default function NewTaskAloneTab() {
  const openNewReminderTab = useSelector(
    (state: RootState) => state.openNewReminderRedux.openTab
  );

  const countKeyIndex = useSelector(
    (state: RootState) => state.setMyList.countKey
  );

  const tmpToday = new Date(Date.now());
  const today = format(tmpToday, "dd/MM/yyyy");

  //   useEffect(() => {
  //     dispatch(actionSetDateTask(today));
  //     dispatch(actionTurnDateTask(false));
  //     dispatch(actionSetHourTask(12));
  //     dispatch(actionSetMinuteTask(5));
  //     dispatch(actionTurnTimeTask(false));
  //   },[])

  const [listNameState, setListNameState] = useState("");
  const [titleState, setTitleState] = useState("");
  const [noteState, setNoteState] = useState("");

  const dispatch = useDispatch();

  const cancelOnPress = () => {
    dispatch(actionSetOpenNewReminderTab(false));
  };

  useEffect(() => {
    setTitleState("");
    setListNameState("");
  }, [openNewReminderTab]);

  const detailOnPress = () => {
    dispatch(actionSetUseDateTask(false));
    dispatch(actionSetUseTimeTask(false));

    dispatch(actionSetOpenNewReminderTab(false));
    dispatch(actionSetOpenNewReminderDetailTab(true));

    // sau nay xe xoa khoang nay di
    dispatch(actionSetDateTask(today));
    dispatch(actionTurnDateTask(false));
    dispatch(actionSetHourTask(12));
    dispatch(actionSetMinuteTask(5));
    dispatch(actionTurnTimeTask(false));
  };

  const navigationState = useNavigationState((state) => state);

  const addOnPress = () => {
    if (titleState == "" || listNameState == "") return;

    if (
      navigationState.routes[navigationState.index].name == "FlaggedGroupDetail"
    ) {
      dispatch(
        actionAddListAndTask({
          newList: {
            colorBox: listColor[0],
            iconBox: listIcon[0],
            textBox: listNameState,
            numberBox: 1,
          },
          newTask: {
            isNew: true,
            nameTask: titleState,
            keyTask: 0,
            isChecked: false,
            isFlagged: true,
            noteTask: noteState,
            useDate: false,
            dateTask: "12/09/2003",
            useTime: false,
            hourTask: 12,
            minuteTask: 5,
          },
        })
      );

      dispatch(
        actionHandleFlaggedTask({ indexList: countKeyIndex + 1, indexTask: 0 })
      );
    } else if (
      navigationState.routes[navigationState.index].name ==
      "ScheduledGroupDetail"
    ) {
      const tmpToday = new Date(Date.now());
      const today = format(tmpToday, "dd/MM/yyyy");

      dispatch(
        actionAddListAndTask({
          newList: {
            colorBox: listColor[0],
            iconBox: listIcon[0],
            textBox: listNameState,
            numberBox: 1,
          },
          newTask: {
            isNew: true,
            nameTask: titleState,
            keyTask: 0,
            isChecked: false,
            isFlagged: false,
            noteTask: noteState,
            useDate: true,
            dateTask: today,
            useTime: false,
            hourTask: 12,
            minuteTask: 5,
          },
        })
      );

      dispatch(
        actionHandleScheduledGroup({
          indexList: countKeyIndex + 1,
          indexTask: 0,
        })
      );
    } else if (
      navigationState.routes[navigationState.index].name == "TodayGroupDetail"
    ) {
      const tmpToday = new Date(Date.now());
      const today = format(tmpToday, "dd/MM/yyyy");

      dispatch(
        actionAddListAndTask({
          newList: {
            colorBox: listColor[0],
            iconBox: listIcon[0],
            textBox: listNameState,
            numberBox: 1,
          },
          newTask: {
            isNew: true,
            nameTask: titleState,
            keyTask: 0,
            isChecked: false,
            isFlagged: false,
            noteTask: noteState,
            useDate: true,
            dateTask: today,
            useTime: false,
            hourTask: 12,
            minuteTask: 5,
          },
        })
      );

      dispatch(
        actionHandleScheduledGroup({
          indexList: countKeyIndex + 1,
          indexTask: 0,
        })
      );
    } else {
      dispatch(
        actionAddListAndTask({
          newList: {
            colorBox: listColor[0],
            iconBox: listIcon[0],
            textBox: listNameState,
            numberBox: 1,
          },
          newTask: {
            isNew: true,
            nameTask: titleState,
            keyTask: 0,
            isChecked: false,
            isFlagged: false,
            noteTask: noteState,
            useDate: false,
            dateTask: "12/09/2003",
            useTime: false,
            hourTask: 12,
            minuteTask: 5,
          },
        })
      );
    }

    dispatch(actionSetOpenNewReminderTab(false));
  };

  const handleListNameChange = (text: string) => {
    setListNameState(text);
  };

  const handleTitleChange = (text: string) => {
    setTitleState(text);
  };

  const handleNoteChange = (text: string) => {
    setNoteState(text);
  };

  return (
    <>
      {openNewReminderTab && (
        <View
          className="flex-row h-full w-full absolute bottom-[0]"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <ScrollView
            className="min-h-screen w-full"
            showsVerticalScrollIndicator={false}
          >
            <View className="w-full h-[64]"></View>

            <View className="min-h-[1000] h-fit w-full bg-gray-200 rounded-t-2xl">
              <View className="flex-row w-full h-[60] pl-5 pr-5 justify-between">
                <View className="w-[24%] h-full">
                  <TouchableOpacity
                    className="h-full w-[70%]  justify-center"
                    onPress={() => {
                      cancelOnPress();
                    }}
                  >
                    <Text className="text-blue-400 font-normal text-base">
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className="w-[44%] h-full justify-center items-center">
                  <Text className="text-black font-semibold text-base">
                    New Reminder
                  </Text>
                </View>
                <View className="w-[20%] h-full items-end">
                  <TouchableOpacity
                    className="h-full w-[70%] justify-center items-end"
                    onPress={() => {
                      addOnPress();
                    }}
                  >
                    <Text
                      className={`${
                        titleState == "" || listNameState == ""
                          ? "text-gray-400"
                          : "text-blue-400"
                      } font-semibold text-base`}
                    >
                      Add
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className="w-full h-[24]"></View>

              <View className="w-full h-[60] pl-5 pr-5 justify-center items-center">
                <View className="w-full h-full bg-white rounded-2xl pl-5 pr-5">
                  <TextInput
                    className="h-full w-full text-base"
                    placeholder="List Name"
                    value={listNameState}
                    onChangeText={handleListNameChange}
                  ></TextInput>
                </View>
              </View>

              <View className="h-[140] w-full justify-center items-center pl-5 pr-5 mb-[16]">
                <View className="h-[120] w-full bg-white rounded-2xl">
                  <View className="h-[50%] w-full items-end">
                    <View className="h-full w-[95%] border-b-2 border-gray-200">
                      <TextInput
                        className="h-full w-[90%] text-base"
                        placeholder="Title"
                        value={titleState}
                        onChangeText={handleTitleChange}
                      ></TextInput>
                    </View>
                  </View>

                  <View className="h-[50%] w-full items-end">
                    <View className="h-full w-[95%]">
                      <TextInput
                        className="h-full w-[90%] text-base"
                        placeholder="Notes"
                        value={noteState}
                        onChangeText={handleNoteChange}
                      ></TextInput>
                    </View>
                  </View>
                </View>
              </View>

              <View className="h-[60] w-full pr-5 pl-5 mb-[16]">
                <View className="h-full w-full">
                  <TouchableOpacity
                    className="flex-row justify-between items-center h-full w-full rounded-2xl bg-white pr-5 pl-5"
                    onPress={() => {
                      detailOnPress();
                    }}
                  >
                    <View className="h-full w-fit justify-center">
                      <Text className="text-black font-semibold">Details</Text>
                    </View>

                    <View className="h-full w-fit justify-center items-end">
                      <Ionicons
                        name="chevron-forward"
                        size={20}
                        color={"rgb(209 213 219)"}
                      ></Ionicons>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </>
  );
}
