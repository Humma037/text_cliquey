import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sub_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:10,
        marginRight:5
    },
    slide_Container: {
        padding: 5
    },
    text_style: {
        fontSize: 13,
        padding: 10,
        marginLeft: 10,
        marginTop:20
    },
    image_Container: {
        width: '100%',
        paddingHorizontal: 16,
    },
    searchbar_style: {
        marginHorizontal: 5,
        marginRight:5
    },
    heading_all_categories: {
        paddingHorizontal: 25,
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.themeGrey,
    },
    catgories_image_container: {
        padding: 16
    },
    catgories_image_sub_container: {
        flexDirection: 'row',
        // paddingRight: 12,
        // justifyContent: 'space-between',
        alignContent:'center',
        justifyContent:'center',
        width: '100%',

    },
    catgories_margin: {
        // width: '100%',
        // height: 150,
        margin: 5,

    },
    Profile_Image: {
        marginTop: 12,
        paddingLeft:20
    },
});

export default styles;