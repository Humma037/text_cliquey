import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SearchBarWithIcons from '../../assets/components/search_bar/CustomSearchBar';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import styles from './Styles';
import ProfileImage from '../../assets/components/profile/ProfileImage';
import SearchbarSecond from '../../assets/components/search_bar/SearchbarSecond';
import ProfileData from '../../assets/components/profile/ProfileData';

const Home = () => {
  const navigation = useNavigation();

  const handleSearch = (text) => {
    console.log('Search:', text);
  };

  const handleIcon1Press = () => {
    navigation.navigate('Setting');
  };

  const handleIcon2Press = () => {
    navigation.navigate('Notifications');
  };

  const handleSettingBarPress = () => {
    navigation.navigate('Setting');
  };

  const handleProfileImagePress = () => {
    navigation.navigate('Likes');
  };

  return (
    <View style={styles.Container}>
      <View style={styles.sub_container}>
        <TouchableOpacity onPress={handleSettingBarPress}>
          <FontAwesome6 name="bars" size={25} style={styles.bars_Icon} />
        </TouchableOpacity>
        <View style={styles.searchbar_style}>
          <SearchBarWithIcons
            onSearch={handleSearch}
            onIcon1Press={handleIcon1Press}
            onIcon2Press={handleIcon2Press}
            icon1="send-o"
            icon2="bell-ring-outline"
          />
        </View>
      </View>
      <ScrollView>
        <View style={styles.second_searchBar_container}>
            <SearchbarSecond />
        </View>
        <View style={styles.scrollableContent}>
          <View style={styles.ProfileData1}>
            <ProfileData />
          </View>
          <View style={styles.ProfileData}>
            <ProfileData />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

