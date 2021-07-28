import React, { useState } from 'react';
import { FlatList, StyleSheet, renderRightActions, renderLeftActions, RefreshControl , onPress } from 'react-native';

import ListItem from '../Components/Lists/ListItem';
import Screen from '../Components/Screen';
import ListItemSeperator from '../Components/Lists/ListItemSeperator';
import ListItemDeleteAction from '../Components/Lists/ListItemDeleteAction';
import ListItemCloseAction from '../Components/Lists/ListItemCloseAction';

const intitialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/profile.png')
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: require('../assets/profile.png')
    }
]

function MessageScreen(props) {
    //Add state for update
    //const array = useState(0);
    //const count = array[0];
    //const setCount = array[1];
    //UseState return an array... a[0] is our array, a[1] is state related
    const [messages, setMessages] = useState( intitialMessages );//destructured
    //const coount = array[0];
    //const setCount = array[1];
    const[refreshing, setRefreshing] = useState(false);
    
    const handleDelete = message => {
        //const newMessages = messages.filter(m => m.id !=== message.id);//Remove message from array 
        //setMessages(newMessages); 
        setMessages(messages.filter(m => m.id !== message.id));//Combine last 2 lines
        //Delete the msesage from array
        //Add state
    };

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={(message)=> message.id.toString()}
                renderItem={({ item }) => (
                <ListItem 
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log("message selected", item)}
                    renderRightActions={() => 
                        <ListItemDeleteAction onPress={() => handleDelete(item)}/> }  
                    renderLeftActions={() =>
                         <ListItemCloseAction onPress={() => console.log("close")}/> }  
                />
                )}
                ItemSeparatorComponent={ ListItemSeperator }
                refreshing={ refreshing }
                //onRefresh={() => {
                    
                //} }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
})

export default MessageScreen;