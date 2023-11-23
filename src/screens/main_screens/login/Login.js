import { StyleSheet, Text, View, email, Image } from 'react-native'
import React from 'react'
import ProceedButton from '../../../assets/components/reusable_buttons/ProceedButton'
import MainStyles from '../../../assets/styles/MainStyles'
import styles from './Styles'
import InputField from '../../../assets/components/reusable/InputField'
import ClickableText from '../../../assets/components/reusable_buttons/ClickableText'
import CustomHeader from '../../../assets/components/custom_hearder/CustomHeader'

const Register = ({ navigation }) => {

  const handleSignInPress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.Container}>
      {/* <Headers> */}
      <CustomHeader navigation={navigation} style={styles.header_style} />
      {/* main_image */}
      <View style={styles.pana_style}>
        <Image
          source={require('../../../assets/Images/pana_third.png')}
          resizeMode="cover"
        />
      </View>
      {/* about */}
      <Text style={[MainStyles.text_center, MainStyles.heading]}>Login to your Account</Text>
      <Text style={MainStyles.text_size}>Lorem ipsum dolor sit amet consectetur. Id congue pretium curabitur cras. Massa ultrices quam convallis phasellus</Text>
      {/* inputs */}
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
      {/* ClickableText */}
      <ClickableText
        text="Forgot password?"
        onPress={() => {
          navigation.navigate('ForgotPassword');
        }}
        style={styles.Clickable_Text}
      />
      <View style={styles.button_style}>
        {/* Loginbutton */}
        <ProceedButton title="Login" onPress={handleSignInPress} />
      </View>
      {/* bottomText */}
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