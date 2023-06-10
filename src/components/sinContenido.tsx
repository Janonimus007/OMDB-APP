import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface Props{
    text: string
  }

export const SinContenido = ({text}:Props)=> {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        paddingTop:'5%'
    },
    text:{
        fontSize:20,
        fontWeight:'bold'
    }
})