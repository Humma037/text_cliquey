import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 
import colors from '../../theme/Color';

const SearchBarWithIcons = ({ onSearch, onIcon1Press, onIcon2Press, icon1, icon2, isFavoriteScreen }) => {
  const icon2Color = isFavoriteScreen ? 'red' : 'black';

  return (
    <View style={styles.container}>
      <View style={styles.searchbar_style}>
        <View style={styles.search_container}>
          {/* Use FontAwesome for the search icon */}
          <FontAwesome name="search" size={13} style={styles.search_Icon} />
          <TextInput
            style={styles.search_Input}
            placeholder="Search"
            placeholderTextColor="#888"
            onChangeText={onSearch}
          />
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={onIcon1Press} style={styles.Icon_conatiner}>
            {/* Use FontAwesome for the first icon */}
            <FontAwesome name={icon1} size={18} style={styles.back_Icon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={onIcon2Press} style={styles.Icon_conatiner}>
            {/* Use FontAwesome for the second icon */}
            <MaterialCommunityIcons name={icon2} size={18} style={[styles.back_Icon, { color: icon2Color }]} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SearchBarWithIcons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search_Input: {
    width: 180,
    fontSize: 11,
    padding: 5,
    backgroundColor: colors.seprator,
    borderRadius: 25,
  },
  iconContainer: {
    flexDirection: 'row',
    marginRight: 10,
  },
  searchbar_style: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 70,
  },
  Icon_conatiner:{
    backgroundColor: colors.seprator,
    marginLeft: 5,
    padding: 9,
    borderRadius: 20,
  },
  back_Icon: {
    color: colors.BLACK,
  },
  search_container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    paddingHorizontal: 10,
    width: 190,
    backgroundColor: colors.seprator,
    height: 36.5,
    marginRight:15
  },
  search_Icon:{
    color: colors.DividingLine
  }
});
