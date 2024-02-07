import { StyleSheet } from "react-native";
import { COLORS, SIZES } from '../constants/index.js';

const styles = StyleSheet.create({
    appBarWrapper: {
        marginHorizontal: 22,
        marginTop: SIZES.small,
    },
    appBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    locationText: {
        fontFamily: "semibold",
        fontSize: SIZES.medium,
        color: COLORS.gray
    },
    cartAmount: {
        position: 'absolute',
        bottom: 13,
        left: 13,
        width: 16,
        height: 16,
        borderRadius: 50,
        backgroundColor: "green",
        alignItems: 'center',
        zIndex: 999,
    },
    cartNumber: {
        fontFamily: 'regular',
        fontWeight: "600",
        color: COLORS.lightWhite,
        fontSize: 12,
    }
})

export default styles;