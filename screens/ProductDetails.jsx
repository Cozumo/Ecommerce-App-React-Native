import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './product.style';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants';
import { useRoute } from '@react-navigation/native';

function ProductDetails({navigation}) {
    const [amountProduct, setAmounProduct] = useState(0);

    //'useRoute' To access data sent using Navigation.navigate()
    const route = useRoute();
    const {item} = route.params;

    //incrementing Amount of product
    const increment = () =>
    {
        setAmounProduct(amountProduct + 1);
    }

    //decrementing Amount of product
    const decrement = () => 
    {
        if(amountProduct < 1)
            setAmounProduct(0);
        else
            setAmounProduct(amountProduct - 1);
    }

    return (
        //safe area view to keep component items inside the viewable area not on notification panel
        <View style={styles.container}>
            <View style={styles.topBar}>
                <TouchableOpacity onPress={() => navigation.navigate("BottomTab")}>
                    <Ionicons name={'chevron-back-circle'} size={28} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name={'heart'} size={28} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
            <Image
                source={require('../assets/images/fn1.jpg')}
                style={styles.mainImage}
            />
            <View style={styles.details}>
                <View style={styles.titleRow}>
                    <Text style={styles.prodName}>{item.title}</Text>

                    <Text style={styles.prodPrice}>$ {item.price}.00</Text>
                </View>

                <View style={styles.ratingRow}>
                    <View style={styles.ratingStars}>
                        {[1,2,3,4,5].map(() => <Ionicons name={'star'} size={SIZES.xLarge} color={'gold'} />)}
                        <Text style={{fontSize: SIZES.medium}}>{"  "}(4.9)</Text>
                    </View>

                    <View style={styles.capacityRow}>
                        <TouchableOpacity onPress={() => increment()}>
                            <Ionicons name={'add-circle-outline'} size={SIZES.xLarge}/>
                        </TouchableOpacity>

                        <Text style={styles.capacityText}> {amountProduct} </Text>

                        <TouchableOpacity onPress={decrement}>
                            <Ionicons name={'remove-circle-outline'} size={SIZES.xLarge}/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.description}>
                    <Text style={styles.descriptHeading}>Description</Text>
                
                    <Text style={styles.descriptText}>{item.description}</Text>
                </View>

                <View style={styles.deliveryInfoBar}>
                    <View style={styles.deliveryLocation}>
                        <Ionicons name={'location-outline'} size={SIZES.xLarge} />
                        <Text style={styles.deliveryTextStyle}>{item.prod_location}</Text>
                    </View>

                    <View style={styles.deliveryInfoTxt}>
                        <MaterialCommunityIcons name={'truck-cargo-container'} size={SIZES.xLarge}/>
                        <Text style={styles.deliveryTextStyle}>Delivery</Text>
                    </View>
                </View>

                <View style={styles.purchaseBar}>
                    <TouchableOpacity style={styles.buyText}>
                        <Text style={styles.buyTextStyle}>BUY NOW</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.addCart}>
                        <Ionicons style={styles.addCartStyle} name={'cart-outline'} size={SIZES.large} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default ProductDetails;