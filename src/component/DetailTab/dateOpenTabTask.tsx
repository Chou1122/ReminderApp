import { Switch, Text, View,TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";

import DateTaskBox from "./dateTaskBox";

import { actionSetUseDateTask, actionTurnDateTask } from "../../feature/dateTest/dateTest.reducer";
import { useEffect } from "react";


export default function DateOpenTabTask() {
    const dateStore = useSelector(
        (state: RootState) => state.dateTaskRedux
    );

    // console.log(dateStore);

    useEffect(() => {
      dispatch(actionTurnDateTask(false));
    },[])

    const dispatch = useDispatch();

    const renderSwitchToggle = () => {
        return (
          <Switch
            style={{
              transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
            }}
            value={dateStore.useDateTask}
            onValueChange={() => {
              dispatch(actionSetUseDateTask(!dateStore.useDateTask));
            }}
          />
        );
      };
    
    const dateOnPress = () => {
        dispatch(actionTurnDateTask(!dateStore.openDateTask));
    }

    return (
        <View className="flex-row h-fit flex-wrap w-full bg-white rounded-t-2xl">
            <View className="flex-row h-[60] w-full ">
              <View className="h-[60] w-[20%] justify-center items-center">
                <View
                  className="h-[56%] aspect-square rounded-lg justify-center items-center"
                  style={{ backgroundColor: "#EB4D3D" }}
                >
                  <Ionicons
                    name="calendar-outline"
                    color="white"
                    size={24}
                  ></Ionicons>
                </View>
              </View>

              <View className="flex-row justify-between items-center h-[60] w-[80%] border-b-2 border-gray-200 pr-5">
                <TouchableOpacity onPress={() => {dateOnPress()}}>
                    <View className="flex-row justify-between items-center h-[60] w-full">
                    <View className='h-full w-fit justify-center'>
                      <View className="h-fit w-fit justify-center">
                          <Text className="font-medium text-base">Date</Text>
                      </View>
                      {dateStore.useDateTask && <View className="h-fit w-fit justify-center">
                          <Text className="font-normal text-xs" style={{color:'rgb(96 165 250)'}}>{dateStore.dateTask}</Text>
                      </View> }
                    </View>

                    <View className="h-full w-fit justify-center items-center">
                        {renderSwitchToggle()}
                    </View>
                    </View>
                </TouchableOpacity>
              </View>
            </View>

            <DateTaskBox></DateTaskBox>
          </View>
    )
}