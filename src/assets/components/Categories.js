import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Categories = ({ backgroundImage, title }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    // Navigate to the new screen here
    navigation.navigate('Design');
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      {/* Background Image */}
      <Image
        source={backgroundImage}
        style={styles.background_Image}
        resizeMode="cover"
      />

      {/* Icons */}
      <View style={styles.icons_Container}>
        <Text style={styles.text}>{title}</Text>
        <FontAwesome name="heart-o" size={18} color="black" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background_Image: {
    flex: 1,
    width: 168,
    height: 155,
    position: 'absolute',
  },
  icons_Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 120,
    width: 160,
  },
  text: {
    fontSize: 10,
  },
});

export default Categories;
