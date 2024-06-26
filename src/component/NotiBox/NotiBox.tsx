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
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { format } from "date-fns";

import { actionCloseTab } from "../../feature/opentab/opentab.reducer";

export default function NotiBox(mProp: {
  colorBox: any;
  iconBox: any;
  numberBox: any;
  textBox: string;
  keyBox: any;
}) {
  const textBox = mProp.textBox;
  const navigation: any = useNavigation();

  let numberBox = 0;

  if (textBox == 'Flagged') {
    const FlaggedTaskList = useSelector(
      (state: RootState) => state.flaggedGruopRedux
    )
    numberBox = FlaggedTaskList.length;
  } else
  if (textBox == 'Scheduled') {
    const ScheduledTaskList = useSelector(
      (state: RootState) => state.scheduledGruopRedux
    )
    numberBox = ScheduledTaskList.length;
  } else 
  if (textBox == 'Today') {
    const tmpToday = new Date(Date.now());
    const today = format(tmpToday, "dd/MM/yyyy");
    const todayTaskList:Array<any> = [];

    const allListStore = useSelector(
      (state: RootState) => state.setMyList.myListArr
    );
  
    for (let i = 0; i < allListStore.length; i++) {
      for (
        let j = 0;
        j < allListStore[i]["taskList"]["taskListArr"].length;
        j++
      ) {
        if (
          allListStore[i]["taskList"]["taskListArr"][j]["dateTask"] == today &&
          allListStore[i]["taskList"]["taskListArr"][j]["useDate"] == true
        ) {
          todayTaskList.push({
            indexList: allListStore[i]["indexKey"],
            indexTask: allListStore[i]["taskList"]["taskListArr"][j]["keyTask"],
          });
        }
      }
    }

    numberBox = todayTaskList.length;
  } else if(textBox == 'All') {
    numberBox = 0;

    const FlaggedTaskList = useSelector(
      (state: RootState) => state.flaggedGruopRedux
    )
    numberBox += FlaggedTaskList.length;

    const ScheduledTaskList = useSelector(
      (state: RootState) => state.scheduledGruopRedux
    )
    numberBox += ScheduledTaskList.length;

    const tmpToday = new Date(Date.now());
    const today = format(tmpToday, "dd/MM/yyyy");
    const todayTaskList:Array<any> = [];

    const allListStore = useSelector(
      (state: RootState) => state.setMyList.myListArr
    );
  
    for (let i = 0; i < allListStore.length; i++) {
      for (
        let j = 0;
        j < allListStore[i]["taskList"]["taskListArr"].length;
        j++
      ) {
        if (
          allListStore[i]["taskList"]["taskListArr"][j]["dateTask"] == today &&
          allListStore[i]["taskList"]["taskListArr"][j]["useDate"] == true
        ) {
          todayTaskList.push({
            indexList: allListStore[i]["indexKey"],
            indexTask: allListStore[i]["taskList"]["taskListArr"][j]["keyTask"],
          });
        }
      }
    }

    numberBox += todayTaskList.length;
  }

  const dispatch = useDispatch();

  const btnOnPress = () => {
    if (textBox == "All") {
      navigation.navigate("AllGroupDetail");
    }
    if (textBox == "Scheduled") {
      navigation.navigate("ScheduledGroupDetail");
      dispatch(actionCloseTab('settingDetailTaskTab'));
    }
    if (textBox == "Today") {
      navigation.navigate("TodayGroupDetail");
    }
    if (textBox == "Flagged") {
      navigation.navigate("FlaggedGroupDetail");
      dispatch(actionCloseTab('settingDetailTaskTab'));
    }
  };

  const boxChecked = useSelector(
    (state: RootState) => state.checkGroupRedux.checkGroup
  );

  return (
    <>
     { boxChecked[mProp.keyBox] &&
       (
        <TouchableOpacity
        className="flex-row h-28  w-[48%] bg-white rounded-xl items-center justify-around mb-4"
        onPress={() => {
          btnOnPress();
        }}
      >
        <View className="h-[80%] w-[68%] justify-between">
          <View
            className={`h-11 aspect-square rounded-full ml-1 justify-center items-center`}
            style={{ backgroundColor: mProp.colorBox }}
          >
            <Ionicons name={mProp.iconBox} size={24} color="white"></Ionicons>
          </View>

          <View className="h-[44%] w-[90%] ml-1">
            <Text className="text-lg text-gray-400 font-semibold">
              {mProp.textBox}
            </Text>
          </View>
        </View>

        <View className="flex h-[80%] w-[24%] items-end pr-2">
          <Text className="flex text-black font-bold text-2xl justify-self-start leading-none">
            {numberBox}
          </Text>
        </View>
      </TouchableOpacity>
       )
     }
    </>
  );
}
