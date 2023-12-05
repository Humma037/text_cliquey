
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.white
    },
    sub_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingRight:'12%',
        marginTop:20
    },
    search_Input: {
        fontSize: 12,
        backgroundColor: colors.seprator,
        color: colors.BLACK,
        borderRadius: 25,
        padding:4
      },
    searchbar_style: {
        margin: 17,
        backgroundColor: colors.seprator,
        flexDirection:'row',
        height: 37,
        width: 230, 
        borderRadius:20,
        paddingHorizontal:10,
        alignItems:'center',
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
        // margin: 12,
        // justifyContent: 'space-between',
        alignItems:'center',
        justifyContent:'center',
        marginTop:10

    },
    catgories_margin: {
        // width: '100%',
        // paddingLeft: 6,
        // paddingRight: 6,
        margin:6,
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
        backgroundColor:colors.orange_color
    },
    search_Icon:{
        color:colors.light_black
    }
});

export default styles;