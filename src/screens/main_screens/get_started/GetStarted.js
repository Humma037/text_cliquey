import { StyleSheet, Text, View, email, Image } from 'react-native'
import React from 'react'
import ProceedButton from '../../../assets/components/reusable/ProceedButton'
import MainStyles from '../../../assets/styles/MainStyles'
import styles from './Styles'
import colors from '../../../assets/theme/Color'

const GetStarted = ({ navigation }) => {

    const handleContinuePress = () => {
        navigation.navigate('CreateAccount');
    };

    return (
        <View style={styles.Container}>
            <Text style={[MainStyles.text_center, MainStyles.text_bold, colors.heading_color]}>Welcome to Cliquey!</Text>
            <View style={MainStyles.margin_vertical}>
                <View style={MainStyles.Direction_Horizental}>
                    <View style={styles.image_style}>
                        <Image
                            source={require('../../../assets/Images/image_one.png')}
                            // style={styles.image_vertical_long}
                            resizeMode="cover"
                        />
                    </View>
                    <View>
                        <View style={styles.image_style}>
                            <Image
                                source={require('../../../assets/Images/image_two.png')}
                                // style={styles.image_square}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.image_style}>
                            <Image
                                source={require('../../../assets/Images/image_three.png')}
                                // style={styles.image_square}
                                resizeMode="cover"
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.image_style}>
                    <Image
                        source={require('../../../assets/Images/image_six.png')}
                        // style={styles.image_horizenatl_long}
                        resizeMode="cover"
                    />
                </View>
                <View style={MainStyles.Direction_Horizental}>
                    <View style={styles.image_style}>
                        <Image
                            source={require('../../../assets/Images/image_five.png')}
                            // style={styles.image_square}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.image_style}>
                        <Image
                            source={require('../../../assets/Images/image_four.png')}
                            // style={styles.image_square}
                            resizeMode="cover"
                        />
                    </View>
                </View>
            </View>

            <ProceedButton title="Get Started" onPress={handleContinuePress} />
        </View>
    )
}

export default GetStarted
