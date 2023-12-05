import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../theme/Color';

const LikesComp = () => {
  const handleButtonPress = () => {
    // Handle button press logic here
  };

  return (
    <View style={styles.Container}>
      <View style={styles.sub_container}>
        <View style={styles.textAndButtonContainer}>
          <FontAwesome name="user" size={30} style={styles.user_Icon} />
          <View style={styles.textContainer}>
            <Text style={styles.text_heading}>Mister Perfect</Text>
            <Text style={styles.text}>12:32 AM</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.button}
            //   onPress={handleButtonPress}
            >
              <Text style={styles.buttonText}>View Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LikesComp;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  sub_container: {
    flexDirection: 'row',
  },
  textAndButtonContainer: {
    flexDirection: 'row',
    width: '97%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: colors.seprator,
    paddingVertical: 8,
    borderRadius: 25,
  },
  textContainer: {
    margin: 10,
  },
  user_Icon: {
    width: 50,
    height: 50,
    backgroundColor: colors.themeLightGrey,
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 50,
    color: colors.DividingLine,
    marginTop:3
  },
  text_heading: {
    fontWeight: 'bold',
    fontSize: 10,
    color: colors.light_black,
  },
  text: {
    fontSize: 8,
    color: colors.DividingLine,
    marginTop: 4,
  },
  button: {
    backgroundColor: '#eee',
    paddingHorizontal: 9,
    borderRadius: 30,
    paddingVertical: 9,
    margin: 10,
    borderWidth:0.5,
    borderColor:colors.BLACK
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 8,
  },
});
