import {Alert, Image, Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ActionCard = () => {
  const openWebsite = (websiteLink: string) => {
    Linking.openURL(websiteLink)
    .catch(()=>{
        Alert.alert("Error opening link");
    })
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in Javascript 21 - ES12

            </Text>
        </View>
        <Image
            source={{
                uri:'https://images.moneycontrol.com/static-mcnews/2023/04/pexels-ankur-bagai-6440428-770x433.jpg?impolicy=website&width=770&height=431'
            }}
            style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text numberOfLines={3}>
            The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers.
            The structure was built in 1799 by the Maharaja Sawai Pratap Singh, grandson of Maharaja Sawai Jai Singh, the founder of the city of Jhunjhunu in the state of Rajasthan.[1] He was so inspired by the unique structure of Khetri Mahal that he built this grand and historical palace.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={()=>{openWebsite('https://www.hawa-mahal.com/')}}>
                <Text style={styles.socialLinks}>Read More </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{openWebsite('https://www.hawa-mahal.com/')}}>
                <Text style={styles.socialLinks}>Follow me </Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:"bold",
        paddingHorizontal:8
    },
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        fontSize:16,
        fontWeight:'500'
    },
    cardImage:{
        height:180,
        // width:320
    },
    cardBody:{
        padding:8

    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    socialLinks:{
        fontSize:16,
        backgroundColor:'#F1F5A8',
        padding:12,
        borderRadius:8
    },
    card:{
        width:360,
        height:360,
        borderRadius:8,
        marginVertical:12,
        marginHorizontal:16,
    },
    elevatedCard:{
        backgroundColor:'#51829B',
        elevation:8,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#333',
        shadowOpacity:0.4
    }
});
