import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#f1f8e9'
    },
    image: {
        width: Dimensions.get('screen').width / 1.05,
        height: Dimensions.get('screen').height / 3,
        alignSelf: 'center',
        margin: 10,
        borderRadius: 20
    },
    opacityContainer: {
        backgroundColor: 'black',
        position: 'absolute',
        top: 240,
        width: Dimensions.get('screen').width / 1.05,
        height: 60,
        alignSelf: 'center',
        opacity:0.8,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    },
    innerOpacityContainer: {
        position: 'absolute',
        top: 240,
        width: Dimensions.get('screen').width / 1.05,
        height: 60,
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    areaText: {
         color:'white',
         fontSize:24,
         fontStyle:'italic',
         marginLeft:10
    },
    foodContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    headertext: {
        color:'#C70039',
        fontSize:30
    },
    introtext: {
        color:'#263238'
    },
    mybutton: {
        width:250,
        height:40,
        backgroundColor:'red',
        alignSelf:'center',
        marginTop:10,
        marginBottom:20,
        alignItems:'center',
        justifyContent:'space-around',
        borderRadius:10,
        flexDirection:'row'
    },
    lineView:{
        height:1,
        width:500,
        backgroundColor:'black',
        marginTop:10
    },
    buttonText:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    }


})