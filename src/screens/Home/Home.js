import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SearchBarWithIcons from '../../assets/components/search_bar/CustomSearchBar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './Styles';
import ProfileImage from '../../assets/components/profile/ProfileImage';
import SearchbarSecond from '../../assets/components/search_bar/SearchbarSecond';
import ProfileData from '../../assets/components/profile/ProfileData';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSearch = (text) => {
    console.log('Search:', text);
  };

  const handleIcon1Press = () => {
    navigation.navigate('Setting');
  };

  const handleIcon2Press = () => {
    navigation.navigate('Setting');
  };

  const handleSettingBarPress = () => {
    navigation.navigate('Setting');
  };

  return (
    <View style={styles.Container}>
      <View style={styles.sub_ontainer}>
        <TouchableOpacity onPress={handleSettingBarPress}>
          <FontAwesome name="bars" size={35} style={styles.bars_Icon} />
        </TouchableOpacity>
        <View style={styles.searchbar_style}>
          <SearchBarWithIcons
            onSearch={handleSearch}
            onIcon1Press={handleIcon1Press}
            onIcon2Press={handleIcon2Press}
            icon1="send-o"
            icon2="bell-o"
          />
        </View>
      </View>
      <View style={styles.second_searchBar_container}>
        <ProfileImage />
        <View style={styles.SearchbarSecond}>
          <SearchbarSecond />
        </View>
      </View>

      <ScrollView>
        <View style={styles.scrollableContent}>
          <ProfileData />
          <ProfileData />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

