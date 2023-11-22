// CustomButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const PostButton = ({ onPress, iconName, buttonText }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <FontAwesome name={iconName} size={15} style={styles.icon} />
    <Text style={styles.buttonText}>{buttonText}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 25,
  },
  icon: {
    marginRight: 8,
    color: 'black',
  },
  buttonText: {
    color: 'black',
    fontSize: 12,
  },
});

export default PostButton;
