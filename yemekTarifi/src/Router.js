import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Category from './pages/categories/Category';
import Product from './pages/products/Product';
import ProductDetails from './pages/productDetails/ProductDetails';
const Router = () => {
    const Stack  = createNativeStackNavigator();
    return(
        <NavigationContainer >
            <Stack.Navigator screenOptions={navigatorScreenOptions} >
                <Stack.Screen options={{title:'Categories'}}  name='CategoryScreen'  component={Category}></Stack.Screen>
                <Stack.Screen options={{title:'Foods'}} name='ProductScreen' component={Product}></Stack.Screen>
                <Stack.Screen options={{title:'Recipe'}} name="ProductDetailsScreen" component={ProductDetails}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const navigatorScreenOptions = StyleSheet.create({
    headerStyle:{backgroundColor:'#272D2F'},
    headerTitleStyle:{fontSize:25,fontWeight:"600"},
    headerTintColor:'white',
    headerTitleAlign:'center',
    
}) 
export default Router;