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

export default function DetailListTab(myProp: { navigation: any; route: any }) {
  const indexList: number = myProp.route.params.indexList;
  const nameList: number = myProp.route.params.nameList;


  const navigation: any = myProp.navigation;

  const listsOnPress = () => {
    navigation.goBack();
  };

  return (
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

      <View className='h-24 w-full pl-5 pr-5 justify-center'>
        <Text className='text-3xl font-bold' style={{color:"#3376F2"}}>
            {nameList}
        </Text>
      </View>
    </View>
  );
}
