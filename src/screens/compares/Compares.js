import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import SecondHeader from '../../assets/components/custom_hearder/SecondHeader'
import styles from './Style';
import FollowersComp from '../../assets/components/FollowersComp';
import colors from '../../assets/theme/Color';
import { useNavigation } from '@react-navigation/native';

const Compares = () => {
    const navigation = useNavigation({navigation});

    return (
        <View style={styles.Container}>
      <SecondHeader navigation={navigation} name="Compares" icon="angle-left" />
            <View style={styles.second_sub_container}>
                <ScrollView style={styles.notification}>
                    <View style={styles.data_container}>
                        <Text style={styles.text_heading}>Compares</Text>
                        <Text style={styles.text}>1.1k Compares</Text>
                    </View>
                    <View style={styles.this_week_notification}>
                        <View style={styles.notification_details}>
                            <FollowersComp activeColor={colors.light_white} />
                        </View>
                        <View style={styles.notification_details}>
                        <FollowersComp activeColor={colors.light_white} />
                        </View>
                        <View style={styles.notification_details}>
                        <FollowersComp activeColor={colors.light_white} />
                        </View>
                        <View style={styles.notification_details}>
                        <FollowersComp activeColor={colors.light_white} />
                        </View>
                        <View style={styles.notification_details}>
                        <FollowersComp activeColor={colors.light_white} />
                        </View>
                        <View style={styles.notification_details}>
                        <FollowersComp activeColor={colors.light_white} />
                        </View>
                        <View style={styles.notification_details}>
                        <FollowersComp activeColor={colors.light_white} />
                        </View>
                        <View style={styles.notification_details}>
                        <FollowersComp activeColor={colors.light_white} />
                        </View>
                        <View style={styles.notification_details}>
                        <FollowersComp activeColor={colors.light_white} />
                        </View>
                        <View style={styles.notification_details}>
                        <FollowersComp activeColor={colors.light_white} />
                        </View>
                        <View style={styles.notification_details}>
                        <FollowersComp activeColor={colors.light_white} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default Compares

