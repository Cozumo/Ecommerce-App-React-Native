import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';  //to use custom fonts
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  })

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
    <View style={styles.container}>
      <Text style={styles.textStyle}>Native</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: "bold",
    fontSize: 20,
  }
});
