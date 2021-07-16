import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput, View, StyleSheet} from 'react-native';

import defaultStyles from '../../config/Styles';
import colors from '../../config/Colors';

function AppTextInput({ icon, ...otherProps }) {
    
//const [firstName, setFirstName] = useState(''); //empty so not undefined

    return (
    <View style={styles.container}>
        { icon && <MaterialCommunityIcons 
            style={styles.icon}
            name={icon} 
            size={20} 
            color={colors.medium} 
    />}
        <TextInput 
            {...otherProps}
            style={defaultStyles.text}  //Use a config file
            />
          </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: "100%", 
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    }
})

export default AppTextInput;