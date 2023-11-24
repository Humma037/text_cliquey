// CustomButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const PostButton = ({ onPress, iconName, buttonText }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <FontAwesome name={iconName} size={12} style={styles.icon} />
    <Text style={styles.buttonText}>{buttonText}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  icon: {
    marginRight: 4,
    color: 'black',
  },
  buttonText: {
    color: 'black',
    fontSize: 9,
  },
});

export default PostButton;
