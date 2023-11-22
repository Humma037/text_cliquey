import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../../theme/Color';
import MainStyles from '../../styles/MainStyles';

const ProceedButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button_Container, MainStyles.Items_Center ]}>
            <Text style={styles.Button_text}>{title}</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    button_Container: {
        backgroundColor: colors.Button_Background_Color,
        borderRadius: 28,
        width: 280,
        height: 55,
    },
    Button_text: {
        fontFamily: "Metropolis-ExtraBold",
        fontSize: 16,
        color: colors.WHITE,
        fontWeight:'bold',
    },
});

export default ProceedButton;

