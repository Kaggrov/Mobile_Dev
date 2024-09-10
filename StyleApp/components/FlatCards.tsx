import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.card1]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card,styles.card2]}>
            <Text>Blue</Text>
        </View>
        <View style={[styles.card,styles.card3]}>
            <Text>Violet</Text>
        </View>
        
      </View>
      
    </View>
  )
}

export default FlatCards

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:"400",
        paddingHorizontal:15
    },
    container:{
        flex:1,
        flexDirection:'row',
        padding:8,
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:10,
        margin:10
    },
    card1:{
        backgroundColor:'red'
    },
    card2:{
        backgroundColor:'blue'
    },
    card3:{
        backgroundColor:'purple'
    }
})