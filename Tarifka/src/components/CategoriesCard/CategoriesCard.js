import React from "react";
import {View,Text,Image,TouchableWithoutFeedback} from 'react-native';
import styles from "./CategoriesCard.style";

const CategoriesCard = (props) => {
    return(
        <TouchableWithoutFeedback onPress={props.onPressTop} >
        <View style={styles.container} >
            <Image
            style={styles.image}
            source={{uri:props.category.strCategoryThumb}} />
            <Text style={styles.categorytext}>{props.category.strCategory}</Text>
        </View>
        </TouchableWithoutFeedback>
    )
}
export default CategoriesCard;