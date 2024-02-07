import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './welcome.style';
import { COLORS, SIZES } from '../../constants';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 

const Welcome = () => {

    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.welcomeText(COLORS.black, SIZES.small)}>Find The Most</Text>
                <Text style={styles.welcomeText(COLORS.primary, -15)}>Latest Electronics</Text>
            </View>

            <View style={styles.searchContainer}>
                <TouchableOpacity style={styles.searchIcon}>
                    <Ionicons name={'search'} size={28} color={COLORS.gray}/>
                </TouchableOpacity>
                <View style={styles.searchTextWrapper}>
                    <TextInput
                        style={styles.searchTxt}
                        value=''
                        onPressIn={()=> navigation.navigate("Search")}
                        placeholder="Search What You Want?"
                    />
                </View>
                <TouchableOpacity style={styles.searchCameraImgWrapper}>
                    <Ionicons name={'camera-outline'} size={24} color={COLORS.offwhite} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Welcome;