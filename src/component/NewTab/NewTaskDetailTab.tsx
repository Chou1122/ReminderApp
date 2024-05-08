import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";

import { actionCloseTab, actionOpenTab } from "../../feature/opentab/opentab.reducer";

export default function NewTaskDetailTab(myProp: {
  navigation: any;
  indexKey: number;
}) {
  const myListArr = useSelector(
    (state: RootState) => state.setMyList.myListArr
  );

  const indexList: number = myProp.indexKey;
  const [posList, setPosList] = useState<number>(0);

  const [dateState, setDateState] = useState<boolean>();

  useEffect(() => {
    for (let i = 0; i < myListArr.length; ++i) {
      if (myListArr[i]["indexKey"] == indexList) {
        setPosList(i);
        break;
      }
    }
  });

  const dispatch = useDispatch();

  const navigation = myProp.navigation;

  const backOnPress = () => {

    dispatch(actionCloseTab("newTaskDetailTab"));

    dispatch(actionOpenTab("newTaskTab"));
  }

  const toggleDate = () => {
    setDateState(state => !state);
  }

  return (
    <ScrollView className="min-h-screen w-full">
      <View className="w-full h-[64]"></View>

      <View className="min-h-[1000] h-fit w-full bg-gray-200 rounded-t-2xl">
        <View className="flex-row w-full h-[60] justify-between">
          <View className='flex-row h-full w-[56%] justify-between items-center pl-1'>
            <TouchableOpacity className='flex-row h-full w-fit items-center' 
             onPress={() => {backOnPress()}}   
            >
                <Ionicons name='chevron-back' size={32} color={'rgb(96 165 250)'}></Ionicons>
                <Text className='text-sm' style={{color:'rgb(96 165 250)'}}>
                    New Reminder
                </Text>
            </TouchableOpacity>

            <View className='h-full w-fit items-center justify-center'>
                <Text className='text-sm font-semibold text-black'>
                    Details
                </Text>
            </View>
          </View>

          <View className='h-full w-[40%] items-end pr-5'>
            <TouchableOpacity className='h-full w-fit justify-center pl-2'>
                <Text className='font-semibold text-sm'
                 style={{color:'rgb(156 163 175)'}}
                >
                    Add
                </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="w-full h-[24]"></View>

        <View className="h-[120] w-full pl-5 pr-5">
           <View className='h-full w-full bg-white rounded-2xl'>
                <View className='flex-row h-[50%] w-full '>
                    <View className='h-full w-[20%] justify-center items-center'>
                        <View className='h-[56%] aspect-square rounded-lg justify-center items-center' style={{backgroundColor:'#EB4D3D'}}>
                            <Ionicons name='calendar-outline' color='white' size={24}></Ionicons>
                        </View>
                    </View>

                    <View className='flex-row justify-between items-center h-full w-[80%] border-b-2 border-gray-200 pr-5'>
                        <View className='h-full w-fit justify-center'>
                            <Text className='font-medium text-base'>
                                Date
                            </Text>
                        </View>

                        <View className='h-full w-fit justify-center items-center'>
                            <Switch 
                             style={{
                                // backgroundColor: 'blue',
                                transform: [{ scaleX: 1.6 }, { scaleY: 1.6 }],
                                // height: 40,
                             }}
                             value={dateState}
                             onValueChange={() => {toggleDate()}}
                            />                     
                        </View>
                    </View>
                </View>

                <View className='flex-row h-[50%] w-full '>
    
                </View>
           </View>
        </View>

      </View>
    </ScrollView>
  );
}
