import { StyleSheet, Text, View, email, Image } from 'react-native'
import React from 'react'
import ProceedButton from '../../../assets/components/reusable_buttons/ProceedButton'
import MainStyles from '../../../assets/styles/MainStyles'
import styles from './Styles'
import CustomHeader from '../../../assets/components/custom_hearder/CustomHeader'

const CreateAccount = ({ navigation }) => {

    const handleLoginPress = () => {
        navigation.navigate('Login');
    };

    const handleSignInPress = () => {
        navigation.navigate('Register');
    };

    return (
        <View style={styles.Container}>
            <CustomHeader navigation={navigation} style={styles.header_style}/>
            <Text style={[MainStyles.text_center, MainStyles.heading]}>Create Account</Text>
            <Text style={MainStyles.text_size}>Lorem ipsum dolor sit amet consectetur. Id congue pretium curabitur cras. Massa ultrices quam convallis phasellus</Text>
            <View style={styles.pana_style}>
                <Image
                    source={require('../../../assets/Images/pana.png')}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.button_style}>
                <ProceedButton title="Log In" onPress={handleLoginPress} />
            </View>
            <View style={styles.button_style}>
                <ProceedButton title="Sign Up" onPress={handleSignInPress} />
            </View>
        </View>
    )
}

export default CreateAccount
