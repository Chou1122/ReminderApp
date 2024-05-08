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

import NotiBox2 from "../NotiBox/NotiBox2";
import ListBox from "../ListBox/ListBox";
import BottomTab2 from "../BottomTab/BottomTab2";
import NewGroupTab from "../NewTab/NewGroupTab";
import NewListTab from "../NewTab/NewListTab";

import { notiBoxes2 } from "./allArrHome";

import { useState } from "react";
import ListBox2 from "../ListBox/ListBox2";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { actionCloseTab } from "../../feature/opentab/opentab.reducer";
import { actionChangeColor } from "../../feature/setColorTag/setColorTag.reducer";

export default function Home2({ navigation }: { navigation: any }) {
  const openTabList = useSelector(
    (state: RootState) => state.openTab.openTabList
  );

  const myListArr = useSelector(
    (state:RootState) => state.setMyList.myListArr
  )

  const setColorTagList = useSelector((state: RootState) => state.setColorTag);

  const dispatch = useDispatch();

  const renderNotiBoxes2 = () => {
    return notiBoxes2.map((box, index) => (
      <NotiBox2
        key={index}
        colorBox={box.colorBox}
        iconBox={box.iconBox}
        textBox={box.textBox}
        numberBox={box.numberBox}
        isCheck={box.isCheck}
        isLast={index === notiBoxes2.length - 1 ? "true" : "false"}
      />
    ));
  };

  const renderMyList2 = () => {
    return myListArr.map((item:any, index:any) => (
      <ListBox2
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

  const doneOnPress = () => {
    if (openTabList.newGroupTab == true) return;

    navigation.navigate("Home");
  };

  return (
    <>
      <View style={{ backgroundColor: setColorTagList.home2BackgroundColor }}>
        <ScrollView
          className="w-full mt-[36] max-h-screen min-h-screen pl-4 pr-4"
          style={{ backgroundColor: setColorTagList.home2BackgroundColor }}
        >
          {/* View chua nut Done */}
          <View className="flex h-12 w-full items-end">
            <TouchableOpacity
              className="h-full w-16 flex justify-center"
              onPress={() => doneOnPress()}
            >
              <Text
                className="text-lg self-end font-semibold"
                style={{ color: setColorTagList.doneBtnColor }}
              >
                Done
              </Text>
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
          <View className="flex-wrap flex flex w-full justify-between content-around mt-5 bg-white rounded-2xl">
            {renderNotiBoxes2()}
          </View>

          {/*  */}
          <View className="h-14 w-full justify-center ml-2">
            <Text className="text-black text-2xl font-bold">My Lists</Text>
          </View>

          {/* View chua List can lam */}
          <View className="flex-wrap flex w-full bg-white rounded-2xl mt-1">
            {renderMyList2()}
          </View>

          {/* View ao de tao khoang trong */}
          <View className="h-[64] w-full"></View>
        </ScrollView>

      </View>
      <View
        className="flex-row h-[6.4%] w-full bg-gray-200 border-t-2 pl-4 pr-4 justify-between absolute bottom-[0]"
        style={{ borderColor: "#E5E7EB" }}
      >
        <BottomTab2></BottomTab2>
      </View>

      {openTabList.newGroupTab == true && (
          <View
            className="flex-row h-full w-full absolute bottom-[0]"
            style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
          >
            <NewGroupTab></NewGroupTab>
          </View>
        )}

       {openTabList.newListTab == true && (
          <View
            className="flex-row h-full w-full absolute bottom-[0]"
            style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
          >
            <NewListTab></NewListTab>
          </View>
        )}
    </>
  );
}
