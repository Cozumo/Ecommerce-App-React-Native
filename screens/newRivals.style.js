import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const style = StyleSheet.create({
    container: {
        backgroundColor: COLORS.offwhite,
        flex: 1,
    },
    upperBar: {
        backgroundColor: COLORS.primary,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: SIZES.medium,
        marginHorizontal: SIZES.small,
    },
    upperBarTextStyle: {
        color:  'white',
        fontFamily: 'medium',
        fontSize: 16,
        marginLeft: SIZES.small,
        marginTop: 3,
    }

})

export default style;