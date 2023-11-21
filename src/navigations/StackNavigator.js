import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/main_screens/login/Login';
import Register from '../screens/main_screens/signUp/Register'
import GetStarted from '../screens/main_screens/get_started/GetStarted'
import CreateAccount from '../screens/main_screens/create_account/CreateAccount'
import Home from '../screens/Home/Home'
import ForgotPassword from '../screens/main_screens/forgot_Password/ForgotPassword'
import Explore from '../screens/explore/Explore'

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Explore" component={Explore} />
    </Stack.Navigator>
  );
};

export default StackNav;