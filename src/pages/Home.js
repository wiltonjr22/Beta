import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { ScrollView,TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import New from '../components/New';

export default function Home() {
  const navigation = useNavigation();

 return (
   <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: "#fff" }} >
       <View style={styles.header} >
         <View style={styles.inputArea} >
           < Icon name="search" size={24} color="#000" />
           <TextInput placeholder="O que esta procurando?" style={styles.input} />
          </View> 
        </View>
       
        <View style={styles.contentNew}>
          <Text style={styles.title} >Novidades</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal:15 }} >
          <New 
          cover={require('../assets/house1.jpg')} 
          name="Casa de Praia"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24hrs."
          onpress={()=> navigation.navigate('detail')} 
          />

           <New 
          cover={require('../assets/house2.jpg')} 
          name="Casa Fortaleza"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24hrs."
          onpress={()=> {}}
          />

           <New 
          cover={require('../assets/house3.jpg')} 
          name="Rancho Floripa"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24hrs."
          onpress={()=> {}}
          />

        </ScrollView>
  
   </ScrollView>
  );
}

const styles= StyleSheet.create({
  header:{
    paddingHorizontal:15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 20,
  },
  inputArea: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    backgroundColor: '#fff',
    elevation: 2,
    height: 37,
    borderRadius: 10,
  },
  input: {
    paddingHorizontal: 10,
    fontSize: 13,
    width: '90%',
  },
  contentNew: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  title:{
    paddingHorizontal: 15,
    fontSize: 18,
    color: '#4f4a4a',
  }
});