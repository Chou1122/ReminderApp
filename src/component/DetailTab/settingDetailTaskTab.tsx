import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import ScrollPicker from "react-native-wheel-scrollview-picker";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";

import TimeOpenTabTask from "./timeOpenTabTask";
import TimeTaskBox from "./timeTaskBox";

import DateOpenTabTask from "./dateOpenTabTask";

import {
  actionCloseTab,
  actionOpenTab,
  actionTurnTimeTask,
} from "../../feature/opentab/opentab.reducer";

import { actionSetFlagTask } from "../../feature/allListRedux/myList.reducer";

import { minuteList, hourList } from "./allTimeSample";
import { useNavigationState } from "@react-navigation/native";
import { actionHandleFlaggedTask } from "../../feature/flaggedGroupRedux/flaggedGroup.reducer";

export default function SettingDetailTaskTab(myProp: {
  navigation: any;
  indexKey: number;
  taskKey: number;
}) {
  const navigationState = useNavigationState((state) => state);

  const myListArr = useSelector(
    (state: RootState) => state.setMyList.myListArr
  );

  const priorityState = useSelector(
    (state: RootState) => state.setPriorityTask.taskPriority
  );

  const openTabList = useSelector(
    (state: RootState) => state.openTab.openTabList
  );

  let indexList: number = myProp.indexKey;
  let indexTask: number = myProp.taskKey;

  if (
    navigationState.routes[navigationState.index].name == "FlaggedGroupDetail"
  ) {
    const taskAndListKey = useSelector(
      (state: RootState) => state.taskAndListOpenKeyRedux
    );

    indexList = taskAndListKey.indexList;
    indexTask = taskAndListKey.indexTask;
  }

  const [dateState, setDateState] = useState<boolean>();
  const [tagsState, setTagsState] = useState<boolean>();
  const [locationState, setLocationState] = useState<boolean>();
  const [messState, setMessState] = useState<boolean>();
  const [flagState, setFlagState] = useState<boolean>();
  const [urlState, setUrlState] = useState<string>("");
  const [titleState, setTitleState] = useState<string>("");
  const [noteState, setNoteState] = useState<string>("");

  useEffect(() => {
    let posListtmp = 0,
      posTasktmp = 0;
    for (let i = 0; i < myListArr.length; ++i) {
      if (myListArr[i]["indexKey"] == indexList) {
        posListtmp = i;
        break;
      }
    }

    for (
      let i = 0;
      i < myListArr[posListtmp]["taskList"]["taskListArr"].length;
      i++
    ) {
      if (
        myListArr[posListtmp]["taskList"]["taskListArr"][i]["keyTask"] ==
        indexTask
      ) {
        posTasktmp = i;
        break;
      }
    }

    setTitleState(
      myListArr[posListtmp]["taskList"]["taskListArr"][posTasktmp].nameTask
    );

    setNoteState(
      myListArr[posListtmp]["taskList"]["taskListArr"][posTasktmp].noteTask
    );
    setFlagState(
      myListArr[posListtmp]["taskList"]["taskListArr"][posTasktmp].isFlagged
    );
  }, [openTabList]);

  const dispatch = useDispatch();

  const navigation = myProp.navigation;

  const backOnPress = () => {
    dispatch(actionCloseTab("settingDetailTaskTab"));
  };

  const doneOnPress = () => {
    dispatch(actionCloseTab("settingDetailTaskTab"));
  };

  const priorityOnPress = () => {
    dispatch(actionCloseTab("newTaskDetailTab"));
    dispatch(actionCloseTab("newTaskTab"));
    dispatch(actionCloseTab("settingDetailTaskTab"));

    dispatch(actionOpenTab("cPriorityTaskTab"));
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
    // console.log(indexList,indexTask);

    dispatch(actionSetFlagTask({ indexList: indexList, indexTask: indexTask }));

    dispatch(
      actionHandleFlaggedTask({ indexList: indexList, indexTask: indexTask })
    );

    setFlagState((state) => !state);
  };

  const handleTitleChange = (text: string) => {
    setTitleState(text);
  };

  const handleNoteChange = (text: string) => {
    setNoteState(text);
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

  return (
    <>
      {openTabList.settingDetailTaskTab && (
        <View
          className="flex-row h-full w-full absolute bottom-[0]"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <ScrollView
            className="min-h-screen w-full"
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={false}
          >
            <View className="w-full h-[64]"></View>

            <View className="min-h-[1000] h-fit w-full bg-gray-200 rounded-t-2xl">
              <View className="flex-row w-full h-[60] justify-between">
                <View className="flex-row h-full w-[56%] justify-between items-center pl-1">
                  <TouchableOpacity
                    className="flex-row h-full w-fit items-center pl-5"
                    onPress={() => {
                      backOnPress();
                    }}
                  >
                    <Text
                      className="text-sm"
                      style={{ color: "rgb(96 165 250)" }}
                    >
                      Cancel
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
                      doneOnPress();
                    }}
                  >
                    <Text
                      className="font-semibold text-sm"
                      style={{ color: "rgb(96 165 250)" }}
                    >
                      Done
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className="w-full h-[24]"></View>

              <View className="w-full h-[60] pl-5 pr-5">
                <View className="w-full h-[60] pl-5 bg-white rounded-t-2xl">
                  <TextInput
                    className="w-full h-full border-b-2 border-gray-200 text-sm"
                    placeholder="Title"
                    value={titleState}
                    onChangeText={handleTitleChange}
                  ></TextInput>
                </View>
              </View>
              <View className="w-full h-[60] pl-5 pr-5">
                <View className="w-full h-[60] pl-5 bg-white">
                  <TextInput
                    className="w-full h-full border-b-2 border-gray-200 text-sm"
                    placeholder="Notes"
                    value={noteState}
                    onChangeText={handleNoteChange}
                  ></TextInput>
                </View>
              </View>
              <View className="w-full h-[60] mb-[16] pl-5 pr-5">
                <View className="w-full h-[60] pl-5 bg-white rounded-b-2xl">
                  <TextInput
                    className="w-full h-full text-sm"
                    placeholder="URL"
                  ></TextInput>
                </View>
              </View>

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
                <View className="flex-row h-full w-full bg-white justify-between rounded-t-2xl pl-5">
                  <View className="flex-row justify-between h-full w-full border-b-2 border-gray-200">
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
              </View>

              <View className="flex-row h-[60] w-full pl-5 pr-5">
                <View className="flex-row h-full w-full bg-white justify-between rounded-b-2xl pl-5">
                  <View className="flex-row justify-between h-full w-full">
                    <View className="h-full w-fit justify-center">
                      <Text className="text-base font-medium">List</Text>
                    </View>

                    <TouchableOpacity className="flex-row h-full w-fit items-center justify-center">
                      <View className="h-full w-fit items-center justify-center pr-2 pl-1">
                        <Ionicons
                          name="ellipse"
                          size={8}
                          color="rgb(96 165 250)"
                        ></Ionicons>
                      </View>

                      <View className="h-full w-fit items-center justify-center justify-center items-center">
                        <Text className="text-gray-400">{titleState}</Text>
                      </View>

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
              </View>

              <View className="flex-row h-[60] w-full pl-5 pr-5 mt-[16]">
                <View className="flex-row h-full w-full bg-white justify-between rounded-2xl pl-5">
                  <View className="flex-row justify-between h-full w-full">
                    <View className="h-full w-fit justify-center">
                      <Text className="text-base font-medium">Subtasks</Text>
                    </View>

                    <TouchableOpacity className="flex-row h-full w-fit items-center justify-center">
                      <Text className="text-base font-normal text-gray-400">
                        {" "}
                        0{" "}
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
              </View>

              <View className="flex-row h-[60] w-full pl-5 pr-5 mt-[16] mb-[24]">
                <View className="flex-row h-full w-full bg-white justify-between rounded-2xl pl-5">
                  <TouchableOpacity className="justify-center">
                    <Text className="text-sm text-blue-400">Add Image</Text>
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
