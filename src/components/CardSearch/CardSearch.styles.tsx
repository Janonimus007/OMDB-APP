import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        marginVertical:'3%',
        backgroundColor:'#E5F0F7',
        borderRadius:15,
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity:  0.18,
        shadowRadius: 4.59,
        elevation: 5
    },
    containerMovie:{
        flexDirection:'row',
    },
    containerBody:{
        flex: 1,
        flexDirection: 'column',
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