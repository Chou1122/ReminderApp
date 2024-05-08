import {
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import Ionicons from "@expo/vector-icons/Ionicons";
  
  import { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { RootState } from "../../../store";

  export default function NewTaskTab() {
  
    const dispatch = useDispatch();

    return (
      <ScrollView className="min-h-screen w-full bg-red-100">
        
      </ScrollView>
    );
  }
  