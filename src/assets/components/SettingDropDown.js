import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../theme/Color';

const SettingDropDown = ({ heading, gearIcon, buttonData }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleDropdown = () => {
        setExpanded(!expanded);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <FontAwesome name={gearIcon} size={30} color="black" style={styles.icon} />
                <Text style={styles.heading}>{heading}</Text>
                <TouchableOpacity onPress={toggleDropdown}>
                    <FontAwesome name={expanded ? 'caret-up' : 'caret-down'} size={40} color="black" style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.line_horizental} />
            {expanded && (
                <View style={styles.dropdown_Content}>
                    {buttonData.map((button, index) => (
                        <TouchableOpacity key={index} style={styles.dropdown_Button}>
                            <FontAwesome name={button.icon} size={22} color="black" style={styles.buttonIcon} />
                            <Text style={styles.buttonText}>{button.text}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.seprator,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        margin: 18,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.BLACK
    },
    line_horizental: {
        width: '100%',
        height: 1,
        backgroundColor: colors.themeLightGrey,
        marginVertical:10
    },
    dropdown_Content: {
        marginTop: 10,
    },
    dropdown_Button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 12,
        marginBottom: 10,
        borderRadius: 15,
        backgroundColor: colors.themeLightGrey
    },
    buttonIcon: {
        marginRight: 12,
    },
    buttonText: {
        fontSize: 13,
        color: 'black',
    },
});

export default SettingDropDown;