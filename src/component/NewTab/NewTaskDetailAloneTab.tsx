import {
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";

import {
  acitonSetTitleNewTask,
  actionCloseTab,
  actionOpenTab,
} from "../../feature/opentab/opentab.reducer";
import { actionAddTask } from "../../feature/allListRedux/myList.reducer";
import DateOpenTabTask from "../DetailTab/dateOpenTabTask";
import TimeTaskBox from "../DetailTab/timeTaskBox";

import { actionSetOpenNewReminderDetailTab } from "../../feature/openNewReminderDetail/openNewReminderDetail.reducer";
import { actionSetOpenNewReminderTab } from "../../feature/openNewReminder/openNewReminder.reducer";
import { actionSetC2PriorityTaskOpen } from "../../feature/c2PriorityTaskOpen/c2PriorityTaskOpen.reducer";

export default function NewTaskDetailAloneTab() {
  const titleNewTask = useSelector(
    (state: RootState) => state.openTab.openTabList.titleNewTask
  );

  const priorityState = useSelector(
    (state: RootState) => state.setPriorityTask.taskPriority
  );

  const openNewReminderDetail = useSelector(
    (state: RootState) => state.openNewReminderDetailRedux.openTab
  );

  const [tagsState, setTagsState] = useState<boolean>();
  const [locationState, setLocationState] = useState<boolean>();
  const [messState, setMessState] = useState<boolean>();
  const [flagState, setFlagState] = useState<boolean>();
  const [urlState, setUrlState] = useState<string>("");

  const dispatch = useDispatch();

  const backOnPress = () => {
    dispatch(actionSetOpenNewReminderDetailTab(false));
    dispatch(actionSetOpenNewReminderTab(true));
  };

  const priorityOnPress = () => {
      dispatch(actionCloseTab('newTaskDetailAloneTab'));
      dispatch(actionSetC2PriorityTaskOpen(true));
  };

  const toggleTags = () => {
    setTagsState((state) => !state);
  };
  const toggleLocation = () => {
    setLocationState((state) => !state);
  };
  const toggleMess = () => {
    setMessState((state) => !state);
  };
  const toggleFlag = () => {
    setFlagState((state) => !state);
  };

  const renderSwitchToggle = (valState: any, myCallBack: any) => {
    return (
      <Switch
        style={{
          transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
        }}
        value={valState}
        onValueChange={() => {
          myCallBack();
        }}
      />
    );
  };

  const addOnPress = () => {
    if (titleNewTask == "") return;

    //   dispatch(actionAddTask({
    //     indexList: indexList,
    //     nameTask: titleNewTask,
    //   }));

    dispatch(acitonSetTitleNewTask(""));

    dispatch(actionCloseTab("newTaskDetailTab"));
  };

  return (
    <>
      {openNewReminderDetail && (
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
              <View className="flex-row w-full h-[60] justify-between">
                <View className="flex-row h-full w-[56%] justify-between items-center pl-1">
                  <TouchableOpacity
                    className="flex-row h-full w-fit items-center"
                    onPress={() => {
                      backOnPress();
                    }}
                  >
                    <Ionicons
                      name="chevron-back"
                      size={32}
                      color={"rgb(96 165 250)"}
                    ></Ionicons>
                    <Text
                      className="text-sm"
                      style={{ color: "rgb(96 165 250)" }}
                    >
                      New Reminder
                    </Text>
                  </TouchableOpacity>

                  <View className="h-full w-fit items-center justify-center">
                    <Text className="text-sm font-semibold text-black">
                      Details
                    </Text>
                  </View>
                </View>

                <View className="h-full w-[40%] items-end pr-5">
                  <TouchableOpacity
                    className="h-full w-fit justify-center pl-2"
                    onPress={() => {
                      addOnPress();
                    }}
                  >
                    <Text
                      className={`font-semibold text-sm ${
                        titleNewTask == "" ? "text-gray-400" : "text-blue-400"
                      }`}
                    >
                      Add
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className="w-full h-[24]"></View>

              <View className="flex-row w-full pr-5 pl-5">
                <DateOpenTabTask></DateOpenTabTask>
              </View>

              <View className="flex-row w-full pr-5 pl-5">
                <TimeTaskBox></TimeTaskBox>
              </View>

              <View className="flex-row h-[60] w-full pl-5 pr-5 mt-[16]">
                <View className="h-full w-full bg-white rounded-2xl">
                  <View className="flex-row h-full w-full ">
                    <View className="h-full w-[20%] justify-center items-center">
                      <View
                        className="h-[56%] aspect-square rounded-lg justify-center items-center"
                        style={{ backgroundColor: "#5B6670" }}
                      >
                        <Ionicons
                          name="attach"
                          color="white"
                          size={24}
                        ></Ionicons>
                      </View>
                    </View>

                    <View className="flex-row justify-between items-center h-full w-[80%] pr-5">
                      <View className="h-full w-fit justify-center">
                        <Text className="font-medium text-base">Tags</Text>
                      </View>

                      <View className="h-full w-fit justify-center items-center">
                        {renderSwitchToggle(tagsState, toggleTags)}
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              <View className="flex-row h-[60] w-full pl-5 pr-5 mt-[16]">
                <View className="h-full w-full bg-white rounded-2xl">
                  <View className="flex-row h-full w-full ">
                    <View className="h-full w-[20%] justify-center items-center">
                      <View
                        className="h-[56%] aspect-square rounded-lg justify-center items-center"
                        style={{ backgroundColor: "#3478F6" }}
                      >
                        <Ionicons
                          name="navigate"
                          color="white"
                          size={24}
                        ></Ionicons>
                      </View>
                    </View>

                    <View className="flex-row justify-between items-center h-full w-[80%] pr-5">
                      <View className="h-full w-fit justify-center">
                        <Text className="font-medium text-base">Location</Text>
                      </View>

                      <View className="h-full w-fit justify-center items-center">
                        {renderSwitchToggle(locationState, toggleLocation)}
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              <View className="flex-row h-[60] w-full pl-5 pr-5 mt-[16]">
                <View className="h-full w-full bg-white rounded-2xl">
                  <View className="flex-row h-full w-full ">
                    <View className="h-full w-[20%] justify-center items-center">
                      <View
                        className="h-[56%] aspect-square rounded-lg justify-center items-center"
                        style={{ backgroundColor: "#65C466" }}
                      >
                        <Ionicons
                          name="chatbubble"
                          color="white"
                          size={24}
                        ></Ionicons>
                      </View>
                    </View>

                    <View className="flex-row justify-between items-center h-full w-[80%] pr-5">
                      <View className="h-full w-fit justify-center">
                        <Text className="font-medium text-base">
                          When Messaging
                        </Text>
                      </View>

                      <View className="h-full w-fit justify-center items-center">
                        {renderSwitchToggle(messState, toggleMess)}
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              <View className="flex-row h-fit w-full pl-5 pr-5 mt-[16] justify-center items-center">
                <Text className="text-xs text-gray-500">
                  Selecting this option will show the reminder notification when
                  chatting with a person in Messages.
                </Text>
              </View>

              <View className="flex-row h-[60] w-full pl-5 pr-5 mt-[16]">
                <View className="h-full w-full bg-white rounded-2xl">
                  <View className="flex-row h-full w-full ">
                    <View className="h-full w-[20%] justify-center items-center">
                      <View
                        className="h-[56%] aspect-square rounded-lg justify-center items-center"
                        style={{ backgroundColor: "#F09A37" }}
                      >
                        <Ionicons
                          name="flag"
                          color="white"
                          size={24}
                        ></Ionicons>
                      </View>
                    </View>

                    <View className="flex-row justify-between items-center h-full w-[80%] pr-5">
                      <View className="h-full w-fit justify-center">
                        <Text className="font-medium text-base">Flag</Text>
                      </View>

                      <View className="h-full w-fit justify-center items-center">
                        {renderSwitchToggle(flagState, toggleFlag)}
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              <View className="flex-row h-[60] w-full pl-5 pr-5 mt-[16]">
                <View className="flex-row h-full w-full bg-white justify-between rounded-2xl pl-5">
                  <View className="h-full w-fit justify-center">
                    <Text className="text-base font-medium">Priority</Text>
                  </View>

                  <TouchableOpacity
                    className="flex-row h-full w-fit items-center justify-center"
                    onPress={() => {
                      priorityOnPress();
                    }}
                  >
                    <Text className="text-base font-normal text-gray-400">
                      {priorityState}
                    </Text>
                    <View className="h-full w-fit items-center justify-center pr-2 pl-1">
                      <Ionicons
                        name="chevron-forward"
                        size={20}
                        color="rgb(203 213 225)"
                      ></Ionicons>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              <View className="flex-row h-[60] w-full pl-5 pr-5 mt-[16]">
                <View className="flex-row h-full w-full bg-white justify-between rounded-2xl pl-5">
                  <TouchableOpacity className="justify-center">
                    <Text className="text-sm text-blue-400">Add Image</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className="flex-row h-[60] w-full pl-5 pr-5 mt-[16]">
                <View className="flex-row h-full w-full bg-white justify-between rounded-2xl pl-5 pr-5">
                  <TextInput
                    className="h-full w-full justify-center text-sm"
                    placeholder="URL"
                  ></TextInput>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </>
  );
}
