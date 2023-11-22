
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text_style: {
        fontSize: 12,
        marginLeft: 25,
        padding: 5
    },
    profile: {
        marginTop: 90
    },
    profile_text: {
        marginTop: 50,
        marginLeft: 90
    },
    profile_cover: {
        width: 330,
        height: 150,
        backgroundColor: colors.seprator,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginLeft: 25,
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
        margin:10
    },
  
    name_style: {
        margin: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        position: 'absolute',
        left: 120
    },
    imageContainer: {
        width: 330,
        height: 148,
        marginLeft: 27,
        marginTop: 15
    },
    bars_Icon: {
        color: colors.BLACK,
        marginLeft: 15,
        marginTop: 19,
        backgroundColor: colors.themeLightGrey,
        paddingHorizontal: 15,
        paddingVertical: 3,
        borderRadius: 25,
        color: colors.themeGrey
    },
    user_Icon: {
        width: 100,
        height: 100,
        backgroundColor: colors.seprator,
        paddingHorizontal: 32,
        paddingVertical: 19,
        borderRadius: 50,
        color: colors.DividingLine,
        position: 'absolute',
        bottom: -45,
        left: 140
    },
    user_name: {
        color: colors.BLACK,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        zIndex: 1
    },
    description_text: {
        color: colors.DividingLine,
        textAlign: 'center',
        fontSize: 12,
        width: 280,
    },
    user_data: {
        alignItems: 'center',
        margin: 50
    },
    accountsDirection: {
        flexDirection: 'row',
        width: 300,
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 360,
        left: 45
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
      inputContainer: {
        marginBottom: 20,
        justifyContent:'center',
        alignItems:'center'
      },
      label:{
        textAlign:'center',
        margin:10
    },
      input: {
        height: 55,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 15,
        fontSize: 16,
        width:330,
        color: '#000',
      },
      bioInput: {
        height: 140,
        textAlignVertical: 'top',
      },

});

export default styles;