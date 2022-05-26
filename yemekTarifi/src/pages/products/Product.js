import React from "react";
import {View,Text,FlatList,StyleSheet} from "react-native";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import useFetch from "../../hooks/useFetch";
const PRODUCTS_API = "https://www.themealdb.com/api/json/v1/1/filter.php"
const Product = ({route,navigation}) => {
    const params = route.params
    const [data,error,loading] = useFetch(`${PRODUCTS_API}?c=${params.categoryName}`)
    const renderItem = ({item}) => <ProductCard product={item} onSelect = {(strMeal)=>handleProductSelect(item.strMeal)}></ProductCard>
    const keyExtractor = (item) => item.idMeal

    const handleProductSelect = (strMeal) => {
        navigation.navigate("ProductDetailsScreen",{strMeal})
    }
    if (loading) {
        return <Loading></Loading>;
    }
    
    if (error) {
        return <Error />;
    }

    return(
        <View  style={styles.container}>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={data.meals}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            columnWrapperStyle={{justifyContent:"space-between"}}
            numColumns={2}
            >
            </FlatList>
        </View>
    )
  
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:15,
        backgroundColor:'#272D2F'
    }
})
export default Product