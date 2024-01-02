import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState} from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import {Set, getSet} from '@/data/api';
import { defaultStyleSheet } from '@/constants/Styles';

const Page = () => {
    const { id } = useLocalSearchParams<{id: string}>();
    const [set, setSet] = useState<Set>();
    const router = useRouter();

    useEffect(() => {
        if(!id) return;

        const loadSet = async () => {
            const data = await getSet(id!);
            console.log("~ file: [id].tsx:16 ~ loadSet ~ data:", data);
            setSet(data);
        }
        loadSet();
    },[id]);

  return (
    <View style={defaultStyleSheet.container}>
    {set && <View style={{ alignItems: 'flex-start', padding: 16, gap:10, flex:1 }}>
    <Text style={styles.header}>{set.title}</Text>
    <Text  style={{color: '#666'}}>{set.cards} Cards</Text>
    </View>}
        
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: 'bold',
    }
})

export default Page