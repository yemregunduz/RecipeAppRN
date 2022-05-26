import React from "react";
import { View,FlatList,StyleSheet } from "react-native";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import useFetch from "../../hooks/useFetch";
import ProductDetailCard from "../../components/Cards/ProductDetailCard";
const ProductDetails = ({route}) => {
const PRODUCT_DETAIL_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s="

    const mealName = route.params.strMeal
    console.log(mealName)
    const [data,error,loading] = useFetch(PRODUCT_DETAIL_URL+mealName)
    const renderItem = ({item})=> <ProductDetailCard product={item}></ProductDetailCard> 
    if (loading) {
        return <Loading></Loading>;
    }
    
    if (error) {
        return <Error />;
    }
    return(
        <View style={styles.container}>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={data.meals}
            renderItem = {renderItem}
            ></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#272D2F'
    }
})

export default ProductDetails