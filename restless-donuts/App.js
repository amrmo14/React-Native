import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Features from './components/Features';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Movies from './components/Movies';
import Contact from './components/ContactUs';
import MovieDetails from './components/MovieDetails';
import TODO from './components/TODO'
// You can import from local files
import AssetExample from './components/AssetExample';
const Drawer = createDrawerNavigator();
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { Avatar } from '@rneui/themed';
import { Icon } from '@rneui/themed';

export default function App() {
  const icons = [
    { name: 'home', title: 'Home', component: Home },
    { name: 'scissors', title: 'Features', component: Features },
    { name: 'images', title: 'Gallery', component: Gallery },
    { name: 'brush', title: 'TODO', component: TODO },
    { name: 'video', title: 'Movies', component: Movies },
    { name: 'video', title: 'MovieDetails', component: MovieDetails },
    { name: 'phone', title: 'Contact', component: Contact },
  ];
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#544966',
            width: 240,
            color: 'white',
          },
        }}>
        {icons.map((u, i) => {
          return (
            <Drawer.Screen
              name={u.title}
              component={u.component}
              options={{
                drawerIcon: ({ focused, size }) => (
                  <Icon
                    name={u.name}
                    type="entypo"
                    size={size}
                    color={focused ? 'white' : 'grey'}
                  />
                ),
              }}
            />
          );
        })}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
