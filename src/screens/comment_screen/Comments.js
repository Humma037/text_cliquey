import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import SecondHeader from '../../assets/components/custom_hearder/SecondHeader'
import styles from './Style';
import CommentsComp from '../../assets/components/CommentsComp';
import { useNavigation } from '@react-navigation/native';

const Comments = () => {
  const navigation = useNavigation({navigation});

  return (
    <View style={styles.Container}>
      <SecondHeader navigation={navigation} name="Comments" icon="angle-left" />
      <View style={styles.sub_container}>
      <Text style={styles.text}>1.1K Peoples comments on this post</Text>
      <View  style={styles.line}/>
        <View style={styles.notification}>
          <ScrollView style={styles.notification_container}>
            <View style={styles.notification_details}>
              <CommentsComp />
            </View>
            <View style={styles.notification_details}>
              <CommentsComp />
            </View>
            <View style={styles.notification_details}>
              <CommentsComp />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default Comments

