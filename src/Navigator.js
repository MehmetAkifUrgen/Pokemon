/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home'
import Detail from './Detail'
import Favorite from './Favorite'
import {Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown:false
      }}
      tabBarOptions={{
        style: {
          height: hp('8%'),
          justifyContent: 'center',
          backgroundColor: '#FEFEFE'
          
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}

        options={{
          tabBarLabel:"",
          tabBarIcon: ({color, size}) => (
            <Image
              resizeMode="contain"
              source={require('../assets/home.png')}
              style={{height: hp('4%'), width: wp('7%')}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Favorited"
        component={Favorite}
        options={{
         
          tabBarLabel:"",
          tabBarIcon: ({color, size}) => (
            <Image
            resizeMode="contain"
              source={require('../assets/heart.png')}
              style={{height: hp('4%'), width: wp('7%')}}
            />
          ),
        }}
      />
       

    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      
      <Stack.Screen name="Main" component={BottomTabNavigator}  />
      <Stack.Screen name="Detail" component={Detail}  />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
