import React from "react";
import {View,Text,FlatList} from 'react-native';
import useFetch from "../../hooks/useFetch";
import Config from "react-native-config";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import MealsCard from "../../components/MealsCard/MealsCard";
import styles from './Meals.style'

const Meals = (props) => {
    const {strCategory} = props.route.params
    const {loading,error,data} = useFetch(`${Config.API_FOODS}${strCategory}`)
    if(loading) {
        return <Loading/>
    }
    if (error) {
        return <Error/>
    }
    const goFoodDetail = (idMeal) => {
        props.navigation.navigate('MealDetail',{idMeal})
    }
    const renderMeal = ({item}) => <MealsCard meals={item} goFoodDetail={()=>goFoodDetail(item.idMeal)} />
    return(
        <View style={styles.container}>
            <FlatList
            data={data.meals}
            renderItem={renderMeal}
            />
        </View>
    )
}
export default Meals;