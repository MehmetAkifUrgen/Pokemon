import React,{useState,useEffect} from 'react';
// import store from "../store/pockemonSlice.js"; 
import { useSelector, useDispatch } from 'react-redux'
import { add, remove,pockemonList } from '../store/pockemonSlice.js'
import { Text, View,FlatList ,StyleSheet,TouchableOpacity,Image, Button} from 'react-native';

const Home = ({
    navigation,
}) => {
    const [data,setData]=useState([])
    // bunu favoriye taşı
    const list = useSelector(pockemonList)
    // dispatch kalacak
    const dispatch = useDispatch()

    
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [favorite,setFavorite]=useState([])

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
    
     const handlePress = ()=> {
        console.log('/*/*/*',list)
        dispatch(add("hasan"))
      }
      const removeData = ()=> {
        console.log('/*/*/*',list)
        dispatch(remove(1))
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
            <TouchableOpacity onPress={()=> handlePress() }   style={styles.pokemon}>
                <View style={styles.pokemon}>
                <Image style={{width:100,height:80}} source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`}}  ></Image>
                <Text> {item.name} </Text>
                </View>
            </TouchableOpacity>
        )
    }
    return(
        <View style={styles.container}>
            <View style={{backgroundColor:'pink',height:500,justifyContent:'center',alignItems:'center'}}>
                <Text> TEXT :{list} </Text>
                <Button title="sil" onPress={()=> removeData()} ></Button>
            </View>
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
    
         
        marginHorizontal:'0.6%',
        alignItems:'center',
        marginBottom:'2%',
        justifyContent:'center',
        
      },
})