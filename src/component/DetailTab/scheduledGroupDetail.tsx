import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import Ionicons from "@expo/vector-icons/Ionicons";
  
  import { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { RootState } from "../../../store";
  
  import { useNavigation } from "@react-navigation/native";
  
  export default function ScheduledGroupDetail() {
    const openTabList = useSelector(
      (state: RootState) => state.openTab.openTabList
    );
  
    const taskKeyOpen = useSelector(
      (state: RootState) => state.openTab.openTabList.indexTaskOpened
    );
  
    const dispatch = useDispatch();
    const navigation: any = useNavigation();
  
    const listsOnPress = () => {
      navigation.goBack();
    };
  
    return (
      <>
        <View className="h-full w-full bg-white pt-[28]">
          <View className="flex-row h-16 w-full justify-between">
            <View className="flex-row h-full w-32 justify-between">
              <TouchableOpacity
                className="flex-row h-full w-full"
                onPress={() => {
                  listsOnPress();
                }}
              >
                <View className="h-full w-[40%] justify-center items-center">
                  <Ionicons
                    name="chevron-back"
                    color="#3376F2"
                    size={32}
                  ></Ionicons>
                </View>
  
                <View className="h-full w-[60%] justify-center items-start">
                  <Text className="text-base" style={{ color: "#3376F2" }}>
                    Lists
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
  
            <View className="h-full w-24 justify-center items-end pr-5">
              <TouchableOpacity
                className="h-[60%] aspect-square justify-center items-center rounded-full"
                // onPress = {()=>{detailOnPress()}}
              >
                <Ionicons
                  name="ellipsis-horizontal-circle"
                  color="#3376F2"
                  size={32}
                ></Ionicons>
              </TouchableOpacity>
            </View>
          </View>
  
          <ScrollView className="w-full">
            <View className="h-fit w-full pl-5 pr-5 pb-2 pt-2">
              <Text className="text-4xl font-bold" style={{color:'#EB4D3D'}}>Scheduled</Text>
            </View>
            <View className="h-fit w-full pl-5 pt-2 pb-2">
              <Text className="text-2xl font-bold text-black">
                Today
              </Text>
            </View>
  
            <View className="h-fit w-full pl-5 mt-2">
              <View className="flex-row h-[80] w-full border-b-2 border-gray-200 justify-start">
                <TouchableOpacity className="h-full w-[12%]">
                  <View className="h-[28] aspect-square border-gray-200 border-2 rounded-full"></View>
                </TouchableOpacity>
  
                <View className="flex-row w-[88%] h-full justify-between pl-1 pr-5">
                  <View className="h-full w-[80%]">
                    <View className="h-fit w-full">
                      <Text className="text-base">New Image Reminder</Text>
                    </View>
                    <View className="h-fit w-full">
                      <Text className="text-sm text-gray-400">
                        Note for image reminder
                      </Text>
                    </View>
                    <View className="h-fit w-full">
                      <Text className="text-sm text-gray-400">Today, 18:00</Text>
                    </View>
                  </View>
  
                  <TouchableOpacity className="h-full w-[16%] items-center pt-2">
                    <Ionicons name="flag" size={22} color={"#F09A37"} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View className="h-fit w-full pl-5 mt-4 border-b-2 border-gray-200">
              <View className="flex-row h-[48] w-full justify-start">
                <TouchableOpacity className="h-full w-[12%]">
                  <View className="h-[28] aspect-square bg-gray-200 rounded-full justify-center items-center">
                      <Ionicons name='add' size={24} color='white'/>
                  </View>
                </TouchableOpacity>
  
                <View className="flex-row w-[88%] h-full justify-between pl-1 pr-5">
                  <View className="h-full w-[80%]">
                    <View className="h-fit w-full">
                      <Text className="text-base"></Text>
                    </View>
                    <View className="h-fit w-full">
                      <Text className="text-sm text-gray-400">
                        
                      </Text>
                    </View>
                  </View>
  
                  <TouchableOpacity className="h-full w-[16%] items-center pt-2">
                    {/* <Ionicons name="flag" size={22} color={"#F09A37"} /> */}
                  </TouchableOpacity>
                </View>
              </View>
            </View>   

            <View className="h-fit w-full pl-5 pt-2 pb-2">
              <Text className="text-2xl font-bold text-black">
                Tomorrow
              </Text>
            </View>
  
            <View className="h-fit w-full pl-5 mt-2">
              <View className="flex-row h-[60] w-full border-b-2 border-gray-200 justify-start">
                <TouchableOpacity className="h-full w-[12%]">
                  <View className="h-[28] aspect-square border-gray-200 border-2 rounded-full"></View>
                </TouchableOpacity>
  
                <View className="flex-row w-[88%] h-full justify-between pl-1 pr-5">
                  <View className="h-full w-[80%]">
                    <View className="h-fit w-full">
                      <Text className="text-base">New Image Reminder</Text>
                    </View>
                    <View className="h-fit w-full">
                      <Text className="text-sm text-gray-400">
                        Reminders - 20:00
                      </Text>
                    </View>
                    <View className="h-fit w-full">
                      {/* <Text className="text-sm text-gray-400">Today, 18:00</Text> */}
                    </View>
                  </View>
  
                  <TouchableOpacity className="h-full w-[16%] items-center pt-2">
                    <Ionicons name="flag" size={22} color={"#F09A37"} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View className="h-fit w-full pl-5 mt-4 border-b-2 border-gray-200">
              <View className="flex-row h-[48] w-full justify-start">
                <TouchableOpacity className="h-full w-[12%]">
                  <View className="h-[28] aspect-square bg-gray-200 rounded-full justify-center items-center">
                      <Ionicons name='add' size={24} color='white'/>
                  </View>
                </TouchableOpacity>
  
                <View className="flex-row w-[88%] h-full justify-between pl-1 pr-5">
                  <View className="h-full w-[80%]">
                    <View className="h-fit w-full">
                      <Text className="text-base"></Text>
                    </View>
                    <View className="h-fit w-full">
                      <Text className="text-sm text-gray-400">
                        
                      </Text>
                    </View>
                  </View>
  
                  <TouchableOpacity className="h-full w-[16%] items-center pt-2">
                    {/* <Ionicons name="flag" size={22} color={"#F09A37"} /> */}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
  
            <View className="flex-row h-fit w-full pl-5 pt-2 pb-2">
              <Text className="text-2xl font-bold text-black pr-1">
                Wed
              </Text>

              <Text className="text-2xl font-normal text-gray-400">
                5 Jan 2022
              </Text>
            </View>
  
            <View className="h-fit w-full pl-5 mt-2">
              <View className="flex-row h-[60] w-full border-b-2 border-gray-200 justify-start">
                <TouchableOpacity className="h-full w-[12%]">
                  <View className="h-[28] aspect-square border-gray-200 border-2 rounded-full"></View>
                </TouchableOpacity>
  
                <View className="flex-row w-[88%] h-full justify-between pl-1 pr-5">
                  <View className="h-full w-[80%]">
                    <View className="h-fit w-full">
                      <Text className="text-base">Remember to look back</Text>
                    </View>
                    <View className="h-fit w-full">
                      <Text className="text-sm text-gray-400">
                        Registers
                      </Text>
                    </View>
                    <View className="h-fit w-full">
                      {/* <Text className="text-sm text-gray-400">Today, 18:00</Text> */}
                    </View>
                  </View>
  
                  <TouchableOpacity className="h-full w-[16%] items-center pt-2">
                    {/* <Ionicons name="flag" size={22} color={"#F09A37"} /> */}
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View className="h-fit w-full pl-5 mt-4 border-b-2 border-gray-200">
              <View className="flex-row h-[48] w-full justify-start">
                <TouchableOpacity className="h-full w-[12%]">
                  <View className="h-[28] aspect-square bg-gray-200 rounded-full justify-center items-center">
                      <Ionicons name='add' size={24} color='white'/>
                  </View>
                </TouchableOpacity>
  
                <View className="flex-row w-[88%] h-full justify-between pl-1 pr-5">
                  <View className="h-full w-[80%]">
                    <View className="h-fit w-full">
                      <Text className="text-base"></Text>
                    </View>
                    <View className="h-fit w-full">
                      <Text className="text-sm text-gray-400">
                        
                      </Text>
                    </View>
                  </View>
  
                  <TouchableOpacity className="h-full w-[16%] items-center pt-2">
                    {/* <Ionicons name="flag" size={22} color={"#F09A37"} /> */}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
  
          </ScrollView>
        </View>
      </>
    );
  }
  