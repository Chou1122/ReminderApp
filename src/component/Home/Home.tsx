import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useNavigation } from "@react-navigation/native";

import NotiBox from "../NotiBox/NotiBox";
import ListBox from "../ListBox/ListBox";
import BottomTab1 from "../BottomTab/BottomTab1";
import NewListTab from "../NewTab/NewListTab";
import NewTaskAloneTab from "../NewTab/NewTaskAloneTab";
import NewTaskDetailAloneTab from "../NewTab/NewTaskDetailAloneTab";
import CPriorityTaskTab from "../NewTab/cPriorityTaskTab";

import { notiBoxes } from "./allArrHome";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCloseTab } from "../../feature/opentab/opentab.reducer";
import { actionChangeColor } from "../../feature/setColorTag/setColorTag.reducer";
import { RootState } from "../../../store";
import C2PriorityTaskTab from "../NewTab/c2PriorityTask";

export default function Home() {
  const openTabList = useSelector(
    (state: RootState) => state.openTab.openTabList
  );

  const myListArr: any = useSelector(
    (state: RootState) => state.setMyList.myListArr
  );

  const dispatch = useDispatch();

  const renderNotiBoxes = () => {
    return notiBoxes.map((box, index) => (
      <NotiBox
        key={index}
        colorBox={box.colorBox}
        iconBox={box.iconBox}
        textBox={box.textBox}
        numberBox={box.numberBox}
      />
    ));
  };

  const navigation: any = useNavigation();

  const renderMyList = () => {
    return myListArr.map((item: any, index: any) => (
      <ListBox
        key={index}
        colorBox={item.colorBox}
        iconBox={item.iconBox}
        textBox={item.textBox}
        numberBox={item.numberBox}
        indexKey={item.indexKey}
        isLast={index === myListArr.length - 1 ? "true" : "false"}
      />
    ));
  };

  const editOnPress = () => {
    navigation.navigate("Home2");

    dispatch(actionCloseTab("newGroupTab"));
    dispatch(actionCloseTab("newListTab"));

    dispatch(
      actionChangeColor({ tagName: "home2BackgroundColor", color: "#E5E7EB" })
    );
    dispatch(actionChangeColor({ tagName: "doneBtnColor", color: "#3B82F6" }));
  };

  return (
    <>
      <View className="bg-gray-200">
        <ScrollView className="w-full max-h-screen min-h-screen bg-gray-200 pl-4 pr-4 mt-[36]">
          {/* View chua nut Edit */}
          <View className="flex h-12 w-full items-end">
            <TouchableOpacity
              className="h-full w-16 flex justify-center"
              onPress={() => editOnPress()}
            >
              <Text className="text-lg text-blue-500 self-end">Edit</Text>
            </TouchableOpacity>
          </View>

          {/* View chua thanh tim kiem va nut tim kiem */}
          <View className="flex-row h-14 w-full bg-gray-300 self-center rounded-xl justify-around">
            <TouchableOpacity className="h-full w-10 justify-center items-center">
              <Ionicons name="search-outline" size={34} color="gray" />
            </TouchableOpacity>

            <TextInput
              className="h-full w-10/12 mr-2 text-xl"
              placeholder="Search"
            ></TextInput>
          </View>

          {/* View chua danh sach thong bao */}
          <View className="flex-wrap flex-row flex w-full justify-between content-around mt-5">
            {renderNotiBoxes()}
          </View>

          {/*  */}
          <View className="h-14 w-full justify-center ml-2">
            <Text className="text-black text-2xl font-bold">My Lists</Text>
          </View>

          {/* View chua List can lam */}
          <View className="flex-wrap flex w-full bg-white rounded-2xl mt-1">
            {renderMyList()}
          </View>

          {/* View ao de tao khoang trong */}
          <View className="h-[64] w-full"></View>
        </ScrollView>
      </View>
      <View
        className="flex-row h-[6.4%] w-full bg-gray-200 border-t-2 pl-4 pr-4 justify-between absolute bottom-[0]"
        style={{ borderColor: "#E5E7EB" }}
      >
        <BottomTab1></BottomTab1>
      </View>

      {openTabList.newListTab == true && (
        <View
          className="flex-row h-full w-full absolute bottom-[0]"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <NewListTab></NewListTab>
        </View>
      )}

      <NewTaskAloneTab></NewTaskAloneTab>
      <NewTaskDetailAloneTab></NewTaskDetailAloneTab>
      <C2PriorityTaskTab></C2PriorityTaskTab>
      
    </>
  );
}
