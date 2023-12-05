import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../theme/Color';
import MainStyles from '../styles/MainStyles';

const CommentsComp = () => {
    const handleButtonPress = () => {
        // Handle button press logic here
    };

    return (
        <View style={styles.Container}>
            <View style={styles.main_Container}>
                <View style={MainStyles.Direction_Horizental}>
                    <FontAwesome name="user" size={30} style={styles.user_Icon} />
                    <View style={styles.sub_container}>
                        <View style={styles.massage_Container}>
                            <Text style={styles.name_heading}>Lady Gaga</Text>
                            <View style={MainStyles.Direction_Horizental}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.timing_text}>18:09 AM 15/09/2023</Text>
                                </View>
                                <FontAwesome
                                    name="ellipsis-v"
                                    size={22}
                                    style={styles.ellipsis_Icon} />
                            </View>
                        </View>
                        <Text style={styles.para_text}>Lorem ipsum doler milra dilrof Lorem ipsum doler milra dilrof Lorem ipsum doler milra dilrof Lorem ipsum doler milra dilr Lorem ipsum</Text>
                        <TouchableOpacity style={styles.button} >
                            <FontAwesome name="thumbs-o-up" size={18} style={styles.icon} />
                            <Text style={styles.text}>234</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>

    );
};

export default CommentsComp;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    main_Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginVertical: 5
    },
    sub_container: {
        backgroundColor: colors.seprator,
        padding: 12,
        width: 280,
        borderRadius: 20
    },
    massage_Container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginRight: 10
    },
    textContainer: {
        margin: 10,
    },
    user_Icon: {
        width: 50,
        height: 50,
        backgroundColor: colors.seprator,
        paddingHorizontal: 14,
        paddingVertical: 7,
        borderRadius: 50,
        color: colors.DividingLine,
        marginRight: 5
    },
    name_heading: {
        fontSize: 12,
        color: colors.BLACK,
        fontWeight: 'bold',
        margin: 5
    },
    timing_text: {
        fontWeight: 'bold',
        fontSize: 9,
        color: colors.DividingLine,
    },
    text: {
        fontSize: 10,
        color: colors.BLACK,
        // marginTop: 4,
    },
    button: {
        // backgroundColor: '#eee',
        paddingHorizontal: 15,
        borderRadius: 10,
        paddingVertical: 6,
        // margin: 10,
        borderWidth: 0.5,
        borderColor: colors.BLACK,
        flexDirection: 'row',
        width: 65,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 8,
        marginLeft: 3
    },
    icon: {
        color: colors.BLACK,
        marginRight: 3
    },
    ellipsis_Icon: {
        color: colors.DividingLine,
        marginTop: 8,
    },
    para_text: {
        color: 'black',
        fontSize: 11,
    }
});



   
