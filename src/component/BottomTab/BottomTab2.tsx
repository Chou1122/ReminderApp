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
import { RootState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";

import { actionOpenTab } from "../../feature/opentab/opentab.reducer";
import { actionChangeColor } from "../../feature/setColorTag/setColorTag.reducer";

export default function BottomTab2() {
  const dispatch = useDispatch();

  const addGroupOnPress = () => {
    dispatch(actionOpenTab("newGroupTab"));
    // dispatch(actionChangeColor({tagName: 'home2BackgroundColor', color: '#9CA3AF'}));
    dispatch(actionChangeColor({ tagName: "doneBtnColor", color: "#6B7280" }));
  };

  const addListOnPress = () => {
    dispatch(actionOpenTab("newListTab"));
    // dispatch(actionChangeColor({tagName: 'home2BackgroundColor', color: '#9CA3AF'}));
    dispatch(actionChangeColor({ tagName: "doneBtnColor", color: "#6B7280" }));
  };

  return (
    <>
      <TouchableOpacity
        className="flex-row h-full w-[54%] justify-between items-center"
        onPress={() => addGroupOnPress()}
      >
        <Text className="text-blue-400 text-base pl-1">Add Group</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="h-full w-[28%] justify-center items-center"
        onPress={() => addListOnPress()}
      >
        <Text className="text-base" style={{ color: "#3B82F6" }}>
          Add List
        </Text>
      </TouchableOpacity>
    </>
  );
}
