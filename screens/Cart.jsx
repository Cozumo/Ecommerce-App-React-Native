import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Cart() {
    return (
        //safe area view to keep component items inside the viewable area not on notification panel
        <SafeAreaView>
            <Text>Cart</Text>
        </SafeAreaView>
    );
}

export default Cart;

const styles = StyleSheet.create({
    
})