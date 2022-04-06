  import React from 'react';
  import {View,Text,StyleSheet,StatusBar} from 'react-native';
  import LinearGradient from 'react-native-linear-gradient';
  import Config from 'react-native-config';
  import {createNativeStackNavigator} from '@react-navigation/native-stack'
  import {NavigationContainer} from '@react-navigation/native'
  import Categories from './src/pages/Categories/Categories'
  import Meals from './src/pages/Meals/Meals'
  import MealDetail from './src/pages/MealDetail/MealDetail'
  import Starter from './src/pages/Starter/Starter';

  const Stack = createNativeStackNavigator();
  function App () {
    return(
     <NavigationContainer>
       <StatusBar hidden />
       <Stack.Navigator>
       <Stack.Screen name='Starter'
        options={{
          title:'',
          headerTitleAlign:'center',
          headerTitleStyle:{color:'white',fontWeight:'600',fontSize:32},
          headerStyle:{backgroundColor:'orange'},
          headerTintColor:'white'
        }}
        component={Starter} />
        <Stack.Screen name='Categories'
        options={{
          title:'Menu',
          headerTitleAlign:'center',
          headerTitleStyle:{color:'white',fontWeight:'600',fontSize:32},
          headerStyle:{backgroundColor:'orange'},
          headerTintColor:'white'
        }}
        component={Categories} />
        <Stack.Screen  
        options={{
          title:'Meals',
          headerTitleAlign:'center',
          headerTitleStyle:{color:'white',fontWeight:'600',fontSize:32},
          headerStyle:{backgroundColor:'orange'},
          headerTintColor:'white'}}
        name='Meals' component={Meals} />
        <Stack.Screen 
        options={{
          title:'DETAIL',
          headerTitleAlign:'center',
          headerTitleStyle:{color:'white',fontWeight:'600',fontSize:32},
          headerStyle:{backgroundColor:'orange'},
          headerTintColor:'white'
        }}
        name='MealDetail' component={MealDetail} />
       </Stack.Navigator>
     </NavigationContainer>
    )
  }

  export default App;