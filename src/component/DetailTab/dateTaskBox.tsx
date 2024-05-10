import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { format } from "date-fns";

import CalendarPicker from "react-native-calendar-picker";
import { actionSetDateTask } from "../../feature/dateTest/dateTest.reducer";

export default function DateTaskBox() {
  const dateStore = useSelector((state: RootState) => state.dateTaskRedux);
  const dispatch = useDispatch();

  const onDateChange = (date: any) => {
    const newDate = format(date,'dd/MM/yyyy');

    dispatch(actionSetDateTask(newDate));
  };

  return (
    <>
      {dateStore.openDateTask && (
        <View className="min-h-[60] h-fit w-full bg-white pl-5">
          <View className="min-h-[60] h-fit w-full border-b-2 border-gray-200 justify-center items-center pt-[5]">
            <CalendarPicker
              width={320}
              height={320}
              selectedDayColor={"rgb(96 165 250)"}
              selectedDayTextColor={"white"}
              nextTitleStyle={{ color: "rgb(96 165 250)", fontWeight: "500" }}
              previousTitleStyle={{
                color: "rgb(96 165 250)",
                fontWeight: "500",
              }}
              monthTitleStyle={{ fontWeight: "600" }}
              yearTitleStyle={{ fontWeight: "600" }}
              textStyle={{ fontWeight: "600" }}
              onDateChange={onDateChange}
            />
          </View>
        </View>
      )}
    </>
  );
}
