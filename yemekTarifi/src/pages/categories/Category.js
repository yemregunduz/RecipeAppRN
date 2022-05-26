import React from "react";
import {View,Text,Button, FlatList,StyleSheet} from "react-native";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import CategoryCard from "../../components/Cards/CategoryCard";
import Error from "../../components/Error";


const Category = ({navigation}) => {
const CATEGORY_URL = "https://www.themealdb.com/api/json/v1/1/categories.php"

    const [data,error,loading] = useFetch(CATEGORY_URL);
    const renderItem = ({ item }) => <CategoryCard category={item} onSelect={()=>handleCategorySelect(item.strCategory)}></CategoryCard>
    const handleCategorySelect = (categoryName) => {
        navigation.navigate("ProductScreen",{categoryName})
    } 
    if(loading){
        return (<Loading></Loading>)
    }
    if(error){
        return <Error></Error>
    }
    return (
        <View style={styles.container}>
            <FlatList 
            showsVerticalScrollIndicator={false}
            data={data.categories}
            renderItem={renderItem} 
            >
            </FlatList>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#272D2F'
    }
})
export default Category;