import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../theme/Color';
import { useNavigation } from '@react-navigation/native';

const CustomButton = ({ onPress, iconName, buttonText, iconColor, buttonColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button]}>
    <FontAwesome name={iconName} size={20} color={iconColor} style={styles.icon} />
    <Text style={styles.buttonText}>{buttonText}</Text>
  </TouchableOpacity>
);

const SearchbarSecond = ({ onSearch, onIcon1Press, onIcon2Press }) => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate('UploadPhoto');
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchbar_style}>
        <TextInput
          style={styles.search_Input}
          placeholder="Write Something..."
          onChangeText={(text) => onSearch(text)}
          placeholderTextColor={colors.DividingLine}
        />
        <CustomButton
          onPress={handleButtonPress} 
          iconName="image"
          buttonText="Upload image"
          iconColor={colors.customIconColor}
          buttonColor='#bfbfbf' 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search_Input: {
    height: 30,
    width: '54.5%',
    fontSize: 8,
    paddingHorizontal: 15,
    backgroundColor: colors.seprator,
    color: colors.BLACK,
    borderRadius: 25,
    padding:5
  },
  searchbar_style: {
    flexDirection: 'row',
    margin:10
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    padding:5,
    borderRadius: 25,
    backgroundColor:colors.seprator,
    height:30,
    marginHorizontal:7,
  },
  icon: {
    marginRight: 5,
    color: colors.BLACK,
    fontSize:12
  },
  buttonText: {
    color: colors.BLACK,
    fontSize: 7,
  },
});

export default SearchbarSecond;
