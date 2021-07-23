import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight, onPress, renderRightActions, Icon} from 'react-native';

import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from '../AppText';
import colors from '../../config/Colors';

function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions, renderLeftActions }) {
    return (
        <Swipeable renderLeftActions= {renderLeftActions} renderRightActions={ renderRightActions } >
            <TouchableHighlight 
                underlayColor={colors.light}
                onPress={onPress}>
                <View sytle={styles.container}>
                    <View style={styles.userDetails}>
                        {IconComponent}
                        {image && <Image source={image} style={styles.cardImage}/> }
                        <View style={styles.textView}>
                            <AppText style={styles.title}>{title}</AppText>
                            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    userDetails: {//back to column
        backgroundColor: colors.white,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        flexDirection: 'row',
        padding: 12,
        //marginLeft: 10,
    },
    container: {
        flexDirection: 'row',
        marginTop: 2,
    },
    cardImage: {
        width: 70,
        height: 70,
        borderRadius: 35,//half the size for round
        //margin: 10
    },
    textView: {
        marginLeft: 10,
        flexDirection: 'column',//Default (for clarity)
        justifyContent: "center"

    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.black,
    },
    subTitle: {
        color: colors.subTitle,
        fontSize: 14,
    }
})

export default ListItem;