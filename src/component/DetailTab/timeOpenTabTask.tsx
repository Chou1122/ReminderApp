import { Text, View } from "react-native";
import ScrollPicker from "react-native-wheel-scrollview-picker";

import { hourList, minuteList } from "./allTimeSample";
import { RootState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";

import { actionSetHourTask, actionSetMinuteTask } from "../../feature/timeTest/timeTest.reducer";

export default function TimeOpenTabTask() {

  const timeStore = useSelector(
    (state: RootState) => state.timeTaskRedux
  );

  const dispatch = useDispatch();

  return (
    <View
      className={`min-h-[60] h-fit w-full justify-center items-center ${
        timeStore.openTimeTask ? "" : "hidden"
      }`}
    >
      <View className="flex-row min-h-[60] h-fit w-full justify-center items-center mt-[8] mb-[8]">
        <View
          className="h-[40] w-[95%] absolute bottom-[80] rounded-xl"
          style={{ backgroundColor: "rgba(0,0,0,0.08)" }}
        ></View>

        <View className="flex-row min-h-[60] h-fit w-[50%] justify-center items-center">
          <ScrollPicker
            dataSource={hourList}
            selectedIndex={timeStore.hourTimeTask}
            renderItem={(data, index) => {
              // console.log(data);
              return (
                <View className="w-[75%] justify-center items-end">
                  <Text>{data}</Text>
                </View>
              );
            }}
            onValueChange={(data, selectedIndex) => {
              dispatch(actionSetHourTask(selectedIndex));
            }}
            wrapperHeight={200}
            wrapperBackground="rgba(0,0,0,0)"
            itemHeight={40}
            highlightColor="rgba(0,0,0,0)"
            // highlightBorderWidth={0}
          />
        </View>

        <View className="flex-row min-h-[60] h-fit w-[50%] justify-center items-center">
          <ScrollPicker
            dataSource={minuteList}
            selectedIndex={timeStore.minuteTimeTask}
            renderItem={(data, index) => {
              return (
                <View className="w-[75%] justify-center items-start">
                  <Text>{data}</Text>
                </View>
              );
            }}
            onValueChange={(data, selectedIndex) => {
                dispatch(actionSetMinuteTask(selectedIndex));
            }}
            wrapperHeight={200}
            wrapperBackground="rgba(0,0,0,0)"
            itemHeight={40}
            highlightColor="rgba(0,0,0,0)"
            // highlightBorderWidth={0}
          />
        </View>
      </View>
    </View>
  );
}
