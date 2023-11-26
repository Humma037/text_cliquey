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
    name_style: {
        margin: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        position: 'absolute',
        left: 120
    },
    profile_cover: {
        width: '100%',
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.seprator,
        borderRadius: 20,
        padding: 20
    },
    cover_photo: {
        width: '100%',
        height: 143,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.seprator,
        borderRadius: 30,
        position: 'absolute',
    },
    user_Icon: {
        width: 100,
        height: 100,
        backgroundColor: colors.themeLightGrey,
        paddingHorizontal: 33,
        paddingVertical: 20,
        borderRadius: 50,
        color: colors.DividingLine,
        zIndex: 999,
        marginTop: 65
    },
    sub_Container: {
        alignItems: 'center',
        height: 200,
        padding: 20
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
        fontSize: 10,
        width: '75%',
    },
    user_data: {
        alignItems: 'center',
    },
    accountsDirection: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 60,
        paddingTop: 30
    },
    heading: {
        fontSize: 10,
        color: '#767676',
        textAlign: 'center'
    },
    line: {
        backgroundColor: '#767676',
        width: 1,
        height: 40,
        margin: 7,
    },
    numbers_heading: {
        fontSize: 15,
        color: '#000',
        fontWeight: 'bold'
    },
    numbers_margin: {
        alignItems: 'center'
    },
    button_container: {
        paddingVertical: 25,
        width:'100%',
        alignItems:'center',
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#eee',
        padding: 10,
        borderRadius: 30,
        paddingHorizontal: '5%',
        borderWidth:1,
        borderColor:colors.BLACK,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 5,
        fontSize:12,
    },
    editIcon: {
        color: colors.BLACK,
    },
    photo_cover_Icon: {
        color: colors.white,
        position:'absolute',
        top:'20%',
        right:40,
        backgroundColor:colors.BLACK,
        paddingHorizontal:8,
        paddingVertical:8,
        borderRadius:25,
    },
    profile_edit_Icon: {
        color: colors.white,
        position:'absolute',
        top:'25%',
        right:'36%',
        backgroundColor:colors.BLACK,
        paddingHorizontal:7,
        paddingVertical:7,
        borderRadius:25,
        zIndex:1
    },
    text_container: {
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
    },
    images_container: {
        marginTop: 20
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
    images_sub_container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    image: {
        width: '30%',
        height:95,
        margin: 7,
    },
    images_sub: {
        marginBottom: 10
    }

});

export default styles;