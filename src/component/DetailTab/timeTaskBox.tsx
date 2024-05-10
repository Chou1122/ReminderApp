import { Switch, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import TimeOpenTabTask from "./timeOpenTabTask";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { actionTurnTimeTask, actionSetUseTimeTask } from "../../feature/timeTest/timeTest.reducer";
import { hourList, minuteList } from "./allTimeSample";

export default function TimeTaskBox() {

    const timeStore = useSelector(
        (state: RootState) => state.timeTaskRedux
      );

    const dispatch = useDispatch();

    const timeOnPress = () => {
        dispatch(actionTurnTimeTask(!timeStore.openTimeTask));
    }

    const renderSwitchToggle = () => {
        return (
          <Switch
            style={{
              transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
            }}
            value={timeStore.useTimeTask}
            onValueChange={() => {
              dispatch(actionSetUseTimeTask(!timeStore.useTimeTask));
            }}
          />
        );
      };

    return (
        <View className="flex-row flex-wrap h-fit w-full bg-white rounded-b-2xl">
            <View className="flex-row h-[60] w-full">
              <View className="h-[60] w-[20%] justify-center items-center">
                <View
                  className="h-[56%] aspect-square rounded-lg justify-center items-center"
                  style={{ backgroundColor: "#3478F6" }}
                >
                  <Ionicons name="time" color="white" size={24}></Ionicons>
                </View>
              </View>

              <View
                className={`flex-row justify-between items-center h-[60] w-[80%] ${
                  timeStore.openTimeTask ? "border-b-2 border-gray-200" : ""
                } pr-5`}
              >
                <TouchableOpacity className="flex-row justify-between items-center h-[60] w-full"
                 onPress={() => {timeOnPress()}} 
                >
                  <View className="h-full w-fit justify-center">
                    <View className='h-fit w-fit justify-center items-center'>

                    <Text className="font-medium text-base">Time</Text>
                    </View>
                    {timeStore.useTimeTask && <View className='h-fit w-fit justify-center items-center'>
                        <Text className="font-normal text-xs text-blue-400">
                            {`${hourList[timeStore.hourTimeTask]} : ${minuteList[timeStore.minuteTimeTask]}`}
                        </Text>
                    </View>}
                  </View>

                  <View className="h-full w-fit justify-center items-center">
                    {renderSwitchToggle()}
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <TimeOpenTabTask></TimeOpenTabTask>
            
          </View>
   
    )
}