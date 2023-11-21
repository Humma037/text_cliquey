// HomeScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import SearchBarWithIcons from '../../assets/components/CustomSearchBar';

const HomeScreen = ({ navigation }) => {
  const handleSearch = (text) => {
    console.log('Search:', text);
  };

  const handleIcon1Press = () => {
    console.log('Icon 1 Pressed');
  };

  const handleIcon2Press = () => {
    console.log('Icon 2 Pressed');
  };

  return (
    <View>
      <SearchBarWithIcons
        onSearch={handleSearch}
        onIcon1Press={handleIcon1Press}
        onIcon2Press={handleIcon2Press}
      />
    </View>
  );
};

export default HomeScreen;
