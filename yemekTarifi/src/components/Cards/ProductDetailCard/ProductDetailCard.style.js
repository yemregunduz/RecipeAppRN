import {Dimensions, StyleSheet} from "react-native"

export default StyleSheet.create({
    container:{
        flex:1,
        padding:15
    },
    image:{
        height:Dimensions.get("window").height/3,
        borderRadius:15
    },
    title:{
        fontSize:20,
        fontWeight:'900',
        color:'#4CBBA1',
        borderBottomWidth:1,
        borderColor:'#4CBBA1',
        textAlign:'center',
        marginVertical:5,
        paddingBottom:5
    },
    instructions:{
        color:'white',
        fontWeight:'600',
    },
    button:{
        backgroundColor:'#FF0000',
        alignItems:'center',
        paddingVertical:15,
        borderRadius:15,
        marginTop:15,
    },
    buttonText:{
        color:'white',
        fontSize:18,
        fontWeight:'600'
    }
})