import { StyleSheet, Text, View, email, Image } from 'react-native'
import React from 'react'
import ProceedButton from '../../../assets/components/reusable/ProceedButton'
import MainStyles from '../../../assets/styles/MainStyles'
import styles from './Styles'
import InputField from '../../../assets/components/reusable/InputField'
import ClickableText from '../../../assets/components/reusable/ClickableText'
import CustomHeader from '../../../assets/components/CustomHeader'

const Register = ({ navigation }) => {

  const handleSignInPress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.Container}>
      <CustomHeader navigation={navigation} style={styles.header_style} />
      <View style={styles.pana_style}>
        <Image
          source={require('../../../assets/Images/pana_third.png')}
          resizeMode="cover"
        />
      </View>
      <Text style={[MainStyles.text_center, MainStyles.heading]}>Login to your Account</Text>
      <Text style={MainStyles.text_size}>Lorem ipsum dolor sit amet consectetur. Id congue pretium curabitur cras. Massa ultrices quam convallis phasellus</Text>
      <View style={styles.TextInput}>
        <InputField
          placeholder="Email"
          secureTextEntry={false}
        />
      </View>
      <View style={styles.TextInput}>
        <InputField
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <ClickableText
        text="Forgot password?"
        onPress={() => {
          navigation.navigate('ForgotPassword');
        }}
        style={styles.Clickable_Text}
      />
      <View style={styles.button_style}>
        <ProceedButton title="Login" onPress={handleSignInPress} />
      </View>
      <View style={MainStyles.Direction_Horizental}>
        <Text style={styles.account_text}>Don’t have an account?</Text>
        <ClickableText
          text="Sign Up"
          onPress={() => {
            navigation.navigate('Register');
          }}
          style={styles.account_Register}
        />
      </View>
    </View>
  )
}

export default Register