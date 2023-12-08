import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../theme/Color';

const SecondHeader = ({ navigation, name, icon }) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <FontAwesome name={icon} size={30} style={styles.bars_Icon} />
    </TouchableOpacity>
    <Text style={styles.name_style}>{name}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingVertical: 20,
    position: 'relative',
  },
  bars_Icon: {
    backgroundColor: colors.orange_color,
    paddingHorizontal: 12,
    paddingBottom: 3,
    paddingVertical: 2,
    borderRadius: 25,
    color: colors.white,
    position: 'absolute',
    left: 25,
  },
  name_style: {
    fontWeight: 'bold',
    color: colors.BLACK,
    margin: 5,
    fontSize: 15,
    textAlign: 'center',
  },
});

export default SecondHeader;
