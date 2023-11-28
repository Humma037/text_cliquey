import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../theme/Color';
import MainStyles from '../../styles/MainStyles';
import PostButton from '../reusable_buttons/PostButton';
import { useNavigation } from '@react-navigation/native';

const ProfileData = () => {
    const navigation = useNavigation();

    const handleLikeButtonPress = () => {
        navigation.navigate('Likes');
    };
    const handleCommentButtonPress = () => {
        navigation.navigate('Setting');
    };
    const handleCompareButtonPress = () => {
        navigation.navigate('Compares');
    };
    const handleProfileImagePress = () => {
        navigation.navigate('MainProfile');
    };

    return (
        <View style={styles.Container}>
            <View style={styles.data_direction}>
                <View style={MainStyles.Direction_Horizental}>
                    <TouchableOpacity onPress={handleProfileImagePress}>
                        <FontAwesome name="user" size={22} style={styles.user_Icon} />
                    </TouchableOpacity>
                    <View style={styles.userData}>
                        <View>
                            <Text style={styles.text_name}>Lady Gaga</Text>
                            <Text style={styles.text_description}>
                                Lorem ipsum doler milra dilrof
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.donts_icon}>
                    <FontAwesome
                        name="ellipsis-v"
                        size={28}
                        style={styles.ellipsis_Icon}
                    />
                </View>
            </View>
            <View style={styles.post_image_container}>
                <View style={styles.post_image}>
                    <FontAwesome name="image" size={45} style={styles.icon_image} />
                </View>
            </View>
            <View style={styles.container_post_Button}>
                <TouchableOpacity >
                    <View style={styles.post_Button}>
                        <PostButton
                            onPress={handleLikeButtonPress}
                            iconComponent={<FontAwesome name="thumbs-o-up" size={12} color="black" />}
                            buttonText="1.1k"
                        />
                    </View>
                </TouchableOpacity>
                <View style={styles.post_Button}>
                    <PostButton
                        onPress={handleCommentButtonPress}
                        iconComponent={<AntDesign name="message1" size={12} color="black" />}
                        buttonText="1.1k"
                    />
                </View>
                <View style={styles.post_Button}>
                    <PostButton
                        onPress={handleCompareButtonPress}
                        iconComponent={<MaterialCommunityIcons name="select-compare" size={12} color="black" />}
                        buttonText="1.1k"
                    />
                </View>
            </View>
        </View>
    );
};

export default ProfileData

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    user_Icon: {
        width: 45,
        height: 45,
        backgroundColor: colors.seprator,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 50,
        color: colors.DividingLine,
        margin: 5
    },
    data_direction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 17,
        paddingTop: '8%'
    },
    userData: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text_name: {
        fontSize: 11,
        fontWeight: 'bold',
        color: colors.BLACK,
        marginLeft: 5
    },
    donts_icon: {
        paddingHorizontal: 15
    },
    text_description: {
        fontSize: 9,
        color: colors.DividingLine,
        marginLeft: 5
    },
    ellipsis_Icon: {
        color: colors.DividingLine,
    },
    post_image_container: {
        paddingHorizontal: 20
    },
    post_image: {
        width: '100%',
        height: 200,
        backgroundColor: colors.seprator,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginVertical: 10
    },
    container_post_Button: {
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: '15%',
        marginVertical: 3
    },
    post_Button: {
        backgroundColor: colors.seprator,
        paddingHorizontal: 9,
        borderRadius: 15,
    },
    icon_image: {
        color: colors.DividingLine,
    },

});
