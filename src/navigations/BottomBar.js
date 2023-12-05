// BottomBar.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Explore from '../screens/explore/Explore';
import MainProfile from '../screens/main_profile/MainProfile';
import colors from '../assets/theme/Color';
import { Avatar, Home_bar, Shuttle } from '../assets/svg/index';

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
                    height: 75,
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
                    tabBarIcon: ({ color, size, focused }) => (
                        <Home_bar
                            width={size}
                            height={size}
                            fill={focused ? colors.orange_color : color}
                        />
                    ),
                    tabBarItemStyle: {
                        padding: 15,
                    },
                }}
            />
            <Tab.Screen
                name="Contact"
                component={Explore}
                options={{
                    tabBarLabel: 'Explore',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Shuttle
                            width={size}
                            height={size}
                            fill={focused ? colors.orange_color : color}
                        />
                    ),
                    tabBarItemStyle: {
                        padding: 15,
                    },
                }}
            />
            <Tab.Screen
                name="User"
                component={MainProfile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Avatar
                            width={size}
                            height={size}
                            fill={focused ? colors.orange_color : color}
                        />
                    ),
                    tabBarItemStyle: {
                        padding: 15,
                    },
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomBar;
