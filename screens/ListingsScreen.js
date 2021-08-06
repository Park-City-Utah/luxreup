import React from 'react';
import { StyleSheet, FlatList} from 'react-native';

import Card from '../Components/Card';
import Screen from '../Components/Screen';
import Routes from '../Navigation/Routes';

import colors from '../config/colors';

const listings = [
    {
        id: 1,
        title: 'Side Marker Light - Amber',
        price: 30,
        image: require('../assets/sidemarkerClear.png')
    },
    {
        id: 2,
        title: 'Rear Wing - Carbon',
        price: 450,
        image: require('../assets/rearwingCarbon.png')
    },
    {
        id: 3,
        title: 'Front spoiler - Black',
        price: 200,
        image: require('../assets/spoilerBlack.jpg')
    },
    {
        id: 4,
        title: 'GT4 Style intake - Carbon',
        price: 180,
        image: require('../assets/sideintakeCarbon.png')
    },
    {
        id: 5,
        title: 'Center Caps - Silver',
        price: 65,
        image: require('../assets/centercapsSilver.jpg')
    },
]

function ListingsScreen( {navigation} ) {
    return (
        <Screen style={styles.screen}>
            <FlatList
            data={listings}
            keyExtractor={listing => listing.id.toString()}
            renderItem={({item}) => 
                <Card
                    title={item.title}
                    subTitle={"$" + item.price}
                    image={item.image}
                    onPress={ () => navigation.navigate(Routes.LISTING_DETAILS, item)} 
                />}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.cardBackground,
        //padding: 5,                  //Passed to screen as array, SafeAreaView (screen) doesnt allow padding
    }
})

export default ListingsScreen;