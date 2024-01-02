import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import { getMySets } from '@/data/api';

const Page = () => {
  useEffect(() => {
    loadSets();
  }, []);

  const loadSets = async () => {
    const data = await getMySets();
        console.log("~ file: sets.tsx:14 ~ loadSets ~ data:", data);
        //setSets(data);

        // Check for specific error properties or types if needed
  
      // Handle the error or re-throw it based on your requirements
  }

  return (
    <View>
      <Text>My sets</Text>
    </View>
  )
}

export default Page