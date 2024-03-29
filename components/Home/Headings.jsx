import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './headings.style';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const Headings = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textStyle}>New Rivals</Text>
                <TouchableOpacity onPress={() => navigation.navigate("NewRivals")}>
                    <Ionicons name={'grid'} size={24} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Headings;