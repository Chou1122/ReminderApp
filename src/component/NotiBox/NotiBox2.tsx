import {
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

import { actionCloseGroup, actionOpenGroup } from "../../feature/checkGroup/checkGroup.reducer";

export default function NotiBox2(myProp: {
  colorBox: any;
  iconBox: any;
  numberBox: any;
  textBox: string;
  isCheck: boolean;
  indexKey: number;
  isLast: string;
}) {
  const dispatch = useDispatch();

  const boxChecked = useSelector(
    (state: RootState) => state.checkGroupRedux.checkGroup[myProp.indexKey]
  )


   // Thay doi trang thai checked
   const checkedOnPress = () => {
    
        if (boxChecked == true) {
          dispatch(actionCloseGroup(myProp.indexKey));
        } else {
          dispatch(actionOpenGroup(myProp.indexKey));
        }

  }

  return (
    <View className="h-16 w-full flex-row justify-between items-center">
      {/* CheckBox */}
      <TouchableOpacity
        className=" flex w-[7.4%] aspect-square rounded-full ml-4 bg-white border-2 justify-center items-center"
        style={{
          backgroundColor: `${boxChecked === true ? "#3B82FF" : "#fff"}`,
          borderColor: `${boxChecked=== true ? "#3B82FF" : "#9CA3AF"}`,
        }}
        onPress={() => {checkedOnPress()}}
      >
        {boxChecked == true && (
          <Ionicons name="checkmark-outline" size={24} color="white"></Ionicons>
        )}
      </TouchableOpacity>

      {/* Icon */}
      <View className="flex-row h-full w-[84%]">
        <View className="h-full w-[14%] justify-center items-center">
          <View
            className="h-[64%] aspect-square bg-red-400 rounded-full justify-center items-center"
            style={{ backgroundColor: myProp.colorBox }}
          >
            <Ionicons name={myProp.iconBox} size={24} color="white"></Ionicons>
          </View>
        </View>

        <View
          className={`flex-row h-full w-[82%] ml-2 ${
            myProp.isLast == "true"
              ? " "
              : "border border-transparent border-b-gray-200"
          } justify-between items-center`}
        >
          <View className="h-full w-[72%] justify-center">
            <Text className="text-base font-semibold">{myProp.textBox}</Text>
          </View>

          <TouchableOpacity className="flex-row h-full w-[20%] justify-center items-center">
            <Ionicons name="menu-outline" size={32} color="#9CA3AF"></Ionicons>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
