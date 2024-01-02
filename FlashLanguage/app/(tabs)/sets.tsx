import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import { Set, getSets } from '@/data/api'

const Page = () => {
  const [sets, setSets] = useState<Set[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    loadSets();
  }, []);

  const loadSets = async () => {
    const data = await getSets();
        console.log("~ file: sets.tsx:11 ~ loadSets ~ data:", data)
        setSets(data);
  }
  return (
    <View>
      <Text>user sets</Text>
    </View>
  )
}

export default Page