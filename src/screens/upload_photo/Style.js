
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    sub_container: {
        width: '100%',
        flexDirection:'row',
        margin:20
    },
    data_container: {
        marginVertical:15,
        marginHorizontal:8
    },
    user_name: {
        fontWeight: "bold",
        fontSize: 12,
        color: colors.light_black,
    },
    text_details:{
        fontSize: 10,
        color: colors.DividingLine,
    },
    inputContainer: {
        backgroundColor: colors.seprator,
        marginHorizontal:30,
        borderRadius:20,
        padding:10
    },
    profile_cover: {
        width: 150,
        height: 140,
        backgroundColor: colors.seprator,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        margin:30
    },
    profile_cover_text: {
        fontWeight: "bold",
        fontSize: 8,
        color: colors.DividingLine,
    },
    cover_Icon:{
        color: colors.DividingLine,
    },
    button_upload:{
        backgroundColor: colors.Button_Background_Color,
        borderRadius: 15,
        padding:15,
        marginHorizontal:30,
        marginVertical:'40%'
    },
    Button_text: {
        fontSize: 16,
        color: colors.BLACK,
        fontWeight:'bold',
        textAlign:'center'
    },

});

export default styles;
