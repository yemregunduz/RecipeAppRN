import React from 'react';
import LottieView from 'lottie-react-native';

const Loading = () => {
    return(
        <LottieView style={{backgroundColor:'#272D2F'}} source={require("../../assets/foodLoading.json")} autoPlay></LottieView>
    )
}
export default Loading