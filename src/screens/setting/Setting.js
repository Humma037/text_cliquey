import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import styles from './Style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SettingDropDown from '../../assets/components/SettingDropDown';

const Setting = () => {
  return (
    <View style={styles.Container}>
      {/* bar_Icon */}
      <FontAwesome name="bars" style={styles.bar_Icon} />
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
        <View style={styles.setting_options_container}>
          <View style={styles.setting_options}>
            <FontAwesome name="comment-o" style={styles.bar_Icon} />
            <Text style={styles.setting_options_text}>Messages</Text>
          </View>
          <View style={styles.setting_options}>
            <FontAwesome name="cloud-download" style={styles.bar_Icon} />
            <Text style={styles.setting_options_text}>Downloads</Text>
          </View>
        </View>
        <View style={styles.setting_options_container}>
          <View style={styles.setting_options}>
            <FontAwesome name="photo" style={styles.bar_Icon} />
            <Text style={styles.setting_options_text}>Photos</Text>
          </View>
          <View style={styles.setting_options}>
            <FontAwesome name="cloud-download" style={styles.bar_Icon} />
            <Text style={styles.setting_options_text}>Videos</Text>
          </View>
        </View>
        <View style={styles.setting_options_container}>
          <View style={styles.setting_options}>
            <FontAwesome name="thumbs-o-up" style={styles.bar_Icon} />
            <Text style={styles.setting_options_text}>Likes</Text>
          </View>
          <View style={styles.setting_options}>
            <FontAwesome name="heart-o" style={styles.bar_Icon} />
            <Text style={styles.setting_options_text}>Favorites</Text>
          </View>
        </View>
        <View style={styles.setting_options_container}>
          <View style={styles.setting_options}>
            <FontAwesome name="group" style={styles.bar_Icon} />
            <Text style={styles.setting_options_text}>Followers</Text>
          </View>
          <View style={styles.setting_options}>
            <FontAwesome name="user" style={styles.bar_Icon} />
            <Text style={styles.setting_options_text}>Following</Text>
          </View>
        </View>
        {/* <View style={styles.setting_last_options_container}>
          <View style={styles.setting_options}>
            <FontAwesome name="group" style={styles.bar_Icon} />
            <Text style={styles.setting_options_text}>Compares</Text>
          </View>
        </View> */}
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
            { text: 'Help', icon: 'microphone' },
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

