import React from "react";
import { View, Text, StyleSheet} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../constants";

const Carousel = () => {
    const slides = [
        require('../../assets/images/fn1.jpg'),
        require('../../assets/images/fn2.jpg'),
    ]

    return (
        <View style={styles.carouselContainer}>
            <SliderBox
                images={slides}
                dotColor={COLORS.primary}
                inactiveDotColor={COLORS.secondary}
                ImageComponentStyle={{borderRadius: 15, width: "95%", marginTop: 15}}
                autoplay
                circleLoop
            />
        </View>
    );
}

export default Carousel;

const styles = StyleSheet.create({
    carouselContainer: {
        alignItems: 'center',
        flex: 1,
    }
})