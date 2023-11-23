import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import SecondHeader from '../../assets/components/custom_hearder/SecondHeader'
import MainStyles from '../../assets/styles/MainStyles'
import styles from './Style';
import Notification from '../../assets/components/NotificationComp';


const Notifications = () => {
  return (
    <View style={styles.Container}>
      <SecondHeader name="Notifications" />
      <View style={styles.sub_container}>
        <View style={styles.notification}>
          <Text style={styles.text}>You have 2 new notifications!</Text>
          <Text style={styles.text_heading}>Today</Text>
          <ScrollView style={styles.notification_container}>
            <View style={styles.notification_details}>
              <Notification />
            </View>
            <View style={styles.notification_details}>
              <Notification />
            </View>
            <View style={styles.notification_details}>
              <Notification />
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.second_sub_container}>
        <View style={styles.notification}>
          <Text style={styles.text_heading}>This Week</Text>
          <ScrollView style={styles.this_week_notification}>
            <View style={styles.notification_details}>
              <Notification />
            </View>
            <View style={styles.notification_details}>
              <Notification />
            </View>
            <View style={styles.notification_details}>
              <Notification />
            </View>
            <View style={styles.notification_details}>
              <Notification />
            </View>
            <View style={styles.notification_details}>
              <Notification />
            </View>
            <View style={styles.notification_details}>
              <Notification />
            </View>
            <View style={styles.notification_details}>
              <Notification />
            </View>
            <View style={styles.notification_details}>
              <Notification />
            </View>
            <View style={styles.notification_details}>
              <Notification />
            </View>
            <View style={styles.notification_details}>
              <Notification />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default Notifications

