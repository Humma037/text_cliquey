import {  Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import SecondHeader from '../../assets/components/custom_hearder/SecondHeader'
import styles from './Style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProfileImage from '../../assets/components/profile/ProfileImage';

const UploadPhoto = () => {
    return (
        <View style={styles.Container}>
            <SecondHeader name="Upload Photo" icon="angle-left" />
            <View style={styles.sub_container}>
                <ProfileImage />
                <View style={styles.data_container}>
                    <Text style={styles.user_name}>Lady Gaga</Text>
                    <Text style={styles.text_details}>Lorem ipsum doler milra dilrof</Text>
                </View>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Enter your bio..."
                    multiline
                    numberOfLines={4}
                    placeholderTextColor="#767676"
                    style={styles.text_nput}
                />
            </View>
            <View style={styles.profile_cover}>
                <FontAwesome name="image" size={25} style={styles.cover_Icon} />
                <Text style={styles.profile_cover_text}>Upload Cover photo</Text>
            </View>
            <TouchableOpacity style={styles.button_upload}>
                <Text style={styles.Button_text}>Upload</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UploadPhoto

