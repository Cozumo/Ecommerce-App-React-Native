import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';  //to use custom fonts
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { Cart , ProductDetails, NewRivals } from './screens/index';

const Stack = createNativeStackNavigator();

export default function App() {
  //importing custom fonts while fontsLoaded(bool) checks if theyre loaded
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  })

  //checks if fonts are loaded and removes splash screen
  const onLayoutRootView = useCallback( async()=> {
    if(fontsLoaded)
    {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);  //dependency variable so that function only runs when variable value is changed

  if(!fontsLoaded)
  {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="BottomTab" 
          component={BottomTabNavigation}
          options={{headerShown: false}}    //Header name with Back button disabled
        />
        <Stack.Screen 
          name="Cart" 
          component={Cart}
          options={{headerShown: true}}    //Header name with Back button enable
        />
        <Stack.Screen 
          name="ProductDetails" 
          component={ProductDetails}
          options={{headerShown: false}}    //Header name with Back button enable
        />
        <Stack.Screen 
          name="NewRivals" 
          component={NewRivals}
          options={{headerShown: false}}    //Header name with Back button enable
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};