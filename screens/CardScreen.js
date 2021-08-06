import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import colors from '../config/colors';
import Card from '../Components/Card';
import ListItem from '../Components/Lists/ListItem';

function CardScreen( {route}) {
    const listing = route.params;
    return (
        <SafeAreaView style={styles.cardBackground}>
            <Card 
                title={listing.title}
                subTitle={"$" + listing.price}
                image={listing.image}>
                 
            </Card>
            <ListItem
                title="Parker Ferguson"
                subTitle="1 Listing"
                image={require("../assets/profile.png")}>
            </ListItem>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    cardBackground: {
        flex: 1,
        backgroundColor: colors.white,
        //padding: 10,
        //paddingTop: "10%",
        //margin: 10,
        justifyContent: "flex-start", //main
    }

})

export default CardScreen;