import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import SecondHeader from '../../assets/components/custom_hearder/SecondHeader'
import styles from './Style';
import FollowersComp from '../../assets/components/FollowersComp';
import colors from '../../assets/theme/Color';


const Following = () => {
    return (
        <View style={styles.Container}>
            <SecondHeader name="Following" icon="angle-left"/>
            <View style={styles.sub_container}>
                <View style={styles.notification}>
                    <View style={styles.data_container}>
                        <Text style={styles.text_heading}>New</Text>
                        <Text style={styles.text}>You have 2 new notifications!</Text>
                    </View>
                    <ScrollView style={styles.notification_container}>
                        <View style={styles.notification_details}>
                            <FollowersComp activeColor={colors.color_red}/>
                        </View>
                        <View style={styles.notification_details}>
                        <FollowersComp activeColor={colors.color_red}/>
                        </View>
                        <View style={styles.notification_details}>
                        <FollowersComp activeColor={colors.color_red}/>
                        </View>
                    </ScrollView>
                </View>
            </View>
            <View style={styles.second_sub_container}>
                <View style={styles.notification}>
                    <View style={styles.data_container}>
                        <Text style={styles.text_heading}>All</Text>
                        <Text style={styles.text}>1.1k Followers</Text>
                    </View>
                    <ScrollView style={styles.this_week_notification}>
                        <View style={styles.notification_details}>
                        <FollowersComp activeColor={colors.color_red}/>
                        </View>
                        <View style={styles.notification_details}>
                        <FollowersComp activeColor={colors.color_red}/>
                        </View>
                        <View style={styles.notification_details}>
                        <FollowersComp activeColor={colors.color_red}/>
                        </View>
                        <View style={styles.notification_details}>
                        <FollowersComp activeColor={colors.color_red}/>
                        </View>
                        <View style={styles.notification_details}>
                        <FollowersComp activeColor={colors.color_red}/>
                        </View>
                        <View style={styles.notification_details}>
                        <FollowersComp activeColor={colors.color_red}/>
                        </View>
                        <View style={styles.notification_details}>
                        <FollowersComp activeColor={colors.color_red}/>
                        </View>
                        <View style={styles.notification_details}>
                        <FollowersComp activeColor={colors.color_red}/>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default Following

