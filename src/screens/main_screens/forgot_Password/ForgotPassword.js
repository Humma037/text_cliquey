
// import { ScrollView, Text, View, email, Image } from 'react-native'
// import React from 'react'
// import ProceedButton from '../../../assets/components/reusable_buttons/ProceedButton'
// import MainStyles from '../../../assets/styles/MainStyles'
// import styles from './Styles'
// import InputField from '../../../assets/components/input_Field/InputField'
// import ClickableText from '../../../assets/components/reusable_buttons/ClickableText'
// import CustomHeader from '../../../assets/components/custom_hearder/CustomHeader'

// const Login = ({ navigation }) => {

//   const handleSignInPress = () => {
//     navigation.navigate('Home');
//   };

//   return (
//     <View style={styles.Container}>
//       <CustomHeader navigation={navigation} style={styles.header_style} />
//       <ScrollView>
//         <View style={styles.pana_style}>
//           <Image
//             source={require('../../../assets/Images/pana_two.png')}
//             resizeMode="cover"
//           />
//         </View>
//         <Text style={[MainStyles.text_center, MainStyles.heading]}>Create Account</Text>
//         <Text style={MainStyles.text_size}>Lorem ipsum dolor sit amet consectetur. Id congue pretium curabitur cras. Massa ultrices quam convallis phasellus</Text>
//         <View style={styles.TextInput}>
// <InputField
//   placeholder="Name"
//   keyboardType="default"
// />
//           <InputField
//             placeholder="Email"
//             secureTextEntry={false}
//           />
//         </View>
//         <View style={styles.TextInput}>
//           <InputField
//             placeholder="Password"
//             secureTextEntry={true}
//           />
//         </View>
//         <View style={styles.button_style}>
//           <ProceedButton title="Sign Up" onPress={handleSignInPress} />
//         </View>
//         <View style={MainStyles.Direction_Horizental}>
//           <Text style={styles.account_text}>Already have an account?</Text>
//           <ClickableText
//             text="Sign In"
//             onPress={() => {
//               navigation.navigate('Login');
//             }}
//             style={styles.account_Register}
//           />
//         </View>
//         </ScrollView>
//     </View>
//   )
// }

// export default Login
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
                        source={require('../../../assets/Images/pana_fourth.png')}
                        resizeMode="cover"
                    />
                </View>
                {/* about */}
                <View style={styles.Text_container}>
                    <Text style={[MainStyles.heading]}>Login to your Account</Text>
                    <Text style={styles.Text}>Lorem ipsum dolor sit amet consectetur. Id congue pretium curabitur cras. </Text>
                </View>
                {/* inputs */}
                <View style={styles.sub_container}>
                    <View style={styles.TextInput}>
                        <InputField
                            placeholder="Email"
                            secureTextEntry={false}
                        />
                    </View>
                    <View style={styles.button_style}>
                        {/* Loginbutton */}
                        <ProceedButton title="Confirm" onPress={handleSignInPress} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Register