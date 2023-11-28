
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
        paddingRight:'10%',
        marginTop:20
    },
    search_Input: {
        height: 37,
        width: 230,  
        fontSize: 12,
        paddingHorizontal: 15,
        backgroundColor: colors.seprator,
        color: colors.BLACK,
        borderRadius: 25,
        margin:13,
        padding:4
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
        marginBottom: '20%'
    },
    catgories_image_sub_container: {
        flexDirection: 'row',
        margin: 12,
        justifyContent: 'space-between',
    },
    catgories_margin: {
        width: '100%',
        paddingLeft: 5,
        paddingRight: 5,
    },
    image_style: {
        width: '100%',
        height: 155,
    },
    bars_Icon: {
        color: colors.BLACK,
        backgroundColor: colors.seprator,
        paddingHorizontal: 13,
        paddingVertical: 3,
        borderRadius: 25,
        margin: 17
    },
});

export default styles;