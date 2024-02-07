import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Profile(props) {
    return (
        //safe area view to keep component items inside the viewable area not on notification panel
        <SafeAreaView>
            <Text>Profile</Text>
        </SafeAreaView>
    );
}

export default Profile;

const styles = StyleSheet.create({
    
})