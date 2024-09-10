import React from 'react'
import {View,Text,StyleSheet,useColorScheme,SafeAreaView} from 'react-native'

const AppPro = ():JSX.Element => {

    const isDarkMode = useColorScheme() === 'dark';

  return (

        <View style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText :styles.darkText }>Hello WOrld</Text>
        </View>

  )
}

const styles  = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    whiteText:{
        color:'white'
    },
    darkText:{
        color:'red'
    }
})

export default AppPro