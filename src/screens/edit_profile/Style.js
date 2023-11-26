
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text_style: {
        fontSize: 10,
        marginLeft: 25,
        padding: 5
    },
    profile: {
        width: '100%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profile_text: {
        fontSize: 12,
        width: '100%',
        textAlign:'center'
    },
    profile_cover_container:{
        width: '100%',
        padding:20,
        marginTop:'7%'
    },
    profile_cover: {
        height: 150,
        backgroundColor: colors.seprator,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },
    cover_Icon: {
        color: colors.DividingLine
    },
    profile_cover_text:{
        fontSize:12,
        color:colors.DividingLine
    },
    upload_profile_cover_text:{
        textAlign:'center',
    },
    user_Icon: {
        width: 100,
        height: 100,
        backgroundColor: colors.seprator,
        paddingHorizontal: 32,
        paddingVertical: 19,
        borderRadius: 50,
        color: colors.DividingLine,
    },
    heading: {
        fontSize: 11,
        color: '#767676',
    },
    button_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 35,
    },
    button: {
        flex: 1,
        backgroundColor: '#eee',
        padding: 15,
        borderRadius: 30,
        marginRight: 8,
        alignItems: 'center',
    },
    activeButton: {
        backgroundColor: colors.orange_color,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold'
    },
    container_dummy: {
        flex: 1,
        padding: 16,
      },
      input_Container: {
        justifyContent:'center',
        alignItems:'center',
        padding:5
      },
      label:{
        textAlign:'center',
        margin:20
    },
      input: {
        width:'100%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#000',
      },
      bioInput: {
        height: 140,
        textAlignVertical: 'top',
      },

});

export default styles;