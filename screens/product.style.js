import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topBar: {
        marginHorizontal: SIZES.medium,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        alignItems: 'center',
        width: '92.2%',
        top: 40,
        zIndex: 999,
    },
    mainImage: {
        resizeMode: 'cover',
        width: null,
        height: null,
        aspectRatio: 1,
    },
    details: {
        padding: 20,
        flex: 1,
        marginTop: -SIZES.large - 10,
        backgroundColor: COLORS.offwhite,
        borderTopLeftRadius: SIZES.xLarge,
        borderTopRightRadius: SIZES.xLarge,
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    prodName: {
        fontFamily: 'bold',
        fontSize: SIZES.large
    },
    prodPrice: {
        fontFamily: 'bold',
        fontSize: SIZES.large,
        backgroundColor: COLORS.secondary,
    },
    ratingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ratingStars: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    capacityRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: SIZES.xSmall - 5,
    },
    capacityText: {
        fontFamily: 'medium',
        fontSize: SIZES.medium
    },
    description: {
        marginTop: SIZES.small
    },
    descriptHeading: {
        fontFamily: 'semibold',
        fontSize: SIZES.medium
    },
    descriptText: {
        fontFamily: 'regular',
        textAlign: 'justify',
        marginTop: -5
    },
    deliveryInfoBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: SIZES.medium,
        backgroundColor: COLORS.secondary,
        borderRadius: 20,
        padding: 5
    },
    deliveryLocation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    deliveryInfoTxt: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    deliveryTextStyle: {
        fontFamily: 'medium',
        marginHorizontal: 5,
    },
    purchaseBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: SIZES.xLarge,
    },
    buyText: {
        width: '70%',
        backgroundColor: COLORS.black,
        padding: SIZES.small,
        paddingVertical: SIZES.xSmall - 2,
        borderRadius: SIZES.xxLarge,
    },
    buyTextStyle: {
        fontFamily: 'semibold',
        color: COLORS.white,
        marginLeft: SIZES.small,
    },
    addCart: {
        backgroundColor: COLORS.black,
        borderRadius: SIZES.xxLarge,
        padding: SIZES.small,
    },
    addCartStyle: {
        color: COLORS.white,
    }
})

export default styles;