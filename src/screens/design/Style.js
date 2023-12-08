
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
        paddingHorizontal: 19,
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
        // margin: 5,
        // justifyContent: 'space-between',
        width: '100%',
        alignItems:'center',
        justifyContent:'center'
    },
    catgories_margin: {
        // paddingLeft: 5,
        padding: 5,
        // width: '45%',
        marginTop:11
    },
    image_style: {
        width: '100%',
        height: 150,
    },
    bars_Icon: {
        color: colors.white,
        backgroundColor: colors.orange_color,
        borderRadius: 25,
        marginTop: 20,
        marginLeft:18,
        padding:8
    },
    last_catgories_container:{
        marginBottom:'5%'
    }
});

export default styles;