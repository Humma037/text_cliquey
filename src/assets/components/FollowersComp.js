import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../theme/Color';

const FollowersComp = ({ activeColor }) => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonPress = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <View style={styles.Container}>
      <View style={styles.sub_container}>
        <View style={styles.textAndButtonContainer}>
          <View style={styles.user_profile}>
          <FontAwesome name="user" size={30} style={styles.user_Icon} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text_heading}>Mister Perfect</Text>
            <Text style={styles.text}>12:32 AM</Text>
          </View>
          <View >
            <View style={styles.button_sub_container}>
            <TouchableOpacity
                style={[styles.button, activeButton === 2 && { backgroundColor: activeColor }]}
                onPress={() => handleButtonPress(2)}
              >
                <Text style={styles.buttonText}>Follow Back </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, activeButton === 1 && { backgroundColor: activeColor }]}
                onPress={() => handleButtonPress(1)}
              >
                <Text style={styles.buttonText}>Message</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FollowersComp;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  sub_container: {
    flexDirection: 'row',
  },
  textAndButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
    backgroundColor: colors.seprator,
    paddingVertical: 7,
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
    paddingVertical: 8,
    borderRadius: 50,
    color: colors.DividingLine,
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
  button_sub_container: {
    flexDirection: 'row',
    margin: 5,
    marginTop:6
  },
  button: {
    // backgroundColor: '#eee',
    backgroundColor:colors.orange_color,
    paddingHorizontal: 7,
    borderRadius: 30,
    paddingVertical: 11,
    margin: 4,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 7,
  },
  user_profile:{
    marginTop:3
  }
});
