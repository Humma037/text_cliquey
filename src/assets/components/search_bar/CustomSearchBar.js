import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../theme/Color';

const SearchBarWithIcons = ({ onSearch, onIcon1Press, onIcon2Press }) => (
    <View style={styles.container}>
        <View style={styles.searchbar_style}>
            <TextInput
                style={styles.search_Input}
                placeholder="Search"
                onChangeText={(text) => onSearch(text)}
            />
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={onIcon1Press}>
                    <FontAwesome name="send-o" size={20} style={styles.back_Icon} />
                </TouchableOpacity>

                <TouchableOpacity onPress={onIcon2Press}>
                    <FontAwesome name="bell-o" size={20} style={styles.back_Icon} />
                </TouchableOpacity>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    search_Input: {
        height: 40,
        width: '64%',
        fontSize: 14,
        paddingHorizontal: 15,
        backgroundColor: colors.themeLightGrey,
        color: colors.BLACK,
        borderRadius: 25,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8,
    },
    searchbar_style: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 70,
    },
    back_Icon: {
        color: colors.BLACK,
        backgroundColor: colors.themeLightGrey,
        margin: 2,
        padding: 10,
        borderRadius: 20
    },
   
});

export default SearchBarWithIcons;
