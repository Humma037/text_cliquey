import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const PostButton = ({ onPress, iconComponent, buttonText }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    {iconComponent}
    <Text style={styles.buttonText}>{buttonText}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  buttonText: {
    color: 'black',
    fontSize: 9,
    margin:5
  },
});

export default PostButton;
