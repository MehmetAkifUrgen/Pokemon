import React,{useState,useEffect} from 'react';
import { Text, View ,StyleSheet, Image,ActivityIndicator} from 'react-native';


const componentName = ({
    route,navigation
}) => {


    const {url}=route.params
    const [data,setData]=useState([])
    const [control, setControl] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getPoke = () => {
        
        fetch(url, {
        method: 'GET',
            }).then((response)=>response.json()).then((json)=>{setData(json),setIsLoading(false),setControl(true)})
            .catch((err)=> {
                setIsLoading(false),setError(err)} );  
    }
    const getAbilities = () => {
        
        fetch(url, {
        method: 'GET',
            }).then((response)=>response.json()).then((json)=>{setData(json),setIsLoading(false),setControl(true)})
            .catch((err)=> {
                setIsLoading(false),setError(err)} );  
    }


    useEffect(() => {
        setIsLoading(true);
        getPoke()
    }, [])
    if (isLoading) {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <ActivityIndicator size="large" color="#5500dc" />
          </View>
        );
     }
     if (error) {
        setControl(true)
        setError(false)
        console.log("dsfsdfsdf",data)
       return (
         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <Text style={{ fontSize: 18}}>
             Error fetching data... Check your network connection!
          </Text>
        </View>
       );
     }
     if(control){
         return(
             <View style={styles.container}>
                 <View style={styles.header}>
                     <Image resizeMode="contain" style={{width:'50%',height:'80%'}} source={{uri:data.sprites["other"]["official-artwork"]["front_default"]}}></Image>
                     <Text> {data.abilities[0]["ability"]["name"]} </Text>
                 </View>
             </View>
         )
     }

     return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <ActivityIndicator size="large" color="#5500dc" />
        </View>
      );
}

export default componentName;
const styles=StyleSheet.create({
    container:{
        flex: 1,
        
    },
    header:{
       width: '100%',
       height: '40%',
       justifyContent:'center',
       alignItems:'center'
    }
})