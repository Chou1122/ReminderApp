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
  import { actionOpenTab } from "../../feature/opentab/opentab.reducer";
  import { actionChangeColor } from "../../feature/setColorTag/setColorTag.reducer";
  
  export default function BottomTab3() {
    const dispatch = useDispatch();
  
    const addListOnPress = () => {
      dispatch(actionOpenTab("newListTab"));
      // dispatch(actionChangeColor({tagName: 'home2BackgroundColor', color: '#9CA3AF'}));
      dispatch(actionChangeColor({ tagName: "doneBtnColor", color: "#6B7280" }));
    };
  
    return (
      <>
        <TouchableOpacity className="flex-row h-full w-[54%] justify-between items-center">
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
  