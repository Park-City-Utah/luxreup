import React from 'react';
import { StyleSheet, SafeAreaView, View, StatusBar} from 'react-native';

function Screen({ children, style }) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={[styles.view, style] }>{children}</View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1, //withouth this size determined by number in list, when delete it cuts 
    },
    view: {
        flex:1      //Addresses cut off when drag
    }
})

export default Screen;