import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../theme/Color';

const CustomButton = ({ onPress, iconName, buttonText, iconColor, buttonColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button]}>
    <FontAwesome name={iconName} size={20} color={iconColor} style={styles.icon} />
    <Text style={styles.buttonText}>{buttonText}</Text>
  </TouchableOpacity>
);

const SearchbarSecond = ({ onSearch, onIcon1Press, onIcon2Press }) => (
  <View style={styles.container}>
    <View style={styles.searchbar_style}>
    <TextInput
        style={styles.search_Input}
        placeholder="Write Something..."
        onChangeText={(text) => onSearch(text)}
      />
      <CustomButton
        onPress={() => console.log('Button pressed')}
        iconName="image"
        buttonText="Upload image"
        iconColor={colors.customIconColor}
        buttonColor='#bfbfbf' 
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search_Input: {
    height: 35,
    width: '55%',
    fontSize: 10,
    paddingHorizontal: 15,
    backgroundColor: colors.themeLightGrey,
    color: colors.BLACK,
    borderRadius: 25,
    margin:3
  },
  searchbar_style: {
    flexDirection: 'row',
    // alignItems: 'center',
    // paddingHorizontal: 16,
    // height: 70,
    margin:12
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 25,
    backgroundColor:colors.themeLightGrey,
    height:35,
    margin:3
  },
  icon: {
    marginRight: 5,
    color: colors.BLACK,
    fontSize:15
  },
  buttonText: {
    color: colors.BLACK,
    fontSize: 7,
  },
});

export default SearchbarSecond;
