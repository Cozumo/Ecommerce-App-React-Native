import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import useFetch from '../../hooks/useFetch'
import ProductCardView from './ProductCardView'
import { COLORS, SIZES } from '../../constants'
import styles from './productlist.style'

const ProductList = () => {
    const {data, error, isLoading} = useFetch();

  return (
    <View style={styles.container}>
        {isLoading ? <View style={styles.loadingContainer}><ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} /></View>
        : error ? <Text>Something Went Wrong</Text> 
        :   <FlatList
                numColumns={2}
                data={data}
                renderItem={({item}) => <ProductCardView item={item} />}
                contentContainerStyle={styles.listContainer}
                ItemSeparatorComponent={<View style={styles.separatorStyle}></View> }
            />}
    </View>
  )
}

export default ProductList