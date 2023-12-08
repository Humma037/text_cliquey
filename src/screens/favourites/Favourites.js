import React from 'react';
import { ScrollView, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';
import CategoriesHeader from '../../assets/components/custom_hearder/CategoriesHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FavouriteScreenComp from '../../assets/components/FavouriteScreenComp';

const Favourites = () => {
  const navigation = useNavigation();

  const handleSearch = (text) => {
    console.log('Search:', text);
  };

  const handleIcon1Press = () => {
    navigation.navigate('Explore');
  };

  const handleIcon2Press = () => {
    navigation.navigate('Design');
  };

  return (
    <View Style={styles.container}>
      <View style={styles.sub_container}>
        <TouchableOpacity onPress={handleIcon2Press}>
          <FontAwesome name="angle-left" size={30} style={styles.bars_Icon} icon="angle-left" />
        </TouchableOpacity>
        <View style={styles.searchbar_style}>
          <CategoriesHeader
            onSearch={handleSearch}
            // onIcon1Press={handleIcon1Press}
            // onIcon2Press={handleIcon2Press}
            icon1="heart"
            iconColor="red"
            isFavoriteScreen={true}
          />
        </View>
      </View>
      <ScrollView>

        {/* Scrollable content section */}
        <View style={styles.catgories_style}>
          <View style={styles.heading_second}>
            <Text style={styles.heading_Favorites}>Favorites</Text>
          </View>

          {/* Categories section */}
          {/* Row 1 */}
          <View style={styles.catgories_image_container}>
            <View style={styles.catgories_image_sub_container}>
              <View style={styles.catgories_margin}>
                <FavouriteScreenComp backgroundImage={require('../../assets/Images/mehndi_design3.jpg')} title="Mehndi Designs" isFavoriteScreen={true} />
              </View>
              <View style={styles.catgories_margin}>
                <FavouriteScreenComp backgroundImage={require('../../assets/Images/mehndi_design4.jpg')} title="Hair Style" isFavoriteScreen={true} style={styles.catgories_margin} />
              </View>
            </View>

            {/* Row 2 */}
            <View style={styles.catgories_image_sub_container}>
              <View >
                <View style={styles.catgories_margin}>
                  <FavouriteScreenComp backgroundImage={require('../../assets/Images/mehndi_design2.jpg')} title="Mehndi Designs" isFavoriteScreen={true} />
                </View>
              </View>
              <View >
                <View style={styles.catgories_margin}>
                  <FavouriteScreenComp backgroundImage={require('../../assets/Images/mehndi_design.jpg')} title="Hair Style" isFavoriteScreen={true} />
                </View>
              </View>
            </View>

            {/* Row 3 */}
            <View style={styles.catgories_image_sub_container}>
              <View >
                <View style={styles.catgories_margin}>
                  <FavouriteScreenComp backgroundImage={require('../../assets/Images/mehndi_design4.jpg')} title="Mehndi Designs" isFavoriteScreen={true} />
                </View>
              </View>
              <View >
                <View style={styles.catgories_margin}>
                  <FavouriteScreenComp backgroundImage={require('../../assets/Images/mehndi_design3.jpg')} title="Hair Style" isFavoriteScreen={true} />
                </View>
              </View>
            </View>
            {/* row 4 */}
            <View style={styles.catgories_image_sub_container}>
              <View >
                <View style={styles.catgories_margin}>
                  <FavouriteScreenComp backgroundImage={require('../../assets/Images/images_mehndi.jpg')} title="Mehndi Designs" isFavoriteScreen={true} />
                </View>
              </View>
              <View >
                <View style={styles.catgories_margin}>
                  <FavouriteScreenComp backgroundImage={require('../../assets/Images/mehndi_design2.jpg')} title="Hair Style" isFavoriteScreen={true} />
                </View>
              </View>
            </View>
            <View style={styles.last_catgorie_container}>
              <View style={styles.catgories_image_sub_container}>
                <View >
                  <View style={styles.catgories_margin}>
                    <FavouriteScreenComp backgroundImage={require('../../assets/Images/mehndi_design3.jpg')} title="Mehndi Designs" isFavoriteScreen={true} />
                  </View>
                </View>
                <View >
                  <View style={styles.catgories_margin}>
                    <FavouriteScreenComp backgroundImage={require('../../assets/Images/mehndi_design4.jpg')} title="Hair Style" isFavoriteScreen={true} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Favourites;
