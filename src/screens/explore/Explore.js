import React from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import Carousel from '../../assets/components/Carousel';
import { Text } from 'react-native-paper';
import styles from './Style';
import { useNavigation } from '@react-navigation/native';
import SearchBarWithIcons from '../../assets/components/search_bar/CustomSearchBar';
import MainStyles from '../../assets/styles/MainStyles';
import ProfileImage from '../../assets/components/profile/ProfileImage';
import Categories from '../../assets/components/Categories';

const Explore = () => {
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
  const data = [
    { id: 1, image: require('../../assets/Images/image_six.png') },
    { id: 2, image: require('../../assets/Images/image_six.png') },
    { id: 3, image: require('../../assets/Images/image_six.png') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.searchbar_style}>
        <ProfileImage />
        <View>
          <SearchBarWithIcons
            onSearch={handleSearch}
            onIcon1Press={handleIcon1Press}
            onIcon2Press={handleIcon2Press}
          />
        </View>
      </View>
      <Text style={styles.text_style}>Latest Trending Designs</Text>
      <Carousel data={data} />
      <ScrollView style={styles.catgories_style}>
        <View style={styles.heading_second}>
          <Text style={MainStyles.heading_second}>All Categories</Text>
        </View>
        <View style={[MainStyles.Direction_Horizental,]}>
          <TouchableOpacity onPress={() => navigation.navigate('Design')}>
            <View style={styles.catgories_margin}>
              <Categories backgroundImage={require('../../assets/Images/one.png')} title="Mehndi Designs" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Design')}>
            <View style={styles.catgories_margin}>
              <Categories backgroundImage={require('../../assets/Images/two.png')} title="Hair Style" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={[MainStyles.Direction_Horizental,]}>
          <TouchableOpacity onPress={() => navigation.navigate('Design')}>
            <View style={styles.catgories_margin}>
              <Categories backgroundImage={require('../../assets/Images/three.png')} title="Mehndi Designs" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Design')}>
            <View style={styles.catgories_margin}>
              <Categories backgroundImage={require('../../assets/Images/four.png')} title="Mehndi Designs" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={[MainStyles.Direction_Horizental,]}>
          <TouchableOpacity onPress={() => navigation.navigate('Design')}>
            <View style={styles.catgories_margin}>
              <Categories backgroundImage={require('../../assets/Images/five.png')} title="Mehndi Designs" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Design')}>
            <View style={styles.catgories_margin}>
              <Categories backgroundImage={require('../../assets/Images/one.png')} title="Mehndi Designs" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};



export default Explore;
