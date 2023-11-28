import { ScrollView, Text, View, email, Image } from 'react-native'
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
            <View style={styles.image_style}>
                <Image
                    source={require('../../../assets/Images/Logo.png')}
                    style={styles.logo_style}
                    resizeMode="cover"
                />
            </View>            
            <Text style={[MainStyles.text_center, MainStyles.heading, MainStyles.margin_top]}>Create Account</Text>
            <Text style={styles.text_style}>Lorem ipsum dolor sit amet consectetur. Id congue pretium curabitur cras. Massa ultrices quam convallis phasellus</Text>
            <View style={styles.sub_container}>
                <View style={styles.pana_style}>
                    <Image
                        source={require('../../../assets/Images/pana.png')}
                        resizeMode="cover"
                        style={styles.image_width}
                    />
                </View>
                <View style={styles.button_container}>
                    <View style={styles.button_style}>
                        <ProceedButton title="Log In" onPress={handleLoginPress} />
                    </View>
                    <View style={styles.button_style}>
                        <ProceedButton title="Sign Up" onPress={handleSignInPress} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CreateAccount
