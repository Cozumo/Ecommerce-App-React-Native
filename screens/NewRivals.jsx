import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './newRivals.style'
import { Ionicons } from '@expo/vector-icons'
import ProductList from '../components/products/ProductList'


const NewRivals = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name={'chevron-back-circle'} size={30} color={'white'} />
        </TouchableOpacity>
        
        <Text style={styles.upperBarTextStyle}>Products</Text>
      </View>

      <View style={{flex: 1}}>
        <ProductList/>
      </View>
    </SafeAreaView>
  )
}

export default NewRivals