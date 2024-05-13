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
import { useDispatch, useSelector } from "react-redux";

import { actionDeleteList } from "../../feature/allListRedux/myList.reducer";
import { actionHandleFlaggedTask } from "../../feature/flaggedGroupRedux/flaggedGroup.reducer";
import { RootState } from "../../../store";

export default function ListBox2(myProp: {
  colorBox: any;
  iconBox: any;
  textBox: string;
  numberBox: number;
  isLast: string;
  indexKey: number;
}) {
  const dispatch = useDispatch();

  const myArrStore = useSelector(
    (state: RootState) => state.setMyList.myListArr
  );

  const removeOnPress = () => {
    const indexList = myProp.indexKey;

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
    dispatch(actionDeleteList(myProp.indexKey));
  };

  return (
    <View className="h-16 w-full flex-row justify-between">
      <View className="h-full w-[16%] justify-center items-center">
        <TouchableOpacity
          className="h-[44%] aspect-square rounded-full justify-center items-center"
          style={{ backgroundColor: "#EB4D3D" }}
          onPress={() => removeOnPress()}
        >
          <Ionicons name="remove-outline" size={26} color="white"></Ionicons>
        </TouchableOpacity>
      </View>

      <View className="h-full w-[14%] justify-center">
        <View
          className="h-[64%] aspect-square rounded-full justify-center items-center"
          style={{ backgroundColor: myProp.colorBox }}
        >
          <Ionicons name={myProp.iconBox} size={28} color="white"></Ionicons>
        </View>
      </View>

      <View
        className={`flex-row h-full w-[70%] ${
          myProp.isLast == "false" ? "border-b-2 border-gray-200" : ""
        }`}
      >
        <View className="h-full w-[64%] justify-center ">
          <Text className="text-base font-semibold">{myProp.textBox}</Text>
        </View>

        <TouchableOpacity className="h-full w-[16%] justify-center items-center">
          <Ionicons
            name="information-circle-outline"
            size={28}
            color="#508DF7"
          ></Ionicons>
        </TouchableOpacity>

        <View className="h-full w-[20%] justify-center items-center border-l-2 border-gray-200">
          <TouchableOpacity className="h-full w-full justify-center items-center">
            <Ionicons name="menu-outline" size={32} color="#9CA3AF"></Ionicons>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
