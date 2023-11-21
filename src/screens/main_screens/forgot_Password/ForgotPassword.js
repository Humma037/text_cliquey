import { Text, View, email, Image } from 'react-native'
import React from 'react'
import ProceedButton from '../../../assets/components/reusable/ProceedButton'
import MainStyles from '../../../assets/styles/MainStyles'
import styles from './Styles'
import InputField from '../../../assets/components/reusable/InputField'

const ForgotPassword = ({ navigation }) => {

    const handleSignInPress = () => {
        navigation.navigate('Explore');
    };

    return (
        <View style={styles.Container}>
            <View>
                <View style={styles.image_style}>
                    <Image
                        source={require('../../../assets/Images/Logo.png')}
                        style={styles.logo_style}
                        resizeMode="cover"
                    />
                </View>
            </View>
            <View style={styles.pana_style}>
                <Image
                    source={require('../../../assets/Images/pana_fourth.png')}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.heading_style}>
                <Text style={[MainStyles.text_center, MainStyles.heading]}>Login to your Account</Text>
                <Text style={MainStyles.text_size}>Lorem ipsum dolor sit amet consectetur. Id congue pretium curabitur cras. Massa ultrices quam convallis phasellus</Text>
            </View>
            <View style={styles.TextInput}>
                <InputField
                    placeholder="Email"
                    secureTextEntry={false}
                />
            </View>
            <View style={styles.button_style}>
                <ProceedButton title="Confirm" onPress={handleSignInPress} />
            </View>
        </View>
    )
}

export default ForgotPassword