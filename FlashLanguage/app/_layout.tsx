import { View, Text, Touchable } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
import Colors from '@/constants/Colors'
import 'react-native-url-polyfill/auto';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';


const Layout = () => {
  const router = useRouter()
  return (
    <Stack 
    screenOptions={{
        headerStyle: {
            backgroundColor: Colors.primary,
        },
        headerTintColor:"#fff",
    }}>
        <Stack.Screen name="(tabs)" options={{headerShown:false}} />

        
        <Stack.Screen name="(modals)/set/[id]" options={{
          presentation: 'modal',
          title: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close-outline" size={30} color={"#fff"} style={{marginLeft: 5}}/>
              </TouchableOpacity>
          ),
        }}/>
        <Stack.Screen name="(modals)/set/create" options={{
          presentation: 'modal',
          title: 'Create Card Set',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close-outline" size={30} color={"#fff"} style={{marginRight:10}}/>
              </TouchableOpacity>
          ),
        }}/>
        <Stack.Screen name="(modals)/(cards)/[id]" options={{
          presentation: 'modal',
          title: 'Update Set Cards',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close-outline" size={30} color={"#fff"} style={{marginRight:10}}/>
              </TouchableOpacity>
          ),
        }}/>
        </Stack>
  )
}

export default Layout