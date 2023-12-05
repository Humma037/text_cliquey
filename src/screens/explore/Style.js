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
        paddingTop:10,
        paddingRight:3,
        // padding:10
        height:80,
        // backgroundColor:'red'
    },
    slide_Container: {
        padding: 5
    },
    text_style: {
        fontSize: 13,
        padding: 5,
        // marginLeft: 10,
        marginTop:5,
        fontWeight:'bold',
        color:colors.light_black
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
        // paddingRight: 3
        padding:5,
    },
    catgories_image_sub_container: {
        flexDirection: 'row',
        alignContent:'center',
        justifyContent:'center',
        width: '100%',
        marginTop:5

    },
    catgories_margin: {
        height: 145,
        margin: 5,
    },
    Profile_Image: {
        marginTop: 16,
        paddingLeft:18
    },
    last_catgorie_container:{
        marginBottom:'45%'
    }
});

export default styles;