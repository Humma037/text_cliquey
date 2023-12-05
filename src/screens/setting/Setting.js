import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './Style';
import SettingDropDown from '../../assets/components/SettingDropDown';
import { Avatar, Cloud_computing, Shuttle, Comments } from '../../assets/svg/index';

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
            <Comments
              width="30"
              height="30"
              style={styles.setting_options_icon}
            />
            <Text style={styles.setting_options_text}>Messages</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.setting_options} onPress={() => navigation.navigate('Downloads')}>
            <Cloud_computing
              width="30"
              height="30"
              style={styles.setting_options_icon}
            />
            <Text style={styles.setting_options_text}>Downloads</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.setting_options_container}>
          <TouchableOpacity style={styles.setting_options} onPress={() => navigation.navigate('Home')}>
            <Comments
              width="30"
              height="30"
              style={styles.setting_options_icon}
            />
            <Text style={styles.setting_options_text}>Photos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.setting_options} onPress={() => navigation.navigate('Home')}>
            <Comments
              width="30"
              height="30"
              style={styles.setting_options_icon}
            />
            <Text style={styles.setting_options_text}>Videos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.setting_options_container}>
          <TouchableOpacity style={styles.setting_options} onPress={() => navigation.navigate('Likes')}>
            <Comments
              width="30"
              height="30"
              style={styles.setting_options_icon}
            />
            <Text style={styles.setting_options_text}>Likes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.setting_options} onPress={() => navigation.navigate('Favourites')}>
            <Comments
              width="30"
              height="30"
              style={styles.setting_options_icon}
            />
            <Text style={styles.setting_options_text}>Favorites</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.setting_options_container}>
          <TouchableOpacity style={styles.setting_options} onPress={() => navigation.navigate('Followers')}>
            <Comments
              width="30"
              height="30"
              style={styles.setting_options_icon}
            />
            <Text style={styles.setting_options_text}>Followers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.setting_options} onPress={() => navigation.navigate('Following')}>
            <Comments
              width="30"
              height="30"
              style={styles.setting_options_icon}
            />
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

