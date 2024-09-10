import {ScrollView, StyleSheet, Text, View,Image} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Rohit Singh',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>

      <ScrollView
        style={styles.container}
        scrollEnabled={false}
      >
        {
            contacts.map(({uid,name,status,imageUrl})=>(
                <View key={uid} style={styles.userCard}>    
                    <Image source={{
                        uri:imageUrl
                    }}
                    style={styles.userImage}
                    />
                    <View style={styles.userCardText}>
                        <Text style={styles.userName}>{name}</Text>
                        <Text style={styles.userStatus}>{status}</Text>
                    </View>
                </View>

            ))
        }
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:"bold",
        paddingHorizontal:15
    },
    container:{
        paddingHorizontal:16,
        marginBottom:4,
    },
    userCard:{
        flexDirection:'row',
        marginVertical:12,
        alignItems:'center',
        backgroundColor:'#9195F6',
        padding:8,
        borderRadius:8
    },
    userCardText:{

    },
    userImage:{
        height:60,
        width:60,
        borderRadius:60/2,
        marginRight:24
    },
    userName:{
        fontSize:18,
        fontWeight:'500'
    },
    userStatus:{
        fontSize:14,
        fontWeight:'300'
    }
});
