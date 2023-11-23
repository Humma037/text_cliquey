import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../theme/Color';

const SecondHeader = ({ navigation, name }) => (
    <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome name="angle-left" size={35} style={styles.bars_Icon} />
        </TouchableOpacity>
        <Text style={styles.name_style}>{name}</Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '65%',
        paddingHorizontal: 20,
        paddingVertical:20
    },
    bars_Icon: {
        backgroundColor: colors.seprator,
        paddingHorizontal: 12,
        paddingVertical: 0.5,
        borderRadius: 25,
        color: colors.themeGrey,
    },
    name_style: {
        fontWeight: 'bold',
        color: colors.BLACK,
        alignItems: 'center',
        margin:5,
        fontSize:15
    },
});

export default SecondHeader;
