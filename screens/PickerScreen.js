import React, { useState} from 'react';
import {Picker, StyleSheet} from '@react-native-picker/picker';

import Screen from '../components/Screen';
import defaultStyles from '../config/Styles';

//const [selectedLanguage, setSelectedLanguage] = useState(0);

function PickerScreen(props) {
    return (
        <div></div>
        <Screen>
            <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Java" value="java" style={defaultStyles.text} />
            <Picker.Item label="JavaScript" value="js" style={defaultStyles.text} />
            </Picker>
      </Screen> 
    );
}

const styles = StyleSheet.create({
    
})

export default PickerScreen;