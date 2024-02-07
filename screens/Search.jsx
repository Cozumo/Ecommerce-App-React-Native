import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from "../constants";
import styles from './search.style';

function Search(props) {
    return (
        //safe area view to keep component items inside the viewable area not on notification panel
        <SafeAreaView>
            <View style={styles.searchContainer}>
                <TouchableOpacity style={styles.searchIcon}>
                    <Ionicons name={'camera-outline'} size={28} color={COLORS.gray}/>
                </TouchableOpacity>
                <View style={styles.searchTextWrapper}>
                    <TextInput
                        style={styles.searchTxt}
                        value=''
                        onPressIn={()=> {}}
                        placeholder="Search What You Want?"
                    />
                </View>
                <TouchableOpacity style={styles.searchCameraImgWrapper}>
                    <Ionicons name={'search-outline'} size={22} color={COLORS.offwhite} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Search;