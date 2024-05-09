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

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";

import {
  actionCloseTab,
  actionOpenTab,
} from "../../feature/opentab/opentab.reducer";
import { actionChangeColor } from "../../feature/setColorTag/setColorTag.reducer";
import { actionAddList } from "../../feature/allListRedux/myList.reducer";

import { listColor, listIcon } from "./allArrList";
import { actionSetPriorityTask } from "../../feature/setPriorityTask/setPriorityTask.reducer";

export default function PriorityTaskTab(myProp: {
  navigation: any;
  indexKey: number;
}) {
  const dispatch = useDispatch();

  const priorityState = useSelector(
    (state: RootState) => state.setPriorityTask.taskPriority
  );

  const navigation = myProp.navigation;

  const backOnPress = () => {
    dispatch(actionCloseTab("priorityTaskTab"));
    dispatch(actionCloseTab("newTaskTab"));

    dispatch(actionOpenTab("newTaskDetailTab"));
  };

  const noneOnPress = () => {
    dispatch(actionSetPriorityTask('None'));
  }

  const lowOnPress = () => {
    dispatch(actionSetPriorityTask('Low'));
  }

  const mediumOnPress = () => {
    dispatch(actionSetPriorityTask('Medium'));
  }

  const highOnPress = () => {
    dispatch(actionSetPriorityTask('High'));
  }

  return (
    <ScrollView
      className="w-full min-h-screen"
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
              <Text className="text-sm" style={{ color: "rgb(96 165 250)" }}>
                Details
              </Text>
            </TouchableOpacity>

            <View className="h-full w-fit items-center justify-center">
              <Text className="text-sm font-semibold text-black">Priority</Text>
            </View>
          </View>

          <View className="h-full w-[40%] items-end pr-5"></View>
        </View>

        <View className="w-full h-[24]"></View>

        <View className="h-[240] w-full pl-5 pr-5">
          <View className="h-full w-full bg-white rounded-2xl">
            <View className="flex-row justify-between h-[25%] w-full border-b-4 border-gray-200">
              <TouchableOpacity className="h-full w-[40%] justify-center pl-5"
               onPress={() => {noneOnPress()}}
              >
                <Text className="text-black text-base text-medium">None</Text>
              </TouchableOpacity>
              {priorityState == "None" && (
                <View className="h-full w-fit pr-5 justify-center items-end">
                  <Ionicons
                    name="checkmark-sharp"
                    size={28}
                    color={"rgb(96 165 250)"}
                  ></Ionicons>
                </View>
              )}
            </View>

            <View className="flex-row justify-between h-[25%] w-full pl-5">
              <View className="flex-row justify-between h-full w-full border-b-2 border-gray-200">
                <TouchableOpacity className="h-full w-[40%] justify-center"
                 onPress={() => {lowOnPress()}}
                >
                  <Text className="text-black text-base text-medium">Low</Text>
                </TouchableOpacity>
                {priorityState == "Low" && (
                  <View className="h-full w-fit pr-5 justify-center items-end">
                    <Ionicons
                      name="checkmark-sharp"
                      size={28}
                      color={"rgb(96 165 250)"}
                    ></Ionicons>
                  </View>
                )}
              </View>
            </View>

            <View className="flex-row justify-between h-[25%] w-full pl-5">
              <View className="flex-row justify-between h-full w-full border-b-2 border-gray-200">
                <TouchableOpacity className="h-full w-[40%] justify-center"
                 onPress={() => {mediumOnPress()}}
                >
                  <Text className="text-black text-base text-medium">Medium</Text>
                </TouchableOpacity>
                {priorityState == "Medium" && (
                  <View className="h-full w-fit pr-5 justify-center items-end">
                    <Ionicons
                      name="checkmark-sharp"
                      size={28}
                      color={"rgb(96 165 250)"}
                    ></Ionicons>
                  </View>
                )}
              </View>
            </View>

            <View className="flex-row justify-between h-[25%] w-full pl-5">
              <View className="flex-row justify-between h-full w-full">
                <TouchableOpacity className="h-full w-[40%] justify-center"
                 onPress={() => {highOnPress()}}
                >
                  <Text className="text-black text-base text-medium">High</Text>
                </TouchableOpacity>
                {priorityState == "High" && (
                  <View className="h-full w-fit pr-5 justify-center items-end">
                    <Ionicons
                      name="checkmark-sharp"
                      size={28}
                      color={"rgb(96 165 250)"}
                    ></Ionicons>
                  </View>
                )}
              </View>
            </View>

          </View>
        </View>
      </View>
    </ScrollView>
  );
}
