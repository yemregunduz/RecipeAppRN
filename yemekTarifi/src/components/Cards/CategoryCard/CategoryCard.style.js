import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({

    container:{
        flexDirection:"row",
        backgroundColor:'#FE724C',
        marginVertical:5,
        marginHorizontal:9,
        borderTopLeftRadius:60,
        borderBottomLeftRadius:60,
    },
    image:{
        height:100,
        width:120,
        resizeMode:"contain",
        marginLeft:5,
        },
    title:{
        alignSelf:"center",
        fontSize:20,
        fontWeight:'900',
        color:'#272D2F',
        marginLeft:15
    },
})