import { Platform } from 'react-native';

import colors from '../config/Colors';

export default {
    text: {
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        fontSize: 18,
        color: colors.dark,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    }
}