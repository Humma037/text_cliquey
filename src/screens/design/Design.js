import React from 'react';
import { ScrollView, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './Style';
import { useNavigation } from '@react-navigation/native';
import SearchBarWithIcons from '../../assets/components/search_bar/CustomSearchBar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CategoriesDesign from '../../assets/components/CategoriesDesign';

const Design = () => {
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

  return (
    <View Style={styles.container}>
      <View style={styles.sub_container}>
        <TouchableOpacity onPress={handleIcon2Press}>
          <FontAwesome size={35} style={styles.bars_Icon} icon="angle-left"/>
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
          <Text style={styles.text_style}>Mehndi Designs</Text>
          <ImageBackground
            source={require('../../assets/Images/Rectangle.png')}
            style={styles.image_style}
            resizeMode="cover"
          />
        </View>

        {/* Scrollable content section */}
        <View style={styles.catgories_style}>
          <View style={styles.heading_second}>
            <Text style={styles.heading_all_design}>All Designs</Text>
          </View>

          {/* Categories section */}
          {/* Row 1 */}
          <View style={styles.catgories_image_container}>
            <View style={styles.catgories_image_sub_container}>
              <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                <View style={styles.catgories_margin}>
                  <CategoriesDesign backgroundImage={require('../../assets/Images/Rectangle_one.png')} title="Mehndi Designs" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                <View style={styles.catgories_margin}>
                  <CategoriesDesign backgroundImage={require('../../assets/Images/Rectangle_two.png')} title="Hair Style" />
                </View>
              </TouchableOpacity>
            </View>

            {/* Row 2 */}
            <View style={styles.catgories_image_sub_container}>
              <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                <View style={styles.catgories_margin}>
                  <CategoriesDesign backgroundImage={require('../../assets/Images/Rectangle_one.png')} title="Mehndi Designs" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                <View style={styles.catgories_margin}>
                  <CategoriesDesign backgroundImage={require('../../assets/Images/Rectangle_two.png')} title="Hair Style" />
                </View>
              </TouchableOpacity>
            </View>

            {/* Row 3 */}
            <View style={styles.catgories_image_sub_container}>
              <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                <View style={styles.catgories_margin}>
                  <CategoriesDesign backgroundImage={require('../../assets/Images/Rectangle_one.png')} title="Mehndi Designs" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                <View style={styles.catgories_margin}>
                  <CategoriesDesign backgroundImage={require('../../assets/Images/Rectangle_two.png')} title="Hair Style" />
                </View>
              </TouchableOpacity>
            </View>
            {/* row 4 */}
            <View style={styles.catgories_image_sub_container}>
              <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                <View style={styles.catgories_margin}>
                  <CategoriesDesign backgroundImage={require('../../assets/Images/Rectangle_one.png')} title="Mehndi Designs" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                <View style={styles.catgories_margin}>
                  <CategoriesDesign backgroundImage={require('../../assets/Images/Rectangle_two.png')} title="Hair Style" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Design;
