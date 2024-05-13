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

import { actionSetIndexList, actionSetIndexTask } from "../../feature/TaskAndListOpenKey/taskAndListOpenKey.reducer";

export default function FlaggedTaskDetail(myProp: {
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

  const navigation = useNavigation();

  useEffect(() => {
    for (let i = 0; i < myListArr.length; ++i) {
      if (myListArr[i]["indexKey"] == indexList) {
        setPosList(i);
        break;
      }
    }

    for (
      let i = 0;
      i < myListArr[posList]["taskList"]["taskListArr"].length;
      i++
    ) {
      if (
        myListArr[posList]["taskList"]["taskListArr"][i]["keyTask"] == indexTask
      ) {
        setPosTask(i);
        break;
      }
    }

    setTitleState(
      myListArr[posList]["taskList"]["taskListArr"][posTask].nameTask
    );

    setNoteState(
      myListArr[posList]["taskList"]["taskListArr"][posTask].noteTask
    );

    setListState(myListArr[posList]["textBox"]);
  },[posList, posTask, openDetailTabState]);

  const dispatch = useDispatch();

  const taskOnPress = async() => {
    await dispatch(actionSetIndexList(indexList));
    await dispatch(actionSetIndexTask(indexTask));
    await dispatch(actionOpenTab("settingDetailTaskTab"));
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
              <View className="h-fit w-full">
                <Text className="text-sm text-gray-400">{listState}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="h-full w-[16%] items-center pt-2">
              <Ionicons name="flag" size={22} color={"#F09A37"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
