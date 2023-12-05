import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import colors from '../../theme/Color';
import MainStyles from '../../styles/MainStyles';
import PostButton from '../reusable_buttons/PostButton';
import { useNavigation } from '@react-navigation/native';
import { ThreeDots, Like } from '../../svg/index'
import BottomSheet from '../BottomSheet';

const ProfileData = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!bottomSheetVisible);
  };
    
    const handleDropdownPress = () => {
        setDropdownVisible(!isDropdownVisible);
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
                        {/* <FontAwesome name="user" size={22} style={styles.user_Icon} /> */}
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
                {/* dots_svg */}
                <TouchableOpacity style={styles.donts_icon} onPress={handleDropdownPress}>
                    <ThreeDots width={23} height={23} />
                </TouchableOpacity>
                {isDropdownVisible && (
                    <View style={styles.dropdownContainer}>
                        <Text style={styles.dropdown_text}>Save </Text>
                        <Text style={styles.dropdown_text}>Copy link to post</Text>
                        <Text style={styles.dropdown_text}>Unfollow Lady Gaga</Text>
                        <Text style={styles.dropdown_text}>Repost Post</Text>
                    </View>
                )}
            </View>
            <TouchableOpacity style={styles.post_image_container} onPress={handlePostImagePress}>
                <View style={styles.post_image}>
                    {/* <FontAwesome name="image" size={45} style={styles.icon_image} /> */}
                    <Image
                        source={require('../../Images/Featured-Image.jpg')}
                        style={styles.background_Image}
                        resizeMode="cover"
                    />
                </View>
            </TouchableOpacity>
            <View style={styles.container_post_Button}>
                <TouchableOpacity >
                    <View style={styles.post_Button}>
                        <PostButton
                            onPress={handleLikeButtonPress}
                            iconComponent={<Like />}
                            buttonText="1.1k"
                        />
                    </View>
                </TouchableOpacity>
                <View style={styles.post_Button}>
                    <PostButton
                        onPress={toggleBottomSheet}
                        iconComponent={<Like />}
                        buttonText="2.1k"
                    />
                </View>
                {/* <BottomSheet isVisible={bottomSheetVisible} onClose={toggleBottomSheet} /> */}
                <BottomSheet isVisible={bottomSheetVisible} onClose={toggleBottomSheet} />
                <View style={styles.post_Button}>
                    <PostButton
                        onPress={handleCompareButtonPress}
                        iconComponent={<Like />}
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
        paddingTop: '4%'
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
        // paddingHorizontal: 10
    },
    text_description: {
        fontSize: 9.5,
        color: colors.DividingLine,
        marginLeft: 5
    },
    ellipsis_Icon: {
        color: colors.DividingLine,
    },
    post_image_container: {
        paddingHorizontal: 23
    },
    // post_image: {
    //     width: '100%',
    //     height: 200,
    //     backgroundColor: colors.seprator,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     borderRadius: 10,
    //     marginVertical: 10
    // },
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
        zIndex: 1
    },
    dropdown_text: {
        color: colors.BLACK,
        fontSize: 12,
        marginVertical: 5
    },
    background_Image: {
        width: '100%',
        height: 200,
        backgroundColor: colors.seprator,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginVertical: 10
    },

});
