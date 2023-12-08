import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Explore from '../screens/explore/Explore';
import colors from '../assets/theme/Color';
import MainProfile from '../screens/main_profile/MainProfile';
import {ThreeDots} from '../../svg/index'
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();

const BottomBar = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 10,
                    left: 30,
                    right: 30,
                    borderRadius: 40,
                    height: 70,
                    backgroundColor: colors.seprator, 
                },
                tabBarInactiveTintColor: 'black',
                tabBarActiveTintColor: colors.orange_color,
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="home" color={color} size={size} />
                        
                    ),
                    tabBarItemStyle: {
                        padding: 13,
                    },
                }}
            />
            <Tab.Screen
                name="Contact"
                component={Explore}
                options={{
                    tabBarLabel: 'Explore',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="rocket1" color={color} size={size} />
                    ),
                    tabBarItemStyle: {
                        padding: 13,
                    },
                }}
            />
            <Tab.Screen
                name="User"
                component={MainProfile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user-o" color={color} size={size} />
                    ),
                    tabBarItemStyle: {
                        padding: 13,
                    },
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomBar;