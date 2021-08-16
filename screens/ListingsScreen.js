import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ActivityIndicator from '../Components/ActivityIndicator';

import Card from '../Components/Card';
import Screen from '../Components/Screen';
import Routes from '../Navigation/Routes';
import listingsApi from '../API/listings';
import AppButton from '../Components/AppButton';

import colors from '../config/colors';
import AppText from '../Components/AppText';

function ListingsScreen( {navigation} ) {
    const [listings, setListings] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadListings();
    }, []);

    //Need async, can't do in useEffect
    const loadListings = async () => {
        //Api sauce so don't need try/catch
        setLoading(true);
        const response = await listingsApi.getListings();//Funct in api
        setLoading(false);

        //ErrorHandling
        if (!response.ok) {
            setError(true);
            return;
        }
        setError(false);
        setListings(response.data);
    }

    return (
        <Screen style={styles.screen}>
            {error && <>
            <AppText style={styles.error}>Could not retreive listings data.</AppText>
            <AppButton margin={30} color={"scarletRed"} title="Retry" onPress={loadListings}/>
            </>}
            <ActivityIndicator visible={loading}/>
            {!error && <FlatList
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
            }
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.cardBackground,
        //padding: 5,                  //Passed to screen as array, SafeAreaView (screen) doesnt allow padding
    },
    error: {
        marginTop: 20,
        alignContent: 'center',
        justifyContent: 'center',
        color: colors.black,
        height: '85%'

    }
})

export default ListingsScreen;