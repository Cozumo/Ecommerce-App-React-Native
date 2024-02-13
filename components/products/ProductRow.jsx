import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants';
import styles from './productrow.style';
import ProductCardView from './ProductCardView';
import useFetch from '../../hooks/useFetch';

const ProductRow = () => {
    const {data, isLoading, error } = useFetch();
    // const data = [1,2,3,4]
    // const isLoading = false;
    // const error = null;
    return (
        <View style={styles.container}>
            {
                isLoading ? <ActivityIndicator size={SIZES.xxLarge} color={COLORS.gray} /> 
                : error ? <Text>Something Went Wrong</Text> 
                : <FlatList
                    data={data}
                    keyExtractor={( item ) => item._id}
                    renderItem={({ item })=> <ProductCardView item= {item} />}
                    horizontal
                    contentContainerStyle={{columnGap: SIZES.medium}}
                />
            }
        </View>
    )
}

export default ProductRow;