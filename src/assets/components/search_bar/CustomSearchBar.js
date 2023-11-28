import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../theme/Color';

// Modify SearchBarWithIcons component
const SearchBarWithIcons = ({ onSearch, onIcon1Press, onIcon2Press, icon1, icon2, isFavoriteScreen }) => {
  const icon2Color = isFavoriteScreen ? 'red' : 'black';

  return (
    <View style={styles.container}>
      <View style={styles.searchbar_style}>
        <TextInput
          style={[styles.search_Input, { color: 'black' }]}
          placeholder="Search"
          placeholderTextColor={colors.DividingLine}
          onChangeText={(text) => onSearch(text)}
        />
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={onIcon1Press}>
            <FontAwesome name={icon1} size={14} style={styles.back_Icon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={onIcon2Press}>
            <FontAwesome name={icon2} size={14} style={[styles.back_Icon, { color: icon2Color }]} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search_Input: {
    height: 33,
    width: 200,
    fontSize: 10,
    paddingHorizontal: 15,
    padding: 5,
    backgroundColor: colors.seprator,
    borderRadius: 25,
    margin:3
  },
  iconContainer: {
    flexDirection: 'row',
    marginRight: 8,
  },
  searchbar_style: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 70,
  },
  back_Icon: {
    color: colors.BLACK,
    backgroundColor: colors.seprator,
    margin: 3,
    padding: 9,
    borderRadius: 20,
  },
});

export default SearchBarWithIcons;
