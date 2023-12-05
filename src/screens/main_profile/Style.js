import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.white
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
    // profile_cover: {
    //     width: '100%',
    //     height: 120,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     backgroundColor: colors.seprator,
    //     borderRadius: 20,
    //     padding: 20
    // },
    cover_photo: {
        width: '100%',
        height: 143,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.seprator,
        borderRadius: 20,
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
        fontSize: 15,
        fontWeight: 'bold',
        zIndex: 1
    },
    description_text: {
        color: '#767676',
        textAlign: 'center',
        fontSize: 11,
        width: '75%',
        paddingTop:3
    },
    user_data: {
        alignItems: 'center',
    },
    accountsDirection: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 60,
        paddingTop: 20
    },
    heading: {
        fontSize: 11,
        color: '#767676',
        textAlign: 'center'
    },
    line_container: {
        marginTop: 4
    },
    line: {
        backgroundColor: '#767676',
        width: 1,
        height: 27,
        margin: 7,
    },
    numbers_heading: {
        fontSize: 14,
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
        padding: 9,
        borderRadius: 30,
        paddingHorizontal: '4%',
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
        top:'16.5%',
        right:30,
        backgroundColor:'rgba(67, 66, 64, 1)',
        padding:7,
        borderRadius:25,
    },
    profile_edit_Icon: {
        color: colors.white,
        position:'absolute',
        top:'20%',
        right:'37%',
        backgroundColor:'rgba(67, 66, 64, 1)',
        padding:6,
        borderRadius:25,
        zIndex:1
    },
    text_container: {
        flexDirection: 'row',
        width: '63%',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
    },
    activeTab: {
        borderBottomWidth: 1.5,
        borderBottomColor: 'orange',
    },
    tabText: {
        color: 'black',
        fontSize: 13,
        fontWeight: 'bold',
        // marginHorizontal: 1,
    },
    images_container: {
        marginTop: 15,
    },
    images_sub_container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    image: {
        width: '30%',
        height:95,
        margin: 5,
    },
    images_sub: {
        marginBottom: '25%'
    }

});

export default styles;