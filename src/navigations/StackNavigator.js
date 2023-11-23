import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/main_screens/login/Login';
import Register from '../screens/main_screens/signUp/Register'
import GetStarted from '../screens/main_screens/get_started/GetStarted'
import CreateAccount from '../screens/main_screens/create_account/CreateAccount'
import ForgotPassword from '../screens/main_screens/forgot_Password/ForgotPassword'
import BottomBar from './BottomBar';
import Design from '../screens/design/Design';
import Favourites from '../screens/favourites/Favourites';
import EditProfile from '../screens/edit_profile/EditProfile';
import MainProfile from '../screens/main_profile/MainProfile';
import Setting from '../screens/setting/Setting';
import Notifications from '../screens/notifications/Notifications';
import Followers from '../screens/followers/Followers';
import Following from '../screens/following/Following';
import Compares from '../screens/compares/Compares';
import Likes from '../screens/likes/Likes';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="Home" component={BottomBar} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Explore" component={BottomBar} />
      <Stack.Screen name="Profile" component={BottomBar} />
      <Stack.Screen name="Design" component={Design} />
      <Stack.Screen name="Favourites" component={Favourites} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="MainProfile" component={MainProfile} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Followers" component={Followers} />
      <Stack.Screen name="Following" component={Following} />
      <Stack.Screen name="Compares" component={Compares} />
      <Stack.Screen name="Likes" component={Likes} />
    </Stack.Navigator>
  );
};

export default StackNav;