import React from 'react';
import { StyleSheet, FlatList, View} from 'react-native';


import { MaterialCommunityIcons } from '@expo/vector-icons';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/Colors';
import IconComponent from '../components/IconComponent';
import ListItemSeperator from '../components/ListItemSeperator';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    }
]

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                    title="Parker Ferguson"
                    subTitle="parker@engineerd.io"
                    image={require("../assets/profile.png")}
                />
            </View>
           <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={item => item.title}
                    ItemSeparatorComponent={ListItemSeperator}
                    renderItem={({item}) =>
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <IconComponent name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
                            }
                        />
                    }
                />
           </View>
           <ListItem
           title="Log Out"
           IconComponent={
               <IconComponent name="logout" backgroundColor={colors.primary}/>
           }/>

        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light
    },
    container: {
        marginVertical: 20,
    }
})

export default AccountScreen;