import { Dimensions, StyleSheet } from "react-native";
export default StyleSheet.create({
    container:{
        margin:10,
        alignItems:'center',
        marginTop:5,
        backgroundColor:'orange',
        flex:1
    },
    image:{
        width:Dimensions.get('screen').width/1.1,
        height:Dimensions.get('screen').height/4,
        borderRadius:12
    },
    text:{
        fontSize:30,
        position:'absolute',
        bottom:10,
        color:'white',
        fontWeight:'bold',
        marginLeft:10
    },
    opacityview:{
        opacity:0.7,
        width:Dimensions.get('screen').width/1.1,
        height:60,
        position:'absolute',
        bottom:0,
        backgroundColor: 'black',
        borderBottomLeftRadius:12,
        borderBottomRightRadius:12
    }
})