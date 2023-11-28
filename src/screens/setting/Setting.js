import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import styles from './Style';
import SettingDropDown from '../../assets/components/SettingDropDown';

const Setting = () => {
  const navigation = useNavigation();

  const handleSettingBarPress = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.Container}>
      {/* bar_Icon */}
      <TouchableOpacity onPress={handleSettingBarPress}>
          <FontAwesome name="bars" style={styles.bars_Icon} />
        </TouchableOpacity>      
        <ScrollView>
        <View style={styles.sub_Container}>
          {/* user_profile */}
          <FontAwesome name="user" size={40} style={styles.user_Icon} />
          {/* photo_cover */}
          <View style={styles.cover_photo}>
            <Text style={styles.user_name}>Lady Gaga</Text>
            <Text style={styles.view_profile}>View Profile</Text>
          </View>
        </View>
        {/* setting_options */}
        {/* <ScrollView> */}
        <View style={styles.setting_options_container} >
          <TouchableOpacity style={styles.setting_options} onPress={() => navigation.navigate('Home')}>
            <MaterialCommunityIcons name="android-messages" style={styles.setting_options_icon} />
            <Text style={styles.setting_options_text}>Messages</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.setting_options} onPress={() => navigation.navigate('Home')}>
            <SimpleLineIcons name="cloud-download" style={styles.setting_options_icon} />
            <Text style={styles.setting_options_text}>Downloads</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.setting_options_container}>
          <TouchableOpacity style={styles.setting_options} onPress={() => navigation.navigate('Home')}>
            <MaterialIcons name="photo-library" style={styles.setting_options_icon} />
            <Text style={styles.setting_options_text}>Photos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.setting_options} onPress={() => navigation.navigate('Home')}>
            <MaterialCommunityIcons name="movie-open-play" style={styles.setting_options_icon} />
            <Text style={styles.setting_options_text}>Videos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.setting_options_container}>
          <TouchableOpacity style={styles.setting_options} onPress={() => navigation.navigate('Likes')}>
            <FontAwesome name="thumbs-o-up" style={styles.setting_options_icon} />
            <Text style={styles.setting_options_text}>Likes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.setting_options} onPress={() => navigation.navigate('Favorites')}>
            <FontAwesome name="heart-o" style={styles.setting_options_icon} />
            <Text style={styles.setting_options_text}>Favorites</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.setting_options_container}>
          <TouchableOpacity style={styles.setting_options} onPress={() => navigation.navigate('Followers')}>
            <FontAwesome6 name="users-line" style={styles.setting_options_icon} />
            <Text style={styles.setting_options_text}>Followers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.setting_options} onPress={() => navigation.navigate('Following')}>
            <SimpleLineIcons name="user-following" style={styles.setting_options_icon} />
            <Text style={styles.setting_options_text}>Following</Text>
          </TouchableOpacity>
        </View>
        <SettingDropDown
          heading="Settings & Privacy"
          gearIcon="cog"
          buttonData={[
            { text: 'Language', icon: 'language' },
            { text: 'Dark Mode', icon: 'moon-o' },
          ]}
        />
        <SettingDropDown
          heading="Help & Support"
          gearIcon="question-circle-o"
          buttonData={[
            { text: 'Help', icon: 'help-buoy-outline', iconLibrary: 'Ionicons' },
            { text: 'Support', icon: 'headphones' },
            { text: 'About', icon: 'info-circle' },
            { text: 'Report Problem', icon: 'warning' },
          ]}
        />
        <SettingDropDown
          heading="Logout & Delete"
          gearIcon="minus-square-o"
          buttonData={[
            { text: 'Logout', icon: 'circle-o-notch' },
            { text: 'Delete Account', icon: 'trash' },
          ]}
        />

      </ScrollView>
    </View>
  )
}

export default Setting

