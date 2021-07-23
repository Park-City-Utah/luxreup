import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import colors from '../config/colors';
import Card from '../components/Card';
import ListItem from '../components/ListItem';

function CardScreen(props) {
    return (
        <SafeAreaView style={styles.cardBackground}>
            <Card 
                title="Hermes Jacket" 
                subTitle="$100.00 or trade" 
                image={require("../assets/jacket.png")}>  
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
        backgroundColor: colors.cardBackground,
        //padding: 10,
        //paddingTop: "10%",
        //margin: 10,
        justifyContent: "flex-start", //main
    }

})

export default CardScreen;