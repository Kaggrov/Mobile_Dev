import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'

type CurrencyButtonProps = PropsWithChildren<{
    name:string,
    flag:string
}>

const CurrencyButton = (props:CurrencyButtonProps):JSX.Element => {

  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.name}>{props.name}</Text>
    </View>
  )
}

export default CurrencyButton

const styles = StyleSheet.create({
    buttonContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    flag:{
        fontSize:20,
        color:'#FFF',
        marginBottom:4
    },
    name:{
        fontSize:16,
        color:'#2d3436',
    }
})