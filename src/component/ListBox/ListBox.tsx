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

export default function ListBox(myProp: {
  colorBox: any;
  iconBox: any;
  textBox: string;
  numberBox: number;
  isLast: string;
  indexKey: number;
}) {
  const navigation: any = useNavigation();

  const detailOnPress = () => {
    navigation.navigate("DetailListTab",{
        indexList: myProp.indexKey,
        nameList: myProp.textBox,
    });
  };

  return (
    <View className="h-16 w-full flex-row justify-between">
      {/* Icon */}
      <View className="h-full w-[18%] justify-center items-center">
        <View
          className="h-[72%] aspect-square bg-red-400 rounded-full justify-center items-center"
          style={{ backgroundColor: myProp.colorBox }}
        >
          <Ionicons name={myProp.iconBox} size={28} color="white"></Ionicons>
        </View>
      </View>

      <View
        className={`flex-row h-full w-[82%] ${
          myProp.isLast == "true"
            ? " "
            : "border border-transparent border-b-gray-200"
        } justify-between items-center`}
      >
        <View className="h-full w-[72%] justify-center">
          <Text className="text-base font-semibold">{myProp.textBox}</Text>
        </View>

        <TouchableOpacity
          className="flex-row h-full w-[24%] justify-center items-center"
          onPress={() => {
            detailOnPress();
          }}
        >
          <View className="h-full w-[50%] justify-center items-center">
            <Text className="text-base text-gray-400">{myProp.numberBox}</Text>
          </View>

          <View className="h-[90%] w-[50%] justify-center items-start pt-1">
            <Ionicons
              name="chevron-forward-outline"
              size={18}
              color="#9CA3AF"
            ></Ionicons>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
