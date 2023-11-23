
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    sub_Container:{
        alignItems: 'center',
        height:200,
    },
    bar_Icon:{
        fontSize: 30,
        color: colors.BLACK,
        margin:10
    },
    cover_photo: {
        width: '92%',
        height:110,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: colors.seprator,
        borderRadius: 20,
        position:'absolute',
        top:60,
    },
    user_Icon: {
        width: 80,
        height: 80,
        backgroundColor: colors.themeLightGrey,
        paddingHorizontal: 26,
        paddingVertical: 15,
        borderRadius: 50,
        color: colors.DividingLine,
        position:'absolute',
        top:20,
        zIndex:999
    },
    user_name: {
        fontSize: 14,
        color: colors.BLACK,
        fontWeight:'bold',
        marginTop:20
    },
    view_profile: {
        fontSize: 11,
        color: '#767676',
    },
    setting_options_container:{
        width: '100%',
        justifyContent:'center',
        flexDirection:'row',
    },
    setting_options:{
        width: '45%',
        height:110,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: colors.seprator,
        borderRadius: 20,
        margin:4,
    },
    setting_options_text:{
        fontSize: 14,
        color: colors.BLACK,
        fontWeight:'bold',
    },
    setting_last_options_container:{
        width: '100%',
        marginLeft:15,
    }

});

export default styles;
