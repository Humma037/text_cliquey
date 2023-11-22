import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../theme/Color';
import MainStyles from '../styles/MainStyles';
import PostButton from './reusable_buttons/PostButton';

const ProfileData = () => {
    return (
        <View style={styles.Container}>
            <View style={styles.data_direction}>
                <View style={MainStyles.Direction_Horizental}>
                    <FontAwesome name="user" size={30} style={styles.user_Icon} />
                    <View style={styles.userData}>
                        <View >
                            <Text style={styles.text_name}>Lady Gaga</Text>
                            <Text style={styles.text_description}>Lorem ipsum doler milra dilrof</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <FontAwesome name="ellipsis-v" size={35} style={styles.ellipsis_Icon} />
                </View>
            </View>
            <View style={styles.post_image}>
                <FontAwesome name="image" size={55} style={styles.icon_image} />
            </View>
            <View style={MainStyles.Direction_Horizental}>
                <View style={styles.post_Button}>
                    <PostButton
                        // onPress={handleButtonPress}
                        iconName="thumbs-o-up"
                        buttonText="1.1k"
                    />
                </View>
                <View style={styles.post_Button}>
                    <PostButton
                        // onPress={handleButtonPress}
                        iconName="commenting"
                        buttonText="234"
                    />
                </View>
                <View style={styles.post_Button}>
                    <PostButton
                        // onPress={handleButtonPress}
                        iconName="share"
                        buttonText="13"
                    />
                </View>
            </View>
        </View>
    )
}

export default ProfileData

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    user_Icon: {
        width: 60,
        height: 60,
        backgroundColor: colors.seprator,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 50,
        color: colors.DividingLine,
        margin: 5
    },
    data_direction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 325,
        alignItems: 'center',
    },
    userData: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text_name: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.BLACK,
        marginLeft: 5
    },
    text_description: {
        fontSize: 10,
        color: colors.BLACK,
        marginLeft: 7
    },
    ellipsis_Icon: {
        color: colors.DividingLine,
        marginLeft: 10,
    },
    post_image: {
        backgroundColor: colors.seprator,
        width: 330,
        height: 190,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        margin: 10,
    },
    post_Button: {
        backgroundColor: colors.seprator,
        paddingHorizontal: 9,
        borderRadius: 20,
        marginLeft: 25
    },
    icon_image:{
        color:colors.DividingLine
    }
});
