import React from "react";
import {View,Text,FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch'
import Config from "react-native-config";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import CategoriesCard from "../../components/CategoriesCard/CategoriesCard";

const Categories = (props) => {
    const {loading,error,data} = useFetch(Config.API_CATEGORY)
    if (loading) {
        return <Loading/>
    }
    if (error) {
        return <Error/>
        
    }
    function onPressCategories (strCategory) {
        props.navigation.navigate('Meals',{strCategory})
    }
    const renderItem = ({item}) => <CategoriesCard category={item} onPressTop={()=>onPressCategories(item.strCategory)} />
    
    return(
        <View style={{backgroundColor:'orange',flex:1}}>
            <FlatList
            data={data.categories}
            renderItem={renderItem}
            />
        </View>
    )
}
export default Categories;