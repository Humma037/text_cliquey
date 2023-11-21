import React from 'react';
import { View } from 'react-native';
import Carousel from '../../assets/components/Carousel';
import { Text } from 'react-native-paper';
import styles from './Style';
import MainStyles from '../../assets/styles/MainStyles';

const Explore = () => {
  const data = [
    { id: 1, image: require('../../assets/Images/image_six.png') },
    { id: 2, image: require('../../assets/Images/image_six.png') },
    { id: 3, image: require('../../assets/Images/image_six.png') },
  ];

  return (
    <View style={styles.container}>
        <Text style={styles.text_style}>Latest Trending Designs</Text>
      <Carousel data={data} />
      <Text style={MainStyles.heading_second}>Latest Trending Designs</Text>
    </View>
  );
};



export default Explore;
