import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './home.styles';
import { Ionicons } from "@expo/vector-icons";
import Welcome from '../components/Home/Welcome';
import Carousel from '../components/Home/Carousel';
import Headings from '../components/Home/Headings';
import ProductRow from '../components/products/ProductRow';

const Home = () => {
    return (
        //safe area view to keep component items inside the viewable area not on notification panel
        <SafeAreaView>
            <View style={styles.appBarWrapper}>
                <View style={styles.appBar}>
                    <Ionicons name={'location-outline'} size={24} />

                    <Text style={styles.locationText}>Karachi, Pakistan</Text>
                    
                    <TouchableOpacity onPress={()=>console.log("Cart")}>
                        <View>
                            <View style={styles.cartAmount}>
                                <Text style={styles.cartNumber}>5</Text>
                            </View>
                            <Ionicons name={'cart'} size={28} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView >
                <Welcome/>
                <Carousel/>
                <Headings/>
                <ProductRow/>
                <Text>{"\n\n\n\n"}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;