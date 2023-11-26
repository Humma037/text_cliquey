import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sub_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    slide_Container: {
        padding: 5
    },
    text_style: {
        fontSize: 12,
        padding: 10,
        marginLeft: 10
    },
    image_Container: {
        width: '100%',
        paddingHorizontal: 17,
    },
    searchbar_style: {
        margin: 5,
    },
    heading_all_categories: {
        paddingHorizontal: 25,
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.themeGrey,
    },
    catgories_image_container: {
        padding: 12
    },
    catgories_image_sub_container: {
        flexDirection: 'row',
        paddingRight: 12,
        justifyContent: 'space-between',
    },
    catgories_margin: {
        width: '100%',
        height: 160,
        margin: 3,
    },
    Profile_Image: {
        margin: 8
    },
});

export default styles;