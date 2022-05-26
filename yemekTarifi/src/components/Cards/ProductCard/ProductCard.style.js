import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:0.49,
        marginVertical:6,
        borderRadius:10,
    },
    image:{
        height:150,
        borderRadius:10,
        resizeMode:'stretch',
        backgroundColor:'black'
    },
    title:{
        position: 'absolute',  
        left: 0,bottom:0,right:0,
        textAlign: 'center',
        backgroundColor:'rgba(254, 114, 76, 0.6)',
        color:'white',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        paddingHorizontal:10,
        fontSize:18,
        fontWeight:'bold'
    },
})