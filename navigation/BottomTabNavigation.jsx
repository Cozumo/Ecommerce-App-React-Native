import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Profile, Search } from '../screens/index';
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from '../constants/index';

//Creating Tab
const Tab = createBottomTabNavigator();

//properties of tab bar menu
const tabsScreenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 50,
    }
}

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={tabsScreenOptions}>

            {/* Tab screens with icons&colors defined based on selected/focused or not */}
            <Tab.Screen
                name='Home' 
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => {
                        return <Ionicons 
                            name={focused ? 'home' : 'home-outline'}
                            color={focused ? COLORS.primary : COLORS.gray2}
                            size={24}    
                        />
                    }
                }}
            />
            <Tab.Screen 
                name='Search' 
                component={Search}
                options={{
                    tabBarIcon: ({focused}) => {
                        return <Ionicons 
                            name={focused ? 'search' : 'search-outline'}
                            color={focused ? COLORS.primary : COLORS.gray2}
                            size={24}      
                        />
                    }
                }}    
            />
            <Tab.Screen 
                name='Profile' 
                component={Profile} 
                options={{
                    tabBarIcon: ({focused}) => {
                        return <Ionicons 
                            name={focused ? 'person' : 'person-outline'}
                            color={focused ? COLORS.primary : COLORS.gray2}
                            size={24}      
                        />
                    }
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabNavigation;