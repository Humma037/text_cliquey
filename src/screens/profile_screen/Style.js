
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
        position:'absolute',
        left:120
    },
    imageContainer: {
        width: 330,
        height: 148,
        marginLeft: 27,
        marginTop:15
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 35,
        marginTop: 5
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
    text_container: {
        flexDirection: 'row',
        padding: 16,
        position: 'absolute',
        bottom: 230,
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
    images_sub:{
        marginBottom: 100
    }

});

export default styles;