import React from 'react';
import { View,Text,StyleSheet,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon, { icon } from 'react-native-vector-icons/AntDesign'


export default function New(props) {
 return (
   <TouchableOpacity onPress={props.onPress} style={styles.container} >
       <Image
       source={props.cover}
       style={styles.cover}
       />

      <View style={styles.content}>
        <Text style={styles.title}>{props.name}</Text>

        <View style={styles.dot}>
        </View>

        <Text style={styles.badge}>Novo</Text>

      </View>

      <Text style={styles.description}>
        {props.description}
      </Text>

      <View style={styles.footer}>
        <View style={{width: '80%'}}>
          <Text style={styles.price}>R$ 1204,90</Text>
        </View>
        <View style={{width: '20%'}}>
          <Icon name="pluscircle" size={24} />
        </View>
      </View>

   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
      marginTop: 20,
      backgroundColor: '#fff',
      height: 250,
      width: 200,
      elevation: 2,
      borderRadius: 10,
      padding: 15,
      marginRight: 30,
      marginLeft: 2,
      marginBottom: 5,
    },
    cover:{
      width: 170,
      height: 110,
      borderRadius: 10,
    },
    content:{
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    title:{
      fontSize:12,
      color: "#4f4a4a"
    },
    dot:{
      width:4,
      height:4,
      borderRadius:4,
      backgroundColor: "#8B0000",
      marginHorizontal: 4,
    },
    badge:{
      color: "#8B0000",
      fontSize:9,
    },
    description:{
      fontSize: 9,
      color: "#4f4a4a",
    },
    footer: {
      flexDirection: 'row',
      marginTop: 5,
      alignItems: 'center',
      width: '100%',
    },
    price:{
      fontSize: 15,
      
    }
});