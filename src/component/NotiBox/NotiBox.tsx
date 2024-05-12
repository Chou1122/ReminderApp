import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function NotiBox(mProp: {colorBox: any, iconBox: any, numberBox: any, textBox: string,}) {
    const textBox = mProp.textBox;
    const navigation: any = useNavigation();
    
    const btnOnPress = () => {
      if (textBox == 'All') {
        navigation.navigate('AllGroupDetail');
      }
      if (textBox == 'Scheduled') {
        navigation.navigate('ScheduledGroupDetail');
      }
      if (textBox == 'Today') {
        navigation.navigate('TodayGroupDetail');
      }
      if (textBox == 'Flagged') {
        navigation.navigate('FlaggedGroupDetail');
      }
    }

    return (
        <TouchableOpacity className='flex-row h-28  w-[48%] bg-white rounded-xl items-center justify-around mb-4'
         onPress={() => {btnOnPress()}}
        >
          <View className='h-[80%] w-[68%] justify-between'>
            <View className={`h-11 aspect-square rounded-full ml-1 justify-center items-center`} 
             style={{ backgroundColor: mProp.colorBox }}
            >
              <Ionicons name={mProp.iconBox} size={24} color="white"></Ionicons>
            </View>

            <View className='h-[44%] w-[90%] ml-1'>
              <Text className='text-lg text-gray-400 font-semibold'>
                {mProp.textBox}
              </Text>
            </View>
          </View>

          <View className='flex h-[80%] w-[24%] items-end pr-2'>
            <Text className='flex text-black font-bold text-2xl justify-self-start leading-none'>
              {mProp.numberBox}
            </Text>
          </View>
        </TouchableOpacity> 
    )
}