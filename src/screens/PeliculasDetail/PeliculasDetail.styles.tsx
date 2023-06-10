import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#E5F0F7'
    },
    image:{
        width: '100%',
        height:350, 
        borderBottomLeftRadius: 100,
        resizeMode: 'contain',

    },
    body:{
        paddingHorizontal:'5%'
    },
    detailDescription:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:'1%',
        alignItems:'center'
    },
    description:{
        fontSize:18,
    },
    textDescription:{
        width:'80%'
    },
    ratings:{
        textAlign:'center',
        marginTop:'5%',
        fontSize:18,
        fontWeight:'bold'
    }
})