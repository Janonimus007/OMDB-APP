import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        // marginHorizontal:'1%',
        marginVertical:'3%',
        // flexDirection:'row',
        backgroundColor:'#E5F0F7',
        borderRadius:15,
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity:  0.16,
        shadowRadius: 1.51,
        elevation: 2
    },
    containerMovie:{
        flexDirection:'row',
    },
    containerBody:{
        flex: 1,
        flexDirection: 'column',
        // paddingHorizontal: '2%',
        // paddingTop: '2%',
        // alignItems: 'flex-end',
        // justifyContent: 'space-evenly',
        
    },
    image:{
        width:100,
        height:100,
        borderRadius:15,
        marginRight:'2%'
    },
    favorite:{
        marginLeft: 'auto',
        paddingRight:'2%',
        paddingBottom:'2%'
    },
    title: {
        textAlign:'left',
        fontSize: 18,
        overflow: 'hidden',
        marginBottom: '3%',
      },

})