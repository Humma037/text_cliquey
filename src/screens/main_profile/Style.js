
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text_style: {
        fontSize: 12,
        marginLeft: 25,
        padding: 5
    },
    imageContainer: {
        width: 330,
        height: 148,
        marginLeft: 27,
        marginTop: 34
    },
    photo_cover_Icon: {
        color: colors.white,
        position:'absolute',
        top:135,
        right:40,
        backgroundColor:colors.BLACK,
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:25
    },
    profile_edit_Icon: {
        color: colors.white,
        position:'absolute',
        top:185,
        right:140,
        backgroundColor:colors.BLACK,
        paddingHorizontal:8,
        paddingVertical:8,
        borderRadius:25,
        zIndex:1
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
        width: 320,
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 400,
        left: 35
    },
    heading: {
        fontSize: 11,
        color: '#767676',
    },
    line: {
        backgroundColor: '#767676',
        width: 1,
        height: 40,
        margin: 7,

    },
    numbers_heading: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold'
    },
    button_container: {
        padding: 20,
        marginTop: 20,
        alignItems:'center'
    },
    button: {
        // flex: 1,
        backgroundColor: '#eee',
        paddingHorizontal: 25,
        borderRadius: 30,
        borderWidth:1,
        borderColor:'#000',
        paddingVertical:12
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold'
    },
    text_container: {
        flexDirection: 'row',
        padding: 16,
        position: 'absolute',
        bottom: 280,
        left: 10
    },
    activeTab: {
        borderBottomWidth: 1,
        borderBottomColor: 'orange',
    },
    tabText: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold',
        marginHorizontal: 15
    },
    images_container: {
        marginTop: 20,
    },
    images_sub_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    image: {
        width: 105,
        height: 95,
        margin: 7,
    },
    images_sub: {
        marginBottom: 10
    }

});

export default styles;