
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sub_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal:5,
        height:80,
    },
    text_style: {
        // fontSize: 12,
        // padding: 10,
        marginLeft: 27
    },
    image_Container: {
        width: '100%',
    },
    searchbar_style: {
        margin: 5,
    },
    heading_Favorites: {
        paddingHorizontal: 25,
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.themeGrey,
        // marginTop: '5%'
    },
    catgories_image_container: {
        marginBottom: '20%',
        // paddingHorizontal:6
    },
    catgories_image_sub_container: {
        flexDirection: 'row',
        marginHorizontal: 18,
        marginVertical:11,
        justifyContent: 'space-between',
        // width: '100%',
    },
    catgories_margin: {
        width: '100%',
    },
    bars_Icon: {
        color: colors.white,
        backgroundColor: colors.orange_color,
        paddingHorizontal: 12,
        paddingVertical: 2,
        borderRadius: 25,
        marginTop: 23,
        marginLeft:13
    },
    last_catgorie_container:{
        marginBottom:10
    }
});

export default styles;