import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import colors from '../theme/Color';

const Categories = ({ backgroundImage, title }) => {
  const navigation = useNavigation();

  const handlePress = () => {
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
        {/* <FontAwesome name="heart-o" size={18} color="black" style={styles.icons}/> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background_Image: {
    // flex: 1,
    width: 165,
    height: 150,
    position: 'absolute',
  },
  icons_Container: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 120,
    width: 165,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    height:30

  },
  text: {
    fontSize: 10,
    textAlign:'center',
    // paddingHorizontal:10,
    color:colors.BLACK,
    marginTop:5
  },
  icons:{
    marginTop:5
  }
});

export default Categories;
