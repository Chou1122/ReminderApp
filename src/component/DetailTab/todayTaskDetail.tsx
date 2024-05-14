import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import SettingDetailTaskTab from "./settingDetailTaskTab";
import {
  actionOpenTab,
  actionSetIndexListOpened,
  actionSetIndexTaskOpened,
} from "../../feature/opentab/opentab.reducer";

import {
  actionSetIndexList,
  actionSetIndexTask,
} from "../../feature/TaskAndListOpenKey/taskAndListOpenKey.reducer";
import { actionSetFlagTask } from "../../feature/allListRedux/myList.reducer";
import { actionHandleFlaggedTask } from "../../feature/flaggedGroupRedux/flaggedGroup.reducer";

import { minuteList, hourList } from "./allTimeSample";

export default function TodayTaskDetail(myProp: {
  indexList: any;
  indexTask: any;
}) {
  const indexList = myProp.indexList;
  const indexTask = myProp.indexTask;

  const myListArr = useSelector(
    (state: RootState) => state.setMyList.myListArr
  );

  const openDetailTabState = useSelector(
    (state: RootState) => state.openTab.openTabList.settingDetailTaskTab
  );

  const [posList, setPosList] = useState<number>(0);
  const [posTask, setPosTask] = useState<number>(0);
  const [titleState, setTitleState] = useState<string>("");
  const [noteState, setNoteState] = useState<string>("");
  const [listState, setListState] = useState<string>("");
  const [dateState, setDateState] = useState<string>("");
  const [useDateState, setUseDateState] = useState<string>("");
  const [flagState, setFlagState] = useState<boolean>(false);
  const [flagBtnState, setFlagBtnState] = useState<boolean>(true);
  const [useTimeState, setUseTimeState] = useState<boolean>(true);
  const [hourTimeState, setHourTimeState] = useState<number>(0);
  const [minuteTimeState, setMinuteTimeState] = useState<number>(0);

  const navigation = useNavigation();

  useEffect(() => {
    let tmpIndexList: any = 0,
      tmpIndexTask: any = 0;

    for (let i = 0; i < myListArr.length; ++i) {
      if (myListArr[i]["indexKey"] == indexList) {
        tmpIndexList = i;
        break;
      }
    }

    for (
      let i = 0;
      i < myListArr[tmpIndexList]["taskList"]["taskListArr"].length;
      i++
    ) {
      if (
        myListArr[tmpIndexList]["taskList"]["taskListArr"][i]["keyTask"] ==
        indexTask
      ) {
        tmpIndexTask = i;
        break;
      }
    }

    setTitleState(
      myListArr[tmpIndexList]["taskList"]["taskListArr"][tmpIndexTask].nameTask
    );

    setNoteState(
      myListArr[tmpIndexList]["taskList"]["taskListArr"][tmpIndexTask].noteTask
    );

    setListState(myListArr[tmpIndexList]["textBox"]);
    setDateState(
      myListArr[tmpIndexList]["taskList"]["taskListArr"][tmpIndexTask].dateTask
    );
    setUseDateState(
      myListArr[tmpIndexList]["taskList"]["taskListArr"][tmpIndexTask].useDate
    );
    setFlagState(
      myListArr[tmpIndexList]["taskList"]["taskListArr"][tmpIndexTask].isFlagged
    );
    setUseTimeState(
      myListArr[tmpIndexList]["taskList"]["taskListArr"][tmpIndexTask].useTime
    );
    setHourTimeState(
      myListArr[tmpIndexList]["taskList"]["taskListArr"][tmpIndexTask].hourTask
    );
    setMinuteTimeState(
      myListArr[tmpIndexList]["taskList"]["taskListArr"][tmpIndexTask]
        .minuteTask
    );
  }, [openDetailTabState, flagBtnState]);

  const dispatch = useDispatch();

  const taskOnPress = async () => {
    await dispatch(actionSetIndexList(indexList));
    await dispatch(actionSetIndexTask(indexTask));
    await dispatch(actionOpenTab("settingDetailTaskTab"));
  };

  const flagOnPress = () => {
    setFlagBtnState(!flagBtnState);
    dispatch(actionSetFlagTask({ indexList: indexList, indexTask: indexTask }));
    dispatch(
      actionHandleFlaggedTask({ indexList: indexList, indexTask: indexTask })
    );
  };

  return (
    <>
      <View className="h-fit w-full pl-5 mt-2">
        <View className="flex-row h-fit w-full border-b-2 border-gray-200 justify-start pb-2">
          <TouchableOpacity className="h-full w-[12%]">
            <View className="h-[28] aspect-square border-gray-200 border-2 rounded-full"></View>
          </TouchableOpacity>

          <View className="flex-row w-[88%] h-full justify-between pl-1 pr-5 ">
            <TouchableOpacity
              className="h-full w-[80%]"
              onPress={() => {
                taskOnPress();
              }}
            >
              <View className="h-fit w-full">
                <Text className="text-base">{titleState}</Text>
              </View>
              <View className="h-fit w-full">
                {noteState != "" && (
                  <Text className="text-sm text-gray-400">{noteState}</Text>
                )}
              </View>
              <View className="flex-row h-fit w-full">
                {useDateState && (
                  <Text className="text-sm text-gray-400">
                    {dateState + " "}
                  </Text>
                )}
                {useTimeState && useDateState && (
                  <Text className="text-sm text-gray-400">{"- "}</Text>
                )}
                {useTimeState && (
                  <Text className="text-sm text-gray-400">
                    {hourList[hourTimeState] +
                      ":" +
                      minuteList[minuteTimeState]}
                  </Text>
                )}
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              className="h-full w-[16%] items-center pt-2"
              onPress={() => {
                flagOnPress();
              }}
            >
              <Ionicons
                name={`${flagState ? "flag" : "flag-outline"}`}
                size={22}
                color={"#F09A37"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
