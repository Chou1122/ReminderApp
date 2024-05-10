import { Text, View } from "react-native";
import ScrollPicker from "react-native-wheel-scrollview-picker";

import { hourList, minuteList } from "./allTimeSample";
import { RootState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";

import { actionSetHourTask, actionSetMinuteTask } from "../../feature/timeTest/timeTest.reducer";

import TimeTaskWheel from "./timeTaskWheel";

export default function TimeOpenTabTask() {

  const openTimeTask = useSelector(
    (state: RootState) => state.timeTaskRedux.openTimeTask
  );

  const dispatch = useDispatch();

  return (
    <View
      className={`min-h-[60] h-fit w-full justify-center items-center 
      ${openTimeTask ? "" : "hidden"}
      `}
    >
      <View className="flex-row min-h-[60] h-fit w-full justify-center items-center mt-[8] mb-[8]">
        <View
          className="h-[40] w-[95%] absolute bottom-[80] rounded-xl"
          style={{ backgroundColor: "rgba(0,0,0,0.08)" }}
        ></View>

        <TimeTaskWheel></TimeTaskWheel>
      </View>
    </View>
  );
}
