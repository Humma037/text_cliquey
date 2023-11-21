import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../theme/Color';

const CustomHeader = ({ navigation }) => (
    <View style={styles.header}>
        <AntDesign name="left" size={25} onPress={() => navigation.goBack()} style={styles.icon_style} />
        <View style={styles.image_style}>
            <Image
                source={require('../../assets/Images/Logo.png')}
                style={styles.logo_style}
                resizeMode="cover"
            />
        </View>
    </View>
);

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        width: '90%',
        height: 100,
    },
    image_style: {
        marginRight: 90
    },
    icon_style: {
        backgroundColor: colors.themeLightGrey,
        padding: 7,
        borderRadius: 20,
        color: colors.themeGrey
    }
});

export default CustomHeader;
