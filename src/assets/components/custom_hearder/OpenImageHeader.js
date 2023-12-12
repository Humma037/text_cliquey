import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../theme/Color';

const OpenImageHeader = ({ navigation, name, icon, backgroundColor, iconColor, nameColor, iconBackgroundColor }) => (
  <View style={[styles.header, { backgroundColor }]}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Entypo name={icon} size={20} style={[styles.bars_Icon, { color: iconColor, backgroundColor: iconBackgroundColor }]} />
    </TouchableOpacity>
    <View style={styles.name_container}>
      <Text style={[styles.name_style, { color: nameColor }]}>{name}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    width: '100%',
    position: 'relative',
    height: 60,
  },
  bars_Icon: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 25,
    position: 'absolute',
    left: 25,
    top: 13
  },
  name_container:{
    alignItems:'center',
    justifyContent:'center',
    height:60
  },
  name_style: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default OpenImageHeader;
