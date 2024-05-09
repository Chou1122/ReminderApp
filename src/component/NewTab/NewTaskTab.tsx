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

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";

import { actionCloseTab, actionOpenTab } from "../../feature/opentab/opentab.reducer";

export default function NewTaskTab(myProp: { navigation: any, indexKey: number }) {
  const myListArr = useSelector(
    (state: RootState) => state.setMyList.myListArr
  );
  
  const indexList:number = myProp.indexKey;
  const [posList, setPosList] = useState<number>(0);

  useEffect(() => {
    for (let i = 0; i < myListArr.length; ++i) {
        if (myListArr[i]['indexKey'] == indexList) {
            setPosList(i);
            break;
        }
    }
  })

  const dispatch = useDispatch();

  const navigation = myProp.navigation;

  const cancelOnPress = () => {
    dispatch(actionCloseTab("newTaskTab"));
  };

  const detailOnPress = () => {

    dispatch(actionCloseTab("newTaskTab"));
    dispatch(actionCloseTab('priorityTaskTab'));
    
    dispatch(actionOpenTab("newTaskDetailTab"));
  }

  return (
    <ScrollView className="min-h-screen w-full" showsVerticalScrollIndicator={false}>
      <View className="w-full h-[64]"></View>

      <View className="min-h-[1000] h-fit w-full bg-gray-200 rounded-t-2xl">
        <View className="flex-row w-full h-[60] pl-5 pr-5 justify-between">
          <View className="w-[24%] h-full">
            <TouchableOpacity
              className="h-full w-[70%]  justify-center"
              onPress={() => {
                cancelOnPress();
              }}
            >
              <Text className="text-blue-400 font-normal text-base">
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
          <View className="w-[44%] h-full justify-center items-center">
            <Text className="text-black font-semibold text-base">
              New Reminder
            </Text>
          </View>
          <View className="w-[20%] h-full items-end">
            <TouchableOpacity className="h-full w-[70%] justify-center items-end">
              <Text className="text-gray-400 font-semibold text-base">Add</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="w-full h-[24]"></View>

        <View className="h-[140] w-full justify-center items-center pl-5 pr-5 mb-[16]">
          <View className="h-[120] w-full bg-white rounded-2xl">
            <View className="h-[50%] w-full items-end">
              <View className="h-full w-[95%] border-b-2 border-gray-200">
                <TextInput
                  className="h-full w-[90%] text-base"
                  placeholder="Title"
                ></TextInput>
              </View>
            </View>

            <View className="h-[50%] w-full items-end">
              <View className="h-full w-[95%]">
                <TextInput
                  className="h-full w-[90%] text-base"
                  placeholder="Notes"
                ></TextInput>
              </View>
            </View>
          </View>
        </View>

        <View className="h-[60] w-full pr-5 pl-5 mb-[16]">
          <View className="h-full w-full">
            <TouchableOpacity className="flex-row justify-between items-center h-full w-full rounded-2xl bg-white pr-5 pl-5" 
             onPress={() => {detailOnPress()}}
            >
              <View className="h-full w-fit justify-center">
                <Text className="text-black font-semibold">Details</Text>
              </View>

              <View className="h-full w-fit justify-center items-end">
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={"rgb(209 213 219)"}
                ></Ionicons>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View className="h-[60] w-full pr-5 pl-5 mb-[16]">
          <View className="h-full w-full">
            <TouchableOpacity className="flex-row justify-between items-center h-full w-full rounded-2xl bg-white pr-5 pl-5">
              <View className="h-full w-fit justify-center">
                <Text className="text-black font-semibold">List</Text>
              </View>

              <View className="flex-row h-full w-fit justify-center items-end">
                <View className="h-full w-fit justify-center">
                  <Ionicons
                    name="ellipse"
                    color="rgb(96 165 250)"
                    size={10}
                  ></Ionicons>
                </View>
                <View className="h-full w-fit justify-center items-center pr-1 pl-2">
                  <Text className="text-xs font-medium text-gray-400">
                    {myListArr[posList]['textBox']}
                  </Text>
                </View>
                <View className="h-full w-fit justify-center">
                  <Ionicons
                    name="chevron-forward"
                    size={20}
                    color={"rgb(209 213 219)"}
                  ></Ionicons>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
