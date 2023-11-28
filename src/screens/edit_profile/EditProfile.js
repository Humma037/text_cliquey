import React, { useState } from 'react';
import { ScrollView, View, TouchableOpacity, TextInput } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './Style';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SecondHeader from '../../assets/components/custom_hearder/SecondHeader';

const EditProfile = () => {
    const navigation = useNavigation();

    const [name, setName] = useState('John Doe');
    const [bio, setBio] = useState('Lorem ipsum dolor sit amet.');

    const handleSaveChanges = () => {
        console.log('Name:', name);
        console.log('Bio:', bio);
    };

    const handleIcon2Press = () => {
        navigation.navigate('Favourites');
    };

    const handleProfilePress = () => {
        navigation.navigate('MainProfile');
    };

    const [activeButton, setActiveButton] = useState(1);

    const handleButtonPress = (buttonNumber) => {
        setActiveButton(buttonNumber);
    };

    const [activeTab, setActiveTab] = useState(1);

    const handleTabPress = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Header section */}
            <SecondHeader navigation={navigation} name="Edit Profile" icon="angle-left" />

            {/* Text and ImageBackground section */}
            <ScrollView>
                <View style={styles.profile}>
                    <TouchableOpacity >
                        <FontAwesome name="user" size={50} style={styles.user_Icon} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.profile_text}>Upload Profile Picture</Text>
                <View style={styles.profile_cover_container}>
                    <View style={styles.profile_cover}>
                        <FontAwesome name="image" size={30} style={styles.cover_Icon} />
                        <Text style={styles.profile_cover_text}>Upload Cover photo</Text>
                    </View>
                </View>
                <Text style={styles.upload_profile_cover_text}>Upload Cover photo</Text>
                {/* Change Name */}
                <View style={styles.container_dummy}>
                    <View style={styles.input_Container}>
                        <Text style={styles.label}>Change Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your name"
                            value={name}
                            onChangeText={(text) => setName(text)}
                            placeholderTextColor="#767676"
                        />
                    </View>

                    <View style={styles.input_Container}>
                        <Text style={styles.label}>Change Bio</Text>
                        <TextInput
                            style={[styles.input, styles.bioInput]}
                            placeholder="Enter your bio..."
                            multiline
                            numberOfLines={4}
                            value={bio}
                            onChangeText={(text) => setBio(text)}
                            placeholderTextColor="#767676"
                        />
                    </View>
                </View>

                {/* HorizontalButtons */}
                <View style={styles.button_container}>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            activeButton === 1 && styles.activeButton,
                            activeButton !== 1 && { borderColor: 'black' },
                        ]}
                        onPress={() => handleButtonPress(1)}
                    >
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.button,
                            activeButton === 2 && styles.activeButton,
                            activeButton !== 2 && { borderColor: 'black' },
                        ]}
                        onPress={() => handleButtonPress(2)}
                    >
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ScrollView>
    );
};

export default EditProfile;
