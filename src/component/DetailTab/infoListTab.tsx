import {
  TouchableOpacity,
  View,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import Ionicons from "@expo/vector-icons/Ionicons";

import { actionSetOpenTabInfoList } from "../../feature/openInfoList/openInfoList.reducer";
import { actionDeleteList } from "../../feature/allListRedux/myList.reducer";
import { actionHandleFlaggedTask } from "../../feature/flaggedGroupRedux/flaggedGroup.reducer";

export default function InfoListTab(myProp: { navigation: any, indexList: any }) {
  const openInfoListTab = useSelector(
    (state: RootState) => state.openInfoListRedux.openTab
  );
  const dispatch = useDispatch();

  const indexList = myProp.indexList;
  const navigation = myProp.navigation;

  const exitOnPress = () => {
    dispatch(actionSetOpenTabInfoList(false));
  };

  const myArrStore = useSelector(
    (state: RootState) => state.setMyList.myListArr
  );

  const deleteOnPress = () => {

    for (let i = 0; i < myArrStore.length; i++) {
      if (indexList == myArrStore[i]['indexKey']) {

        for (let j = 0; j < myArrStore[i]['taskList']['taskListArr'].length; j++) {
          if (myArrStore[i]['taskList']['taskListArr'][j]['isFlagged'] == true) {
            dispatch(actionHandleFlaggedTask({indexList: indexList, indexTask:myArrStore[i]['taskList']['taskListArr'][j]['keyTask']}))
          }
        }
        break;
      }
    }

    dispatch(actionDeleteList(indexList));
    dispatch(actionSetOpenTabInfoList(false));
    navigation.goBack();
  }

  return (
    <>
      {openInfoListTab && (
        <View
          className="flex-row h-full w-full absolute bottom-[0] justify-end"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
   
          <TouchableOpacity
            className="items-end h-full w-full"
            activeOpacity={1}
            onPress={() => {
              exitOnPress();
            }}
          >
            <View className="w-[70%] max-w-[240] h-fit rounded-2xl bg-white abolute top-20 right-2">
              <View className="h-[50] w-full pl-6 pr-6 border-b-2 border-gray-200">
                <TouchableOpacity className="flex-row h-full w-full justify-between">
                  <View className="h-full w-fit justify-center items-center">
                    <Text className="text-base">Show List Info</Text>
                  </View>

                  <View className="h-full w-fit justify-center items-center">
                    <Ionicons name="pencil" size={20}></Ionicons>
                  </View>
                </TouchableOpacity>
              </View>

              <View className="h-[50] w-full pl-6 pr-6 border-b-2 border-gray-200">
                <TouchableOpacity className="flex-row h-full w-full justify-between">
                  <View className="h-full w-fit justify-center items-center">
                    <Text className="text-base">Share List</Text>
                  </View>

                  <View className="h-full w-fit justify-center items-center">
                    <Ionicons name="share-social" size={20}></Ionicons>
                  </View>
                </TouchableOpacity>
              </View>

              <View className="h-[50] w-full pl-6 pr-6 border-b-2 border-gray-200">
                <TouchableOpacity className="flex-row h-full w-full justify-between">
                  <View className="h-full w-fit justify-center items-center">
                    <Text className="text-base">Select Reminders</Text>
                  </View>

                  <View className="h-full w-fit justify-center items-center">
                    <Ionicons
                      name="checkmark-circle-outline"
                      size={20}
                    ></Ionicons>
                  </View>
                </TouchableOpacity>
              </View>

              <View className="h-[60] w-full pl-6 pr-6 border-b-2 border-gray-200 ">
                <TouchableOpacity className="flex-row h-full w-full justify-between items-center">
                  <View className="h-[fit] w-fit justify-between">
                    <View className="h-fit w-fit">
                      <Text className="text-base">Sort By</Text>
                    </View>
                    <View className="h-fit w-fit">
                      <Text className="text-xs text-gray-400">Manual</Text>
                    </View>
                  </View>

                  <View className="h-full w-fit justify-center items-center">
                    <Ionicons name="swap-vertical" size={20}></Ionicons>
                  </View>
                </TouchableOpacity>
              </View>

              <View className="h-[50] w-full pl-6 pr-6 border-b-2 border-gray-200">
                <TouchableOpacity className="flex-row h-full w-full justify-between">
                  <View className="h-full w-fit justify-center items-center">
                    <Text className="text-base">Hide Completed</Text>
                  </View>

                  <View className="h-full w-fit justify-center items-center">
                    <Ionicons name="eye-off" size={20}></Ionicons>
                  </View>
                </TouchableOpacity>
              </View>

              <View className="h-[50] w-full pl-6 pr-6 border-b-2 border-gray-200">
                <TouchableOpacity className="flex-row h-full w-full justify-between">
                  <View className="h-full w-fit justify-center items-center">
                    <Text className="text-base">Print</Text>
                  </View>

                  <View className="h-full w-fit justify-center items-center">
                    <Ionicons name="print" size={20}></Ionicons>
                  </View>
                </TouchableOpacity>
              </View>

              <View className="h-[50] w-full pl-6 pr-6">
                <TouchableOpacity className="flex-row h-full w-full justify-between"
                 onPress = {() => {deleteOnPress()}}
                >
                  <View className="h-full w-fit justify-center items-center">
                    <Text className="text-base" style={{ color: "#EB5748" }}>
                      Delete List
                    </Text>
                  </View>

                  <View className="h-full w-fit justify-center items-center">
                    <Ionicons name="trash" size={20} color="#EB5748"></Ionicons>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}
