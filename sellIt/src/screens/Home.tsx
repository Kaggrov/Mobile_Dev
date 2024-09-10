import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { rootStackParamsList } from '../App'
import ProductItem from '../components/ProductItem'
import Separator from '../components/Separator'

//Data
import { PRODUCTS_LIST } from '../data/constants'

type HomeProps = NativeStackScreenProps<rootStackParamsList,'Home'>


const Home = ({navigation}:HomeProps) => {
  return (
    <View style={styles.container}>

        <FlatList 
        data={PRODUCTS_LIST}
        renderItem={({item}) => (
            <Pressable
                onPress={()=>{
                    navigation.navigate('Details',{
                        product:item
                    })
                }}
            >
                <ProductItem product={item}/>
            </Pressable>
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}
        />
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
  
      padding: 12,
      backgroundColor: '#FFFFFF',
    },
  });