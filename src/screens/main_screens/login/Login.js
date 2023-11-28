import { StyleSheet, Text, View, email, Image, ScrollView } from 'react-native'
import React from 'react'
import ProceedButton from '../../../assets/components/reusable_buttons/ProceedButton'
import MainStyles from '../../../assets/styles/MainStyles'
import styles from './Styles'
import InputField from '../../../assets/components/input_Field/InputField'
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
      <ScrollView>
        <View style={styles.pana_style}>
          <Image
            source={require('../../../assets/Images/pana_third.png')}
            resizeMode="cover"
            style={styles.Image_style}
          />
        </View>
        {/* about */}
        <View style={styles.Text_container}>
        <Text style={[MainStyles.heading]}>Login to your Account</Text>
        <Text style={styles.Text}>Lorem ipsum dolor sit amet consectetur. Id congue pretium curabitur cras. Massa quam convallis phasellus </Text>
        </View>
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
        <View style={styles.account_Register_contanier}>
          <Text style={styles.account_text}>Dont have an account?</Text>
          <ClickableText
            text="Sign Up"
            onPress={() => {
              navigation.navigate('Register');
            }}
            style={styles.account_Register}
          />
        </View>
        </ScrollView>
    </View>
  )
}

export default Register