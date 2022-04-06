import React from "react";
import {View,Text, Button, TouchableOpacity} from 'react-native';
import styles from './Starter.style'
import LinearGradient from "react-native-linear-gradient";
import LottieView from 'lottie-react-native';

const Starter = (props) => {
    function openMenu () {
        props.navigation.navigate('Categories')
    }
    return(
        <View style={styles.container}>
           <LottieView
           source={require('../../assets/chef.json')}
           autoPlay
           style={{width:100,height:120,position:'absolute',top:300}}
           />
           
            <View style={styles.innercontainer} >
            <Text style={styles.titletext} >TARIFKA</Text>
            <TouchableOpacity
            onPress={openMenu}
            style={styles.button}>
                <Text style={styles.buttontext} >Open Menu</Text>
            </TouchableOpacity>
            </View>
            
        </View>
    )
}
export default Starter;