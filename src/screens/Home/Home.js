import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SearchBarWithIcons from '../../assets/components/search_bar/CustomSearchBar';
import MainStyles from '../../assets/styles/MainStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './Styles';
import ProfileImage from '../../assets/components/ProfileImage';
import SearchbarSecond from '../../assets/components/search_bar/SearchbarSecond';
import ProfileData from '../../assets/components/ProfileData';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSearch = (text) => {
    console.log('Search:', text);
  };

  const handleIcon1Press = () => {
    navigation.navigate('Explore');
  };

  const handleIcon2Press = () => {
    navigation.navigate('Explore');
  };

  return (
    <View style={styles.Container}>
      <View style={MainStyles.Direction_Horizental}>
        <TouchableOpacity onPress={handleIcon2Press}>
          <FontAwesome name="bars" size={35} style={styles.bars_Icon} />
        </TouchableOpacity>
        <View style={styles.searchbar_style}>
          <SearchBarWithIcons
            onSearch={handleSearch}
            onIcon1Press={handleIcon1Press}
            onIcon2Press={handleIcon2Press}
          />
        </View>
      </View>
      <View style={styles.sub_container}>
        <View style={MainStyles.Direction_Horizental}>
          <ProfileImage />
          <View style={styles.SearchbarSecond}>
            <SearchbarSecond />
          </View>
        </View>
      </View>

      {/* Scrollable content */}
      <ScrollView style={styles.scrollableContent}>
        <ProfileData />
        <View style={styles.sub}><ProfileData /></View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
