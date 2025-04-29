import { View , Text, TextInput , Button} from "react-native";
import { useEffect , useState } from "react";
import axios from "axios"
export default function Member({route}) {
    const {id} = route.params;
    const [data , setData] = useState([]);
    const [score , setScore] = useState("");
    const update =  ()=>{
         const updatedscore = parseInt(score);
         axios.patch(`http://localhost:8800/members/${id}`,{
            score : updatedscore,
    })
         .then(()=>{
            setScore(String(updatedscore));
            alert("data has been updated successfully")
         })
         .catch((err)=>{
            console.log("error", err);
            alert(err)
         })
    }
    useEffect(()=>{
       axios.get(`http://localhost:8800/members/${id}`)
       .then((response)=>{
          setData(response.data[0]);
          setScore(String(response.data[0].score));
          console.log(response.data)
       })
       .catch((err)=>{
         console.log("error ", err)
       })
    },[])
    
    return(
        <View style={{width: "100%", 
         padding: 20, 
         backgroundColor: "#f9f9f9", 
         borderRadius: 10 ,
         backgroundColor:"#800020",
         flex:1
       }}>
          

           <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 , color:"white"}}>score</Text>
           <TextInput style={{
      width: "100%",
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      padding: 10,
      marginBottom: 15,
      backgroundColor: "#fff"
    }} value={score} onChangeText={(text)=>setScore(text)}/>
    <View><Button title="Save changes" onPress={update}/></View>
        </View>
    );
}
