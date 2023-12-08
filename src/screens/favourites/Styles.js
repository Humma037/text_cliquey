
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
    },
    catgories_image_container: {
        marginBottom: '22%',
    },
    catgories_image_sub_container: {
        flexDirection: 'row',
        width: '100%',
        alignItems:'center',
        justifyContent:'center',
        marginTop:11
    },
    catgories_margin: {
        margin:5,
    },
    bars_Icon: {
        color: colors.white,
        backgroundColor: colors.orange_color,
        paddingHorizontal: 12,
        paddingVertical: 2,
        borderRadius: 25,
        marginTop: 21,
        marginLeft:13
    },
    last_catgorie_container:{
        marginBottom:10
    }
});

export default styles;