import { StyleSheet } from "react-native"
import { SIZES, COLORS } from "../../constants"

const styles = StyleSheet.create({
    container: {
        height: 230,
        width: 170,
        marginHorizontal: 10,
        marginTop: SIZES.small,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.secondary,
    },
    imageContainer: {
        flex: 1,
        width: 160,
        marginHorizontal: 5,
        marginTop: 5,
        overflow: 'hidden',
        borderRadius: SIZES.medium,
    },
    imageMode: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    details: {
        padding: 10,
        color: COLORS.black,
    } ,
    title: {
        fontFamily: 'bold',
        fontSize: SIZES.medium + 2,
    },
    company: {
        fontFamily: 'medium',
        fontSize: SIZES.medium - 2,
        marginBottom: 5,
    },
    price: {
        fontFamily: 'bold',
        fontSize: SIZES.medium + 2,
    },
    addBtn: {
        position: 'absolute',
        bottom: 4,
        right: 4,
        color: COLORS.primary,
    }
})

export default styles;