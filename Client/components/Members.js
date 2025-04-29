import { StyleSheet, Text, View ,Button } from 'react-native';
import { useState , useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import axios from "axios"
export default function members({route} ){
    const navigation = useNavigation();
    const [data , setData] = useState([]);
    const {committee} = route.params;
    useEffect(()=>{
        axios.get(`http://192.168.1.14:8800/members/committee/${committee}`)
        .then((response)=>{
            setData(response.data);
        })
        .catch((err)=>{
            console.log("error fetching the data" )
        })
    },[])
    return(
        <View style={{ backgroundColor:"#800020",flex:1}}>
        <View  style={styles.table}>
        
        <View style={styles.row}>
          <Text style={styles.cell}>ID</Text>
          <Text style={styles.cell}>Name</Text>
          <Text style={styles.cell}>Score</Text>
          {/* <Text >details</Text> */}
        </View>
  
        
        {data.map((item) => (
          <View key={item.id} style={styles.row}>
            <Text style={styles.cell}>{item.id}</Text>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.score}</Text>
            <Button style={styles.cell} onPress={()=>{
                navigation.navigate("Member", {id :item.id})
            }}
              title="edit"/>
          </View>
        ))}
      </View>
      </View>
    
    );
}
const styles = StyleSheet.create({
    table: {
      margin: 10,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 5,
      overflow: 'hidden',
      backgroundColor:"white"
    },
    row: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      padding: 10,
    },
    cell: {
      flex: 1,
      textAlign: 'center',
      fontSize: 16,
    },
  });
