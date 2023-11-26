import React from 'react';
import { ScrollView, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './Style';
import { useNavigation } from '@react-navigation/native';
import SearchBarWithIcons from '../../assets/components/search_bar/CustomSearchBar';
import ProfileImage from '../../assets/components/profile/ProfileImage';
import Categories from '../../assets/components/Categories';
import Carousel from '../../assets/components/Carousel';

const Explore = () => {
  const navigation = useNavigation();

  const handleSearch = (text) => {
    console.log('Search:', text);
  };

  const handleIcon1Press = () => {
    navigation.navigate('Explore');
  };

  const handleIcon2Press = () => {
    navigation.navigate('Favourites');
  };

  const data = [
    { id: 1, image: require('../../assets/Images/image_six.png') },
    { id: 2, image: require('../../assets/Images/image_six.png') },
    { id: 3, image: require('../../assets/Images/image_six.png') },
  ];

  return (
    <View Style={styles.container}>
      <View style={styles.sub_container}>
        <TouchableOpacity onPress={handleIcon2Press}>
          <View style={styles.Profile_Image}>
            <ProfileImage />
          </View>
        </TouchableOpacity>
        <View style={styles.searchbar_style}>
          <SearchBarWithIcons
            onSearch={handleSearch}
            onIcon1Press={handleIcon1Press}
            onIcon2Press={handleIcon2Press}
            icon1="send-o"
            icon2="heart-o"
          />
        </View>
      </View>
      <ScrollView>
        <View style={styles.image_Container}>
          <Text style={styles.text_style}>Latest Trending Designs</Text>
          <View style={styles.slide_Container}>
            <Carousel data={data} />
          </View>
          <ImageBackground
            source={require('../../assets/Images/Rectangle.png')}
            style={styles.image_style}
            resizeMode="cover"
          />
        </View>
      </ScrollView>

      {/* Scrollable content section */}
      <ScrollView>
        <View style={styles.catgories_style}>
          <View style={styles.heading_second}>
            <Text style={styles.heading_all_categories}>All Categories</Text>
          </View>

          {/* Categories section */}
          {/* Row 1 */}
          <View style={styles.catgories_image_container}>
            <View style={styles.catgories_image_sub_container}>
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

            {/* Row 2 */}
            <View style={styles.catgories_image_sub_container}>
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

            {/* Row 3 */}
            <View style={styles.catgories_image_sub_container}>
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
            {/* row 4 */}
            <View style={styles.catgories_image_sub_container}>
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
          </View>
        </View>
      </ScrollView>
    </View >
  );
};

export default Explore;
