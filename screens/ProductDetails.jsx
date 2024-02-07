import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function ProductDetails(props) {
    return (
        //safe area view to keep component items inside the viewable area not on notification panel
        <SafeAreaView>
            <Text>ProductDetails</Text>
        </SafeAreaView>
    );
}

export default ProductDetails;

const styles = StyleSheet.create({
    
})