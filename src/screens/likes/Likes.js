import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import SecondHeader from '../../assets/components/custom_hearder/SecondHeader'
import styles from './Style';
import FollowersComp from '../../assets/components/FollowersComp';
import colors from '../../assets/theme/Color';
import LikesComp from '../../assets/components/LikesComp';


const Likes = () => {
    return (
        <View style={styles.Container}>
            <SecondHeader name="Likes" icon="angle-left"/>
            <View style={styles.second_sub_container}>
                <View style={styles.notification}>
                    <View style={styles.data_container}>
                        <Text style={styles.text_heading}>Likes</Text>
                        <Text style={styles.text}>1.1k Likes</Text>
                    </View>
                    <ScrollView style={styles.this_week_notification}>
                        <View style={styles.notification_details}>
                            <LikesComp />
                        </View>
                        <View style={styles.notification_details}>
                            <LikesComp />
                        </View>
                        <View style={styles.notification_details}>
                            <LikesComp />
                        </View>
                        <View style={styles.notification_details}>
                            <LikesComp />
                        </View>
                        <View style={styles.notification_details}>
                            <LikesComp />
                        </View>
                        <View style={styles.notification_details}>
                            <LikesComp />
                        </View>
                        <View style={styles.notification_details}>
                            <LikesComp />
                        </View>
                        <View style={styles.notification_details}>
                            <LikesComp />
                        </View>
                        <View style={styles.notification_details}>
                            <LikesComp />
                        </View>
                        <View style={styles.notification_details}>
                            <LikesComp />
                        </View>
                   
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default Likes

