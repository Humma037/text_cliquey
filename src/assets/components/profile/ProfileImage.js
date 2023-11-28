import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../theme/Color';

const ProfileImage = () => {
  return (
    <View>
          <FontAwesome name="user" size={25} style={styles.user_Icon} />
    </View>
  )
}

export default ProfileImage

const styles = StyleSheet.create({
    user_Icon:{
        width:50,
        height:50,
        backgroundColor:colors.seprator,
        paddingHorizontal:16,
        paddingVertical:10,
        borderRadius:50,
        color:colors.DividingLine,
    }
})