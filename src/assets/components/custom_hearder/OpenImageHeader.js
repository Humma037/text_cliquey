import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../theme/Color';

const OpenImageHeader = ({ navigation, name, icon, backgroundColor, iconColor, nameColor, iconBackgroundColor }) => (
  <View style={[styles.header, { backgroundColor }]}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Entypo name={icon} size={20} style={[styles.bars_Icon, { color: iconColor, backgroundColor: iconBackgroundColor }]} />
    </TouchableOpacity>
    <Text style={[styles.name_style, { color: nameColor }]}>{name}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    width: '100%', 
    // paddingHorizontal: '5%',
    paddingVertical: 20,
  },
  bars_Icon: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 25,
    position:'absolute',
    left:15
  },
  name_style: {
    fontWeight: 'bold',
    // alignItems: 'center',
    fontSize: 15,
    // marginRight: '30%',
    textAlign:'center',
    marginTop:2
  },
});

export default OpenImageHeader;
