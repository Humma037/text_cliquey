
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sub_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding:5
    },
    text_style: {
        // fontSize: 12,
        // padding: 10,
        marginLeft: 25
    },
    image_Container: {
        width: '100%',
        // paddingHorizontal: 17,
    },
    searchbar_style: {
        margin: 5,
    },
    heading_all_design: {
        paddingHorizontal: 25,
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.themeGrey,
        marginTop: '10%'
    },
    catgories_image_container: {
        marginBottom: '20%',
        padding:7
    },
    catgories_image_sub_container: {
        flexDirection: 'row',
        marginHorizontal: 12,
        marginVertical:11,
        justifyContent: 'space-between',
    },
    catgories_margin: {
        width: '100%',
    },
    bars_Icon: {
        color: colors.BLACK,
        backgroundColor: colors.seprator,
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 25,
        marginTop: 23,
        marginLeft:16
    },
});

export default styles;