import React from "react";
import {View,Text,Image, TouchableOpacity, Linking} from "react-native"
import styles from './ProductDetailCard.style'
const ProductDetailCard = ({product}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:product.strMealThumb}}></Image>
            <Text style={styles.title}>{product.strMeal}</Text>
            <Text style={styles.instructions}>{product.strInstructions} </Text>
            <TouchableOpacity style={styles.button} onPress={()=>Linking.openURL(product.strYoutube)}  >
                <Text style={styles.buttonText} >Watch On Youtube</Text>
            </TouchableOpacity>
        </View>
    )
}
export default ProductDetailCard