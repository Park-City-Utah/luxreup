import React, { useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ActivityIndicator from '../Components/ActivityIndicator';

import Card from '../Components/Card';
import Screen from '../Components/Screen';
import Routes from '../Navigation/Routes';
import listingsApi from '../API/listings';
import AppButton from '../Components/AppButton';
import colors from '../config/colors';
import AppText from '../Components/AppText';
import useApi from '../Hooks/useApi';

function ListingsScreen( { navigation} ) {
//Moved state vars into useApi hook
    const { request: loadListings, data: listings, error, loading } = useApi(listingsApi.getListings); //Not calling, passing.. no brackets

    useEffect(() => {
        loadListings();
    }, []);

//Moved loadListings function to useApi hook

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
});

export default ListingsScreen;