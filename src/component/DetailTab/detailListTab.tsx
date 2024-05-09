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

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";

import BottomTab1 from "../BottomTab/BottomTab1";
import BottomTab3 from "../BottomTab/BottomTab3";
import DetailTaskTab from "./detailTaskTab";
import NewTaskTab from "../NewTab/NewTaskTab";
import NewTaskDetailTab from "../NewTab/NewTaskDetailTab";
import PriorityTaskTab from "../NewTab/PriorityTaskTab";
import SettingDetailTaskTab from "./settingDetailTaskTab";

import { actionDeleteTask } from "../../feature/allListRedux/myList.reducer";
import { actionClearCheckTask } from "../../feature/allListRedux/myList.reducer";
import CPriorityTaskTab from "../NewTab/cPriorityTaskTab";

export default function DetailListTab(myProp: { navigation: any; route: any }) {
  const openTabList = useSelector(
    (state: RootState) => state.openTab.openTabList
  );

  const taskKeyOpen = useSelector(
    (state: RootState) => state.openTab.openTabList.indexTaskOpened
  );

  const dispatch = useDispatch();

  const indexList: number = myProp.route.params.indexList;
  const nameList: number = myProp.route.params.nameList;

  const navigation: any = myProp.navigation;

  const listsOnPress = () => {
    navigation.goBack();
  };

  const myListArr = useSelector(
    (state: RootState) => state.setMyList.myListArr
  );
  const [myListTask, setMyListTask] = useState<Array<any>>([]);

  useEffect(() => {
    dispatch(actionClearCheckTask(indexList));
  }, []);

  useEffect(() => {
    for (let i = 0; i < myListArr.length; ++i) {
      if (indexList == myListArr[i].indexKey) {
        setMyListTask(myListArr[i].taskList.taskListArr);
        break;
      }
    }
  });

  const [countChecked, setCountChecked] = useState(() => {
    let res: number = 0;
    for (let i = 0; i < myListTask.length; ++i)
      if (myListTask[i]["isChecked"] == true) res++;

    return res;
  });

  useEffect(() => {
    let res: number = 0;
    for (let i = 0; i < myListTask.length; ++i)
      if (myListTask[i]["isChecked"] == true) res++;
    setCountChecked(res);
  }, [myListTask]);

  const renderTaskList = () => {
    return myListTask.map((item: any, index: any) => (
      <DetailTaskTab
        key={index}
        indexList={indexList}
        indexTask={item.keyTask}
        myListTask={myListTask}
      ></DetailTaskTab>
    ));
  };

  const clearOnPress = () => {
    if (countChecked == 0) {
      return;
    }
    dispatch(actionDeleteTask(indexList));
  };

  return (
    <>
      <View className="h-full w-full bg-white pt-[28]">
        <View className="flex-row h-16 w-full justify-between">
          <View className="flex-row h-full w-32 justify-between">
            <TouchableOpacity
              className="flex-row h-full w-full"
              onPress={() => {
                listsOnPress();
              }}
            >
              <View className="h-full w-[40%] justify-center items-center">
                <Ionicons
                  name="chevron-back"
                  color="#3376F2"
                  size={32}
                ></Ionicons>
              </View>

              <View className="h-full w-[60%] justify-center items-start">
                <Text className="text-base" style={{ color: "#3376F2" }}>
                  Lists
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="h-full w-24 justify-center items-end pr-5">
            <TouchableOpacity className="h-[60%] aspect-square justify-center items-center rounded-full">
              <Ionicons
                name="ellipsis-horizontal-circle"
                color="#3376F2"
                size={32}
              ></Ionicons>
            </TouchableOpacity>
          </View>
        </View>
        <View className="h-24 w-full pl-5 pr-5 justify-center">
          <Text className="text-3xl font-bold" style={{ color: "#3376F2" }}>
            {nameList}
          </Text>
        </View>
        <View className="h-16 w-full pl-5">
          <View className="flex-row h-full w-full border-b-2 border-gray-100">
            <View className="h-full w-fit justify-center">
              <Text className="text-gray-300 text-base">{`${countChecked} Completed`}</Text>
            </View>
            <View className="h-full w-6 justify-center justify-center items-center">
              <Ionicons name="ellipse" size={5} color="gray"></Ionicons>
            </View>
            <View className="h-full w-fit justify-center justify-center items-center">
              <TouchableOpacity onPress={() => clearOnPress()}>
                <Text
                  style={{
                    color:
                      countChecked == 0
                        ? "rgb(229 231 235)"
                        : "rgb(96 165 250)",
                  }}
                >
                  Clear
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <ScrollView className="w-full">
          {renderTaskList()}
          <View className="h-16 w-full"></View>
        </ScrollView>

        <View className="flex-row h-[6.4%] w-full bg-white pl-4 pr-4 justify-between absolute bottom-[0]">
          <BottomTab3></BottomTab3>
        </View>
      </View>

      {openTabList.newTaskTab == true && (
        <View
          className="flex-row h-full w-full absolute bottom-[0]"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <NewTaskTab navigation={myProp.navigation} indexKey={indexList}></NewTaskTab>
        </View>
      )}

      {openTabList.newTaskDetailTab == true && (
        <View
          className="flex-row h-full w-full absolute bottom-[0]"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <NewTaskDetailTab navigation={myProp.navigation} indexKey={indexList}></NewTaskDetailTab>
        </View>
      )}

      {openTabList.cPriorityTaskTab == true && (
        <View
          className="flex-row h-full w-full absolute bottom-[0]"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <CPriorityTaskTab navigation={myProp.navigation} indexKey={indexList}></CPriorityTaskTab>
        </View>
      )}

      {openTabList.settingDetailTaskTab == true && (
        <View
          className="flex-row h-full w-full absolute bottom-[0]"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <SettingDetailTaskTab navigation={myProp.navigation} indexKey={indexList} taskKey={taskKeyOpen}></SettingDetailTaskTab>
        </View>
      )}
    </>
  );
}
