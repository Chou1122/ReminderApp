import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";

import { useNavigation } from "@react-navigation/native";

import { actionSetOpenNewReminderTab } from "../../feature/openNewReminder/openNewReminder.reducer";

import FlaggedTaskDetail from "./flaggedTaskDetail";
import SettingDetailTaskTab from "./settingDetailTaskTab";
import NewTaskAloneTab from "../NewTab/NewTaskAloneTab";

export default function FlaggedGroupDetail() {
  const openTabList = useSelector(
    (state: RootState) => state.openTab.openTabList
  );

  const taskKeyOpen = useSelector(
    (state: RootState) => state.openTab.openTabList.indexTaskOpened
  );

  const flaggedTaskList = useSelector(
    (state: RootState) => state.flaggedGruopRedux
  );

  const taskAndListKey = useSelector(
    (state: RootState) => state.taskAndListOpenKeyRedux
  );

  const dispatch = useDispatch();
  const navigation: any = useNavigation();

  const listsOnPress = () => {
    navigation.goBack();
  };

  const renderFlaggedTask = () => {
    return flaggedTaskList.map((item: any, index: any) => {
      return (
        <FlaggedTaskDetail
          key={index}
          indexList={item.indexList}
          indexTask={item.indexTask}
        />
      );
    });
  };

  const newReminderOnPress = () => {
    dispatch(actionSetOpenNewReminderTab(true));
  }

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
            <TouchableOpacity
              className="h-[60%] aspect-square justify-center items-center rounded-full"
              // onPress = {()=>{detailOnPress()}}
            >
              <Ionicons
                name="ellipsis-horizontal-circle"
                color="#3376F2"
                size={32}
              ></Ionicons>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView className="w-full">
          <View className="h-fit w-full pl-5 pr-5 pb-2 pt-2">
            <Text className="text-4xl font-bold" style={{ color: "#F09A37" }}>
              Flagged
            </Text>
          </View>

          {renderFlaggedTask()}

          <View className="h-20 w-full"></View>
        </ScrollView>

        <View className="h-[6.4%] w-full absolute bottom-0 pl-2 pr-5 bg-white">
          <TouchableOpacity className="flex-row h-full w-fit" 
           onPress={() => {newReminderOnPress()}}
          >
            <View className="h-full aspect-square justify-center items-center">
              <Ionicons name="add-circle" size={36} color={"#F09A37"} />
            </View>

            <View className="h-full w-fit justify-center items-center pl-1">
              <Text
                style={{ color: "#F09A37" }}
                className="text-xl font-medium"
              >
                New Reminder
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <SettingDetailTaskTab
        navigation={navigation}
        indexKey={taskAndListKey.indexList}
        taskKey={taskAndListKey.indexTask}
      ></SettingDetailTaskTab>

      <NewTaskAloneTab></NewTaskAloneTab>
    </>
  );
}
