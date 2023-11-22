import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../theme/Color';

const ProfileImage = () => {
  return (
    <View>
          <FontAwesome name="user" size={30} style={styles.user_Icon} />
    </View>
  )
}

export default ProfileImage

const styles = StyleSheet.create({
    user_Icon:{
        width:60,
        height:60,
        backgroundColor:colors.seprator,
        paddingHorizontal:20,
        paddingVertical:15,
        borderRadius:50,
        color:colors.DividingLine,
        margin:5
    }
})