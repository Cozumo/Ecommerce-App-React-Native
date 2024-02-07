import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";


const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: COLORS.secondary,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: SIZES.medium,
        marginHorizontal: 10,
        marginTop: 20,
        height: 50
    },
    searchIcon: {
        marginLeft: 15
    },
    searchTextWrapper: {
        flex: 1,
        marginLeft: 10,
    },  
    searchTxt: {
        color: COLORS.gray,
    },
    searchCameraImgWrapper: {
        backgroundColor: COLORS.primary,
        height: "100%",
        width: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: SIZES.medium
    }
})

export default styles;