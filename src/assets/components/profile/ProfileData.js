import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import colors from '../../theme/Color';
import MainStyles from '../../styles/MainStyles';
import PostButton from '../reusable_buttons/PostButton';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomSheet from '../BottomSheet';
import PostBottomSheet from '../../components/PostBottomSheet';
import RBSheet from "react-native-raw-bottom-sheet";
import CommentsComp from '../CommentsComp'

const ProfileData = () => {
    const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
    const [PostbottomSheetVisible, setPostBottomSheetVisible] = useState(false);
    const refRBSheet = useRef();

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
    const handleCommentPress = () => {
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
                <View style={styles.post_Button}>
                    <PostButton
                        iconComponent={<AntDesign name="message1" size={14} color='black' style={styles.icon_image} />}
                        buttonText="341"
                        onPress={() => refRBSheet.current.open()}
                    />
                    <BottomSheet isVisible={bottomSheetVisible} onClose={toggleBottomSheet} />
                </View>
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

            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                customStyles={{
                    wrapper: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                    container: {
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    },
                }}
            >
                {/* Your ellipsis modal content */}
                <Text>Hello, this is your ellipsis modal!</Text>
            </RBSheet>

            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                height={550}
                customStyles={{
                    wrapper: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                    draggableIcon: {
                        backgroundColor: colors.DividingLine,
                        marginTop: 15
                    },
                    container: {
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                    },
                }}
            >
                <View contentContainerStyle={{ flexGrow: 1 }}>
                    <Text
                        style={{
                            color: 'black', textAlign: 'center',
                            fontSize: 13, paddingVertical: 15
                        }}
                    >
                        1.1K Peoples Like this post</Text>

                    <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', width: '100%' }} />
                    <ScrollView>
                        <View style={{ flexGrow: 1 }}>
                            <TouchableOpacity onPress={handleCommentPress} style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                                <Text style={{ color: 'black', fontSize: 12, paddingBottom: 25 }}>All Comments</Text>
                            </TouchableOpacity>
                            <View style={{ marginBottom: 15 }}>
                                <CommentsComp />
                                <View style={styles.comments_container}>
                                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginTop: 2, marginHorizontal: 7 }}>
                                        <Text style={{ color: 'black', fontSize: 11, paddingBottom: 5 }}>Like</Text>
                                    </TouchableOpacity>
                                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 2, marginHorizontal: 7, flexDirection: 'row' }}>
                                        <FontAwesome name="thumbs-o-up" color="black" size={14} />
                                        <Text style={{ color: 'black', fontSize: 11, paddingBottom: 3, marginLeft: 3 }}>1</Text>
                                    </View>
                                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginTop: 2, marginHorizontal: 7 }}>
                                        <Text style={{ color: 'black', fontSize: 11, paddingBottom: 5 }}>Reply</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ marginBottom: 15 }}>
                                <CommentsComp />
                                <View style={styles.comments_container}>
                                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginTop: 2, marginHorizontal: 7 }}>
                                        <Text style={{ color: 'black', fontSize: 11, paddingBottom: 5 }}>Like</Text>
                                    </TouchableOpacity>
                                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 2, marginHorizontal: 7, flexDirection: 'row' }}>
                                        <FontAwesome name="thumbs-o-up" color="black" size={14} />
                                        <Text style={{ color: 'black', fontSize: 11, paddingBottom: 3, marginLeft: 3 }}>1</Text>
                                    </View>
                                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginTop: 2, marginHorizontal: 7 }}>
                                        <Text style={{ color: 'black', fontSize: 11, paddingBottom: 5 }}>Reply</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ marginBottom: 15 }}>
                                <CommentsComp />
                                <View style={styles.comments_container}>
                                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginTop: 2, marginHorizontal: 7 }}>
                                        <Text style={{ color: 'black', fontSize: 11, paddingBottom: 5 }}>Like</Text>
                                    </TouchableOpacity>
                                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 2, marginHorizontal: 7, flexDirection: 'row' }}>
                                        <FontAwesome name="thumbs-o-up" color="black" size={14} />
                                        <Text style={{ color: 'black', fontSize: 11, paddingBottom: 3, marginLeft: 3 }}>1</Text>
                                    </View>
                                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginTop: 2, marginHorizontal: 7 }}>
                                        <Text style={{ color: 'black', fontSize: 11, paddingBottom: 5 }}>Reply</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </RBSheet>
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
        borderRadius: 50,
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
        marginHorizontal: 3
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
    comments_container: {
        flexDirection: 'row',
        marginLeft: '16%'
      },
});
