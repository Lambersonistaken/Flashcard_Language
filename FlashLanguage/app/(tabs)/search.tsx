import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Set, getSets} from "@/data/api"

const Page = () => {

  const [sets, setSets] = useState<Set[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);


  useEffect(()=> {
    loadSets();
  }, [])


  const loadSets = async () => {
    try {
      const data = await getSets();
      console.log("data : ", data);
      setSets(data);
    } catch (error) {
      console.error("Error loading sets:", error);
  
      // Check for specific error properties or types if needed
  
      // Handle the error or re-throw it based on your requirements
    }
  };
  
  return (
    <View>
      <Text>search page</Text>
    </View>
  )
}

export default Page