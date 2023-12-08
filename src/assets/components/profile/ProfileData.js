import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import colors from '../../theme/Color';
import MainStyles from '../../styles/MainStyles';
import PostButton from '../reusable_buttons/PostButton';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BottomSheet from '../BottomSheet';
import PostBottomSheet from '../../components/PostBottomSheet';

const ProfileData = () => {
    const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
    const [PostbottomSheetVisible, setPostBottomSheetVisible] = useState(false);

    const togglePostBottomSheet = () => {
        setPostBottomSheetVisible(!PostbottomSheetVisible);
    };
    const toggleBottomSheet = () => {
        setBottomSheetVisible(!bottomSheetVisible);
    };

    const openBottomSheet = () => {
        refRBSheet.current.open();
      };

    const navigation = useNavigation();

    const handleLikeButtonPress = () => {
        navigation.navigate('Likes');
    };
    const handleCommentButtonPress = () => {
        navigation.navigate('Comments');
    };
    const handleCompareButtonPress = () => {
        navigation.navigate('Compares');
    };
    const handleProfileImagePress = () => {
        navigation.navigate('Profile');
    };
    const handlePostImagePress = () => {
        navigation.navigate('PostImage');
    };

    return (
        <View style={styles.Container}>
            <View style={styles.data_direction}>
                <View style={MainStyles.Direction_Horizental}>
                    <TouchableOpacity onPress={handleProfileImagePress}>
                        <Image
                            source={require('../../Images/girls-dp.jpeg')}
                            style={styles.user_Icon}
                            resizeMode="cover"
                        />
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
                <TouchableOpacity style={styles.donts_icon} onPress={togglePostBottomSheet}>
                    {/* Replace <ThreeDots /> with FontAwesome */}
                    {/* <FontAwesome name="ellipsis-v" size={23} style={styles.ellipsis_Icon} /> */}
                    <PostBottomSheet isVisible={PostbottomSheetVisible} onClose={togglePostBottomSheet} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.post_image_container} onPress={handlePostImagePress}>
                <View style={styles.post_image}>
                    <Image
                        source={require('../../Images/Featured-Image.jpg')}
                        style={styles.background_Image}
                        resizeMode="cover"
                    />
                </View>
            </TouchableOpacity>
            <View style={styles.container_post_Button}>
                <TouchableOpacity>
                    <View style={styles.post_Button}>
                        <PostButton
                            iconComponent={<AntDesign name="like2" size={15} style={styles.icon_image} />}
                            buttonText="1.4k"
                        />
                    </View>
                </TouchableOpacity>
                {/* <View style={styles.post_Button}>
                    <PostButton
                        iconComponent={<AntDesign name="like2" size={15} style={styles.icon_image} />}
                        buttonText="1.4k"
                        onPress={openBottomSheet}
                    /> */}
                    <BottomSheet isVisible={bottomSheetVisible} onClose={toggleBottomSheet} />
                {/* </View> */}
                <TouchableOpacity>
                    <View style={styles.post_Button}>
                        <PostButton
                            onPress={handleCompareButtonPress}
                            iconComponent={<MaterialCommunityIcons name="select-compare" size={15} style={styles.icon_image} />}
                            buttonText="234"
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ProfileData;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    user_Icon: {
        width: 45,
        height: 45,
        // // backgroundColor: colors.seprator,
        // paddingHorizontal: 15,
        // paddingVertical: 10,
        borderRadius: 50,
        // color: colors.DividingLine,
        margin: 5,
    },
    data_direction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 17,
        paddingTop: '4%',
    },
    userData: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text_name: {
        fontSize: 12,
        fontWeight: 'bold',
        color: colors.BLACK,
        marginLeft: 5,
    },
    donts_icon: {},
    text_description: {
        fontSize: 11,
        color: colors.DividingLine,
        marginLeft: 5,
    },
    ellipsis_Icon: {
        color: colors.DividingLine,
    },
    post_image_container: {
        paddingHorizontal: 23,
    },
    container_post_Button: {
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: '15%',
        marginVertical: 3,
    },
    post_Button: {
        backgroundColor: colors.seprator,
        paddingHorizontal: 9,
        borderRadius: 15,
    },
    icon_image: {
        color: colors.BLACK,
    },
    dropdownContainer: {
        position: 'absolute',
        top: 70,
        right: 8,
        backgroundColor: colors.seprator,
        padding: 10,
        borderRadius: 10,
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        zIndex: 1,
    },
    dropdown_text: {
        color: colors.BLACK,
        fontSize: 12,
        marginVertical: 5,
    },
    background_Image: {
        width: '100%',
        height: 200,
        backgroundColor: colors.seprator,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginVertical: 10,
    },
});
