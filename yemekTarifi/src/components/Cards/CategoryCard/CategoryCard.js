import React from "react";
import { Text, TouchableWithoutFeedback, View , Image} from "react-native"

import styles from "./CategoryCard.style";
const CategoryCard = ({ category,onSelect }) => {

    return (
        <TouchableWithoutFeedback  onPress={onSelect}>
            <View style={styles.container}>
                <Image source={{uri:category.strCategoryThumb}} style={styles.image}></Image>
                <Text style={styles.title}>{category.strCategory}</Text>       
            </View>
        </TouchableWithoutFeedback>
    )
       
      
}

export default CategoryCard