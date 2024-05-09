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
import { actionAddList } from "../../feature/allListRedux/myList.reducer";

import { listColor, listIcon } from "./allArrList";

export default function NewListTab() {
  const openTabList = useSelector(
    (state: RootState) => state.openTab.openTabList
  );

  const [colorState, setColorState] = useState(0);
  const [iconState, setIconState] = useState(0);
  const [listNameState, setListNameState] = useState('');

  const dispatch = useDispatch();

  const cancelOnPress = () => {
    dispatch(actionCloseTab("newListTab"));
    dispatch(
      actionChangeColor({ tagName: "home2BackgroundColor", color: "#E5E7EB" })
    );
    dispatch(actionChangeColor({ tagName: "doneBtnColor", color: "#3B82F6" }));
  };

  const doneOnPress = () => {
    if (listNameState == '') return;

    dispatch(actionCloseTab("newListTab"));
    dispatch(
      actionChangeColor({ tagName: "home2BackgroundColor", color: "#E5E7EB" })
    );
    dispatch(actionChangeColor({ tagName: "doneBtnColor", color: "#3B82F6" }));

    dispatch(actionAddList({
      colorBox: listColor[colorState],
      iconBox: listIcon[iconState],
      textBox: listNameState == '' ? 'List Name' : listNameState,
      numberBox: 0,
    }));
  };

  const renderListColor = () => {
    return listColor.map((item, index) => (
      <TouchableOpacity
        key={index}
        className={`h-[10%] w-[16%] aspect-square justify-center items-center rounded-full mt-[16] ${
          colorState == index ? "border-2 border-gray-200" : ""
        }`}
        onPress={() => {
          setColorState(index);
        }}
      >
        <View
          className="h-[80%] aspect-square rounded-full"
          style={{ backgroundColor: item }}
        ></View>
      </TouchableOpacity>
    ));
  };

  const renderListIcon = () => {
    return listIcon.map((item, index) => (
      <TouchableOpacity
        key={index}
        className={`h-[10%] w-[16%] aspect-square justify-center items-center rounded-full mt-[16] `}
        onPress={() => {
          setIconState(index);
        }}
      >
        <View
          className="h-[80%] aspect-square rounded-full justify-center items-center"
          style={{
            backgroundColor: iconState == index ? "#E8F1FE" : "#E5E7EB",
          }}
        >
          <Ionicons
            name={item}
            size={28}
            color={`${iconState == index ? "#4683F6" : "#505050"}`}
          ></Ionicons>
        </View>
      </TouchableOpacity>
    ));
  };

  const handleListNameChange = (text:any) => {
    setListNameState(text);
  };

  return (
    <ScrollView className="w-full min-h-screen" showsVerticalScrollIndicator={false}>
      <View className="w-full h-[64]"></View>

      <View className="w-full h-fit min-h-[1000] bg-gray-200 rounded-t-2xl">
        {/* Top Tab */}
        <View className="flex-row w-full h-[60] pl-5 pr-5 justify-between mb-[4]">
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
            <Text className="text-black font-semibold text-base">New List</Text>
          </View>
          <View className="w-[28%] h-full items-end">
            <TouchableOpacity
              className="h-full w-[70%] justify-center items-end"
              onPress={() => doneOnPress()}
            >
              <Text className={`${listNameState == '' ? 'text-gray-400' : 'text-blue-400'} font-semibold text-base`}>
                Done
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Middle Tab */}
        <View className="w-full h-[220] pr-5 pl-5 mb-[16]">
          <View className="w-full h-full bg-white rounded-2xl justify-between pt-[20] pb-[20] pr-5 pl-5">
            <View
              className="h-[56%] aspect-square self-center rounded-full mb-[16] justify-center items-center"
              style={{ backgroundColor: listColor[colorState] }}
            >
              <Ionicons
                name={listIcon[iconState]}
                size={60}
                color="white"
              ></Ionicons>
            </View>

            <View className="h-[36%] w-full bg-gray-200 self-center rounded-2xl items-center">
              <TextInput
                value={listNameState}
                onChangeText={handleListNameChange}
                className="h-full w-[90%] justify-center text-center font-semibold text-base"
                placeholder="List Name"
              ></TextInput>
            </View>
          </View>
        </View>

        {/* Smart List Btn */}
        <View className="h-[76] w-full pr-5 pl-5 mb-[16]">
          <View className="h-full w-full">
            <TouchableOpacity className="flex-row justify-between items-center h-full w-full rounded-2xl bg-white pr-5 pl-5">
              <View className="h-[50%] aspect-square rounded-xl bg-blue-500 justify-center items-center">
                <Ionicons
                  name="filter-circle"
                  size={28}
                  color="white"
                ></Ionicons>
              </View>

              <View className="h-full w-[70%]">
                <View className="h-[60%] w-full justify-center items-start mt-[5]">
                  <Text className="text-sm font-semibold">
                    Make into Smart List
                  </Text>
                </View>

                <View className="h-[30%] w-full mb-[10] mt-[-10]">
                  <Text
                    className="font-semibold text-gray-400"
                    style={{ fontSize: 11 }}
                  >
                    Organize using tags and other filters
                  </Text>
                </View>
              </View>

              <View className="h-full w-[10%] items-end justify-center">
                <Ionicons
                  name="chevron-forward"
                  size={24}
                  color="gray"
                ></Ionicons>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex flex-row flex-wrap w-fit justify-between content-around bg-white rounded-2xl mr-5 ml-5 pl-4 pr-4 pb-[16] mb-[16]">
          {renderListColor()}
        </View>

        <View className="flex flex-row flex-wrap w-fit justify-between content-around bg-white rounded-2xl mr-5 ml-5 pl-4 pr-4 pb-[16] mb-[20]">
          {renderListIcon()}
        </View>
      </View>
    </ScrollView>
  );
}
