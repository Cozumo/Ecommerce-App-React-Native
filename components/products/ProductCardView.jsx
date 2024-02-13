import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import styles from './productcardview.style';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProductCardView = ({ item }) => {
    const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={()=> navigation.navigate("ProductDetails", {item})}>
        <View  style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/images/fn5.jpg')} 
                style={styles.imageMode} />
            </View>

            <View style={styles.details}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.company}>{item.supplier}</Text>
                <Text style={styles.price}>$ {item.price}.99</Text>
                <TouchableOpacity >
                    <Ionicons name={'add-circle'} size={28}  style={styles.addBtn}/>
                </TouchableOpacity>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default ProductCardView