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

import { actionCloseTab } from "../../feature/opentab/opentab.reducer";
import { actionChangeColor } from "../../feature/setColorTag/setColorTag.reducer";

export default function NewGroupTab() {
  const openTabList = useSelector(
    (state: RootState) => state.openTab.openTabList
  );

  const dispatch = useDispatch();

  const cancelOnPress = () => {
    dispatch(actionCloseTab("newGroupTab"));
    dispatch(
      actionChangeColor({ tagName: "home2BackgroundColor", color: "#E5E7EB" })
    );
    dispatch(actionChangeColor({ tagName: "doneBtnColor", color: "#3B82F6" }));
  };

  const createOnPress = () => {
    dispatch(actionCloseTab("newGroupTab"));
    dispatch(
      actionChangeColor({ tagName: "home2BackgroundColor", color: "#E5E7EB" })
    );
    dispatch(actionChangeColor({ tagName: "doneBtnColor", color: "#3B82F6" }));
  };

  return (
    <ScrollView className="min-h-screen w-full">
      <View className="w-full h-[64]"></View>

      <View className="w-full h-[1000] bg-gray-200 rounded-t-2xl">
        <View className="flex-row w-full h-[60] pl-5 pr-5 justify-between">
          <View className="w-[28%] h-full">
            <TouchableOpacity
              className="h-full w-[70%]  justify-center"
              onPress={() => cancelOnPress()}
            >
              <Text className="text-blue-400 font-normal text-base">
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
          <View className="w-[32%] h-full justify-center items-center">
            <Text className="text-black font-semibold text-base">
              New Group
            </Text>
          </View>
          <View className="w-[28%] h-full items-end">
            <TouchableOpacity
              className="h-full w-[70%] justify-center items-end"
              onPress={() => createOnPress()}
            >
              <Text className="text-gray-400 font-semibold text-base">
                Create
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="w-full h-[24]"></View>

        <View className="h-[140] w-full justify-center items-center pl-5 pr-5">
          <View className="h-[120] w-full bg-white rounded-2xl">
            <View className="h-[50%] w-full items-end">
              <View className="h-full w-[95%] border-b-2 border-gray-200">
                <TextInput
                  className="h-full w-[90%] text-base"
                  placeholder="Untitled"
                ></TextInput>
              </View>
            </View>
            <View className="h-[50%] w-full items-end">
              <View className="flex-row h-full w-[95%] justify-between">
                <View className="h-full w-[80%] justify-center">
                  <Text className="text-base font-semibold">Include</Text>
                </View>
                <View className="h-full w-[16%]">
                  <TouchableOpacity className="h-full w-full justify-center items-center">
                    <Ionicons
                      name="chevron-forward-outline"
                      size={26}
                      color={"gray"}
                    ></Ionicons>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
