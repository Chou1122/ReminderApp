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
import BottomTab1 from "../BottomTab/BottomTab1";
import BottomTab3 from "../BottomTab/BottomTab3";

import { actionCheckTask, actionSetFlagTask } from "../../feature/allListRedux/myList.reducer";
import { actionOpenTab, actionSetIndexTaskOpened } from "../../feature/opentab/opentab.reducer";
import { actionHandleFlaggedTask } from "../../feature/flaggedGroupRedux/flaggedGroup.reducer";

export default function DetailTaskTab(myProp: {
  indexList: any;
  indexTask: any;
  myListTask: any;
}) {
  const dispatch = useDispatch();

  const myListTask: any = myProp.myListTask;
  const indexTask = myProp.indexTask;
  const indexList = myProp.indexList;

  let posTask: number = 0;
  for (let j = 0; j < myListTask.length; ++j) {
    if (myListTask[j]["keyTask"] == indexTask) {
      posTask = j;
      break;
    }
  }

  const isFlagged = myListTask[posTask]["isFlagged"];

  const nameTask = myListTask[posTask].nameTask;
  const isChecked = myListTask[posTask].isChecked;
  const isNew = myListTask[posTask].isNew;

  const taskOnPress = () => {

    dispatch(actionSetIndexTaskOpened(indexTask));
    dispatch(actionOpenTab('settingDetailTaskTab'));
    // console.log(1);
  }

  const checkOnPress = () => {
    dispatch(actionCheckTask({ indexList, indexTask }));
  };

  const flagOnPress = () => {
    dispatch(actionSetFlagTask({ indexList, indexTask }));
    dispatch(actionHandleFlaggedTask({indexList: indexList, indexTask: indexTask}));
  }

  return (
    <TouchableOpacity className="flex-row h-16 w-full pl-5"
     onPress={() => taskOnPress()}
    >
      <View className="h-full w-fit justify-center pr-5">
        <TouchableOpacity
          className="h-[50%] aspect-square rounded-full border-2 justify-center items-center"
          style={{
            borderColor:
              isChecked == true ? "rgb(96 165 250)" : "rgb(229 231 235)",
          }}
          onPress={() => {
            checkOnPress();
          }}
        >
          <View
            className="h-[80%] aspect-square rounded-full"
            style={{
              backgroundColor:
                isChecked == true ? "rgb(96 165 250)" : "rgb(255 255 255)",
            }}
          ></View>
        </TouchableOpacity>
      </View>
      <View className="flex-row h-full w-full border-b-2 border-gray-100">
        {isNew == true && (
          <View className="h-full w-4 justify-center items-center">
            <Text className="text-blue-400 text-base">{"!"}</Text>
          </View>
        )}

        <View className="h-full w-fit max-w-[70%] justify-center">
          <Text className="text-base">{nameTask}</Text>
        </View>


      </View>

        <TouchableOpacity className="h-full w-fit justify-center absolute right-5 pl-2 pr-2"
         onPress={() => {flagOnPress()}}
        >
          <View className='h-full w-full justify-center'>
           <Ionicons name={`${isFlagged ? 'flag' : 'flag-outline'}`} size={24} color={'#F09A37'}></Ionicons>
          </View>
        </TouchableOpacity>
    </TouchableOpacity>
  );
}
