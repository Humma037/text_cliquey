import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Explore from '../screens/explore/Explore';
import Profile from '../screens/profile_screen/Profile';
import colors from '../assets/theme/Color';

const Tab = createBottomTabNavigator();

const BottomBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 15,
          left: 25,
          right: 25,
          height: 70,
          backgroundColor: colors.seprator,
          borderRadius:45
        },
        tabBarInactiveTintColor: 'black',
        tabBarActiveTintColor: 'black',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <AntDesign
              name="home"
              color={focused ? 'black' : color}
              size={24}
              style={{
                backgroundColor: focused ? colors.orange_color : 'transparent',
                borderRadius: 20,
                padding: 8,
              }}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 10,
            color: 'black',
          },
          tabBarIconStyle: {
            color: 'black',
          },
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size, focused }) => (
            <AntDesign
              name="contacts"
              color={focused ? 'black' : color}
              size={24}
              style={{
                backgroundColor: focused ? colors.orange_color : 'transparent',
                borderRadius: 20,
                padding: 8,
              }}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 10,
            color: 'black',
          },
          tabBarIconStyle: {
            color: 'black',
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size, focused }) => (
            <AntDesign
              name="user"
              color={focused ? 'black' : color}
              size={24}
              style={{
                backgroundColor: focused ? colors.orange_color : 'transparent',
                borderRadius: 20,
                padding: 8,
              }}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 10,
            color: 'black',
          },
          tabBarIconStyle: {
            color: 'black',
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomBar;
