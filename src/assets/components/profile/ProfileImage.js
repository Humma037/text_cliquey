import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../theme/Color';

const ProfileImage = () => {
  return (
    <View>
      {/* <FontAwesome name="user" size={17} style={styles.user_Icon} /> */}
      <Image
        source={require('../../Images/Hijab-Dp.jpg')}
        style={styles.user_Icon}
        resizeMode="cover"
      />
    </View>
  )
}

export default ProfileImage

const styles = StyleSheet.create({
  user_Icon: {
    width: 38,
    height: 38,
    backgroundColor: colors.seprator,
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 50,
    color: colors.DividingLine,
  }
})