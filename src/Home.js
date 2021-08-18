import React,{useState,useEffect} from 'react';
import { Text, View,FlatList ,StyleSheet,TouchableOpacity,Image, TouchableHighlight} from 'react-native';

const Home = ({
    navigation,
}) => {
    const [data,setData]=useState([])
    
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const  getPoke =async () => {
        
            fetch("https://pokeapi.co/api/v2/pokemon?limit=500&offset=0", {
            method: 'GET',
                }).then((response)=>response.json()).then((json)=>{setData(json.results)})
                .catch((err)=> {setIsLoading(false),
                    setError(err)} );
                
           
    }
    const _onPressButton =() => {
        alert('You tapped the button!')
      }
    
     const _onLongPressButton = ()=> {
        alert('You long-pressed the button!')
      }
    

    useEffect(() => {
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
         getPoke()
         setControl(true)
         setError(false)
       return (
         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <Text style={{ fontSize: 18}}>
             Error fetching data... Check your network connection!
          </Text>
        </View>
       );
     }

    

    const renderItem = ({item,index}) => {
        const url=item.url        
        return(
            <TouchableHighlight onPress={()=> navigation.navigate('Detail',{url}) } onLongPress={_onLongPressButton} underlayColor="white" style={styles.pokemon}>
                <View style={styles.pokemon}>
                <Image style={{width:100,height:80}} source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`}}  ></Image>
                <Text> {item.name} </Text>
                </View>
            </TouchableHighlight>
        )
    }
    return(
        <View style={styles.container}>
            <FlatList
            
                renderItem={renderItem}
                data={data}
                numColumns={4}
                initialNumToRender={7}
            
            />
        </View>
    )
}

export default Home;
const styles=StyleSheet.create({
    container:{
        flex: 1,
        
    },
    pokemon:{
    
        flex:1,  
        marginHorizontal:'0.6%',
        alignItems:'center',
        marginBottom:'2%',
        justifyContent:'center',
        
      },
})