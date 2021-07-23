import React from 'react';
import { StyleSheet, FlatList} from 'react-native';

import Card from '../Components/Card';
import Screen from '../Components/Screen';

import colors from '../config/colors';

const listings = [
    {
        id: 1,
        title: 'Jacket',
        price: 100,
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: 'Couch',
        price: 1000,
        image: require('../assets/couch.jpg')
    },
]

function ListingsScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList
            data={listings}
            keyExtractor={listing => listing.id.toString()}
            renderItem={({item}) => 
                <Card
                    title={item.title}
                    subTitle={item.price}
                    image={item.image}
                />}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.cardBackground,
        padding: 5,                  //Passed to screen as array, SafeAreaView (screen) doesnt allow padding
    }
})

export default ListingsScreen;