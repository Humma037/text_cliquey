import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../theme/Color';

const SearchBarWithIcons = ({ onSearch, onIcon1Press, onIcon2Press }) => (
  <View style={styles.container}>
    <View style={styles.searchbar_style}>
    <TextInput
      style={styles.search_Input}
      placeholder="Search..."
      onChangeText={(text) => onSearch(text)}
    />
    </View>
    
    <TouchableOpacity onPress={onIcon1Press} style={styles.iconContainer}>
    <AntDesign name="google" size={40} style={styles.backIcon} />
    </TouchableOpacity>

    <TouchableOpacity onPress={onIcon2Press} style={styles.iconContainer}>
    <AntDesign name="google" size={40} style={styles.backIcon} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
  flex:1
  },
  search_Input: {
    width:'65%',
    height: 45,
    fontSize: 14,
    paddingHorizontal: 15,
    backgroundColor:colors.themeLightGrey,
    color:colors.BLACK,
    borderRadius:25,
  },
  iconContainer: {
    padding: 8,
  },
  searchbar_style:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  }
});

export default SearchBarWithIcons;
