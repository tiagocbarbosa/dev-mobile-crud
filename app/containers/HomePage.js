import React from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native'
import MediaCard from '../components/cards/MediaCard.js'

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Ford Fiesta',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus posuere lacus, sit amet convallis metus tempus quis. Nunc a mi porttitor.',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Volkswagem Up',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus posuere lacus, sit amet convallis metus tempus quis. Nunc a mi porttitor.',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Chevrolet Onix',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus posuere lacus, sit amet convallis metus tempus quis. Nunc a mi porttitor.',
    },
]

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
)

export default function HomePage() {
    //   const renderItem = ({ item }) => (
    //     <Item title={item.title} />
    //   )
    const renderItem = ({ item }) => (
        <MediaCard title={item.title} description={item.description} />
    )

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            >

            </FlatList>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },

    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },

    title: {
        fontSize: 32,
    },
})
