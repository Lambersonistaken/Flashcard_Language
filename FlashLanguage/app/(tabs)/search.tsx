
import { View, Text, StyleSheet, ListRenderItem } from 'react-native'
import React, {useEffect, useState} from 'react'
import { Set, getSets } from '@/data/api'
import { FlatList } from 'react-native-gesture-handler';
import { defaultStyleSheet } from '@/constants/Styles';

const Page = () => {
  const [sets, setSets] = useState<Set[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    loadSets();
  }, []);

  const loadSets = async () => {
    const data = await getSets();
        console.log("~ file: sets.tsx:11 ~ loadSets ~ data:", data);
        setSets(data);

        // Check for specific error properties or types if needed
  
      // Handle the error or re-throw it based on your requirements
  }

  const renderSetRow: ListRenderItem<Set> = ({ item }) => {
    return(
      <View>
        <Text>Test</Text>
      </View>
    )
  }
  return (
    <View style={defaultStyleSheet.container}>
     <FlatList data={sets} renderItem={renderSetRow} />
    </View>
  )
}

const styles = StyleSheet.create({

})

export default Page