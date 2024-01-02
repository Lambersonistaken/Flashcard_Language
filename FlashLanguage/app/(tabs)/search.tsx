
import { View, Text, StyleSheet, ListRenderItem, TouchableOpacity } from 'react-native'
import React, {useEffect, useState } from 'react'
import { Set, getSets } from '@/data/api'
import { FlatList } from 'react-native-gesture-handler';
import { defaultStyleSheet } from '@/constants/Styles';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

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
      
        <Link href={`/(modals)/set/${item.id}`} asChild>
        <TouchableOpacity style={styles.setRow}>
          <View style={{flexDirection: 'row'}}>
          <View style={{flex:1}}>
            <Text>{item.title}</Text>
            <Text>{item.cards} Cards</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={24} color={'#ccc'} />
          </View>
          </TouchableOpacity>
        </Link>
      
    )
  }
  return (
    <View style={defaultStyleSheet.container}>
     <FlatList data={sets} renderItem={renderSetRow} />
    </View>
  )
}

const styles = StyleSheet.create({
setRow: {
}
})

export default Page