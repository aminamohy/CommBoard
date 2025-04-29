import { View , Text , TouchableOpacity } from "react-native"; 
import Members from "../components/Members";
import { useNavigation } from "@react-navigation/native";

export default function Home(){
    const navigation = useNavigation();
    return(
        <View style={{backgroundColor:"#800020"
            , width:"100%" , height:"100%", margin:"auto"}}>
            <Text style={{textAlign:"center", fontSize:25 , fontWeight:900, margin:"50",color:"white"}}>committees' score board</Text>

            <TouchableOpacity 
                style={{margin:10, backgroundColor:"white", padding: 10, borderRadius: 5}} 
                onPress={() => {navigation.navigate("Members",{ committee: "tech" })}}
            >
                <Text style={{color: "black", fontSize: 16}}>Technical</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={{margin:10, backgroundColor:"white", padding: 10, borderRadius: 5}} 
                onPress={() => {navigation.navigate("Members",{committee: "graphic" })}}
            >
                <Text style={{color: "black", fontSize: 16}}>Graphic</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={{margin:10, backgroundColor:"white", padding: 10, borderRadius: 5}} 
                onPress={() => {navigation.navigate("Members",{committee: "pr" })}}
            >
                <Text style={{color: "black", fontSize: 16}}>PR</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={{margin:10, backgroundColor:"white", padding: 10, borderRadius: 5}} 
                onPress={() => {navigation.navigate("Members",{committee: "video" })}}
            >
                <Text style={{color: "black", fontSize: 16}}>Video</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={{margin:10, backgroundColor:"white", padding: 10, borderRadius: 5}} 
                onPress={() => {navigation.navigate("Members",{committee: "smm" })}}
            >
                <Text style={{color: "black", fontSize: 16}}>SMM</Text>
            </TouchableOpacity>
        </View>
    );
}
