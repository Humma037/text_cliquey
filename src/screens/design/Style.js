
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.white
    },
    sub_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        // backgroundColor:'green',
        height:80
    },
    text_style: {
        fontSize: 13,
        padding: 5,
        // marginTop: 20
    },
    image_Container: {
        width: '100%',
        paddingHorizontal: 17,
    },
    searchbar_style: {
        margin: 5,
    },
    heading_all_design: {
        paddingHorizontal: 25,
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.themeGrey,
        marginTop: '7%'
    },
    catgories_image_container: {
        marginBottom: '20%'
    },
    catgories_image_sub_container: {
        flexDirection: 'row',
        margin: 12,
        justifyContent: 'space-between',
    },
    catgories_margin: {
        width: '100%',
        paddingLeft: 5,
        paddingRight: 5,
    },
    image_style: {
        width: '100%',
        height: 150,
    },
    bars_Icon: {
        color: colors.white,
        backgroundColor: colors.orange_color,
        paddingHorizontal: 12.5,
        paddingVertical: 2.5,
        borderRadius: 25,
        marginTop: 20,
        marginLeft:18
    },
    last_catgories_container:{
        marginBottom:'5%'
    }
});

export default styles;