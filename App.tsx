import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { store } from "./store";
import { Provider } from "react-redux";

import Home from "./src/component/Home/Home";
import Home2 from "./src/component/Home/Home2";
import DetailListTab from "./src/component/DetailTab/detailListTab";
import AllGroupDetail from "./src/component/DetailTab/allGroupDetail";
import ScheduledGroupDetail from "./src/component/DetailTab/scheduledGroupDetail";
import TodayGroupDetail from "./src/component/DetailTab/todayGroupDetail";
import FlaggedGroupDetail from "./src/component/DetailTab/flaggedGroupDetail";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView className="h-full w-full">
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="Home"
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Home2" component={Home2} />
            <Stack.Screen name="DetailListTab" component={DetailListTab} />
            <Stack.Screen name="AllGroupDetail" component={AllGroupDetail} />
            <Stack.Screen name="ScheduledGroupDetail" component={ScheduledGroupDetail} />
            <Stack.Screen name="TodayGroupDetail" component={TodayGroupDetail}/>
            <Stack.Screen name="FlaggedGroupDetail" component={FlaggedGroupDetail}/>

          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}
