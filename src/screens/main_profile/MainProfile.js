import React, { useState } from 'react';
import { ScrollView, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './Style';
import { useNavigation } from '@react-navigation/native';
import MainStyles from '../../assets/styles/MainStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const MainProfile = () => {
    const navigation = useNavigation();

    const handleProfilePress = () => {
        navigation.navigate('EditProfile');
    };

    const [activeTab, setActiveTab] = useState(1);

    const handleTabPress = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <ImageBackground
                    source={require('../../assets/Images/Rectangle_profile.png')}
                    style={styles.imageContainer}
                    resizeMode="cover"
                />
                <FontAwesome name="camera" size={18} style={styles.photo_cover_Icon} />
                <FontAwesome name="camera" size={14} style={styles.profile_edit_Icon} />
                <FontAwesome name="user" size={50} style={styles.user_Icon} />
            </View>
            <View style={styles.user_data}>
                <Text style={styles.user_name}>Lady Gaga</Text>
                <Text style={styles.description_text}>Lorem ipsum consectetur dolor sit amet consectetur pulvinar .</Text>
            </View>
            <View style={styles.accountsDirection}>
                <View style={styles.margin}>
                    <Text style={styles.numbers_heading}>3.9M</Text>
                    <Text style={styles.heading}>Compares</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.margin}>
                    <Text style={styles.numbers_heading}>35.5K</Text>
                    <Text style={styles.heading}>Followers</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.margin}>
                    <Text style={styles.numbers_heading}>3.2K</Text>
                    <Text style={styles.heading}>Following</Text>
                </View>
            </View>

            <View style={styles.button_container}>
                <TouchableOpacity style={styles.button} onPress={handleProfilePress}>
                    <Text style={styles.buttonText}>Edit Profile</Text>
                </TouchableOpacity>
            </View>

            {/* HorizontalTextTabs */}
            <View style={styles.text_container}>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 1 && styles.activeTab]}
                    onPress={() => handleTabPress(1)}
                >
                    <Text style={styles.tabText}>All</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.tab, activeTab === 2 && styles.activeTab]}
                    onPress={() => handleTabPress(2)}
                >
                    <Text style={styles.tabText}>Images</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.tab, activeTab === 3 && styles.activeTab]}
                    onPress={() => handleTabPress(3)}
                >
                    <Text style={styles.tabText}>Videos</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.images_container}>
                <View style={styles.images_sub_container}>
                    <Image
                        source={require('../../assets/Images/Rectangle_272.png')}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <Image
                        source={require('../../assets/Images/Rectangle_273.png')}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <Image
                        source={require('../../assets/Images/Rectangle_275.png')}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
                <View style={styles.images_sub_container}>
                    <Image
                        source={require('../../assets/Images/Rectangle_276.png')}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <Image
                        source={require('../../assets/Images/Rectangle_279.png')}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <Image
                        source={require('../../assets/Images/Rectangle_2711.png')}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
                <View style={styles.images_sub}>
                    <View style={styles.images_sub_container}>
                        <Image
                            source={require('../../assets/Images/Rectangle_272.png')}
                            style={styles.image}
                            resizeMode="cover"
                        />
                        <Image
                            source={require('../../assets/Images/Rectangle_273.png')}
                            style={styles.image}
                            resizeMode="cover"
                        />
                        <Image
                            source={require('../../assets/Images/Rectangle_275.png')}
                            style={styles.image}
                            resizeMode="cover"
                        />
                    </View>
                </View>
            </ScrollView>
        </ScrollView>
    );
};

export default MainProfile;
