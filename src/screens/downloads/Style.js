
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    sub_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingRight: '12%',
        marginTop: 15
    },
    search_Input: {
        fontSize: 12,
        backgroundColor: colors.seprator,
        color: colors.BLACK,
        borderRadius: 25,
        padding: 4
    },
    searchbar_style: {
        marginVertical: 17,
        backgroundColor: colors.seprator,
        flexDirection: 'row',
        height: 37,
        width: 190,
        borderRadius: 20,
        paddingHorizontal: 10,
        alignItems: 'center',
        marginLeft:10
    },
    heading_all_design: {
        paddingHorizontal: 25,
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.themeGrey,
        marginTop: '5%'
    },
    catgories_image_container: {
        marginBottom: '20%'
    },
    catgories_image_sub_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    catgories_margin: {
        margin: 6,
    },
    image_style: {
        width: '100%',
        height: 155,
    },
    bars_Icon: {
        color: colors.white,
        paddingHorizontal: 12,
        paddingVertical: 2,
        borderRadius: 25,
        margin: 17,
        backgroundColor: colors.orange_color
    },
    search_Icon: {
        color: colors.DividingLine
    },
    last_catgories_container: {
        marginBottom: '10%'
    },
    Filter_button: {
        flexDirection: 'row',
        marginVertical: 18,
        backgroundColor:colors.seprator,
        padding:8,
        paddingHorizontal:22,
        borderRadius:18,
        margin:5
    },
    Filter_button_text: {
        fontSize: 11,
        marginRight:3,
    },
    filter_Icon: {
        color: colors.light_black,
        marginTop: 3,
    }
});

export default styles;