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

import NotiBox from "../NotiBox/NotiBox";
import ListBox from "../ListBox/ListBox";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCloseTab, actionOpenTab,acitonSetTitleNewTask } from "../../feature/opentab/opentab.reducer";
import { actionChangeColor } from "../../feature/setColorTag/setColorTag.reducer";

export default function BottomTab3() {
  const dispatch = useDispatch();

  const newReminderOnPress = () => {
    dispatch(actionCloseTab('priorityTaskTab'));
    dispatch(actionOpenTab("newTaskTab"));
    dispatch(acitonSetTitleNewTask(''));
  };

  return (
    <>
      <TouchableOpacity
        className="flex-row h-full w-[54%] justify-between items-center"
        onPress={() => {
          newReminderOnPress();
        }}
      >
        <View
          className="w-[16%] aspect-square justify-center items-center rounded-full"
          style={{ backgroundColor: "#3B82F6" }}
        >
          <Ionicons name="add-outline" size={32} color="white" />
        </View>

        <View className="h-full w-[78%] justify-center">
          <Text
            className="text-base font-semibold"
            style={{ color: "#3B82F6" }}
          >
            New Reminder
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
