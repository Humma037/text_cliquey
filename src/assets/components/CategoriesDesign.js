import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const CategoriesDesign = ({ backgroundImage, title }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('Design');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePress} style={styles.image_container}>
                <Image
                    source={backgroundImage}
                    style={styles.background_Image}
                    resizeMode="cover"
                />
                <View style={styles.color} />
                <View style={styles.icons_Container}>
                    <FontAwesome name="save" size={15} color="black" style={styles.icon_style} />
                    <FontAwesome name="download" size={15} color="black" style={styles.icon_style} />
                    <FontAwesome name="share-alt" size={15} color="black" style={styles.icon_style} />
                    <FontAwesome name="heart-o" size={15} color="black" style={styles.icon_style} />
                </View>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background_Image: {
        flex: 1,
        width: '100%',
        height: 155,
        position:'absolute'
    },
    color: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        width: 168,
        height: 28,
        borderTopLeftRadius: 55,
        borderTopRightRadius: 55
    },
    icons_Container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        marginTop: 90,
        width: 145,
        marginLeft: 12
    },
    text: {
        fontSize: 10,
    },
    icon_style: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 6,
        borderRadius: 20
    }
});

export default CategoriesDesign;
