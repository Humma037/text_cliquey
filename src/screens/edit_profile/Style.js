
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.white
    },
    text_style: {
        fontSize: 10,
        marginLeft: 25,
        padding: 5
    },
    profile: {
        width: '100%',
        // height: 150,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profile_text: {
        fontSize: 12,
        width: '100%',
        textAlign:'center',
        marginTop:15
    },
    profile_cover_container:{
        width: '100%',
        paddingHorizontal:20,
        marginTop:50
    },
    profile_cover: {
        height: 150,
        backgroundColor: colors.seprator,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    cover_Icon: {
        color: colors.DividingLine
    },
    profile_cover_text:{
        fontSize:10,
        color:colors.DividingLine
    },
    upload_profile_cover_text:{
        textAlign:'center',
        marginTop:10
    },
    user_Icon: {
        width: 110,
        height: 110,
        backgroundColor: colors.seprator,
        paddingHorizontal: 37,
        paddingVertical: 27,
        borderRadius: 55,
        color: colors.DividingLine,
        marginTop:25
    },
    heading: {
        fontSize: 11,
        color: '#767676',
    },
    button_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 60,
        paddingVertical: 25,
    },
    button: {
        flex: 1,
        backgroundColor: colors.orange_color,
        padding: 10,
        borderRadius: 30,
        marginHorizontal: 5,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'transparent', 
    },
    activeButton: {
        backgroundColor: colors.white,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize:12
    },
    container_dummy: {
        flex: 1,
        paddingHorizontal: 16,
      },
      input_Container: {
        justifyContent:'center',
        alignItems:'center',
        padding:5
      },
      label:{
        textAlign:'center',
        margin:15,
        marginTop:40
    },
      input: {
        width:'100%',
        borderRadius: 20,
        paddingHorizontal: 15,
        fontSize: 13,
        color: '#000',
        backgroundColor:colors.seprator
      },
      bioInput: {
        height: 140,
        textAlignVertical: 'top',
      },

});

export default styles;