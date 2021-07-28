import { Platform } from 'react-native';

import colors from './colors';

export default {
    colors, 
    text: {
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        fontSize: 15,
        color: colors.dark,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    }
};
