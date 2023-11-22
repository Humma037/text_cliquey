
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    catgories_style:{
        marginTop:40
    },
    heading_second:{
        marginLeft:18
    },
    catgories_margin:{
        margin:12
    },
    imageContainer:{
        width:350,
        height:155,
        marginLeft:15
    },
    bars_Icon: {
        color: colors.BLACK,
        marginLeft: 15,
        marginTop: 19,
        backgroundColor: colors.themeLightGrey,
        paddingHorizontal: 15,
        paddingVertical:3,
        borderRadius: 25,
        color: colors.themeGrey
    },
});

export default styles;