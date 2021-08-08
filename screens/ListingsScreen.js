import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList} from 'react-native';

import Card from '../Components/Card';
import Screen from '../Components/Screen';
import Routes from '../Navigation/Routes';
import listingsApi from '../API/listings';

import colors from '../config/colors';

function ListingsScreen( {navigation} ) {
    const [listings, setListings] = useState([]);
    useEffect(() => {
        loadListings();
    }, []);

    //Need async, can't do in useEffect
    const loadListings = async () => {
        const response = await listingsApi.getListings();
        setListings(response.data);
    }

    return (
        <Screen style={styles.screen}>
            <FlatList
            data={listings}
            keyExtractor={listing => listing.id.toString()}
            renderItem={({item}) => 
                <Card
                    title={item.title}
                    subTitle={"$" + item.price}
                    imageUrl={item.images[0].url}
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