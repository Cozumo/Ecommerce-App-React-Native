import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.offwhite,
        flex: 1,
    },
    listContainer: {
        alignItems: 'center',
        marginVertical: 15,
    },
    loadingContainer: {
        marginTop: '90%'
    },  
    separatorStyle: {
        height: 15,
    }
})

export default styles;