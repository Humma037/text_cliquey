import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../theme/Color';
import MainStyles from '../styles/MainStyles';

const NotificationComp = () => {
    return (
        <View style={styles.Container}>
            <View style={styles.sub_container}>
                <View>
                    <FontAwesome name="user" size={30} style={styles.user_Icon} />
                </View>
                <View >
                    <Text style={styles.text_heading}>Lady Gaga</Text>
                    <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur. Tellus pulvinar .</Text>
                </View>
            </View>
        </View>
    )
}

export default NotificationComp

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    sub_container:{
        flexDirection:'row',
        margin:5
    },
    user_Icon: {
        width: 60,
        height: 60,
        backgroundColor: colors.seprator,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 50,
        color: colors.DividingLine,
    },
    text_heading: {
        fontWeight: "bold",
        fontSize: 12,
        color: colors.light_black,
        marginLeft:10
    },
    text: {
        fontSize: 9.5,
        color: colors.BLACK,
        marginLeft:10,
        width:250
    }
})