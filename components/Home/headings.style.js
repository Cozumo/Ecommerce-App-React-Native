import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../../constants"

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.medium + 2,
        marginHorizontal: 12
    },
    header: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    textStyle: {
        color: COLORS.black,
        fontFamily: 'semibold',
        fontSize: 24
    }
})

export default styles;