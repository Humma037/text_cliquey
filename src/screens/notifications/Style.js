
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor:colors.white
    },
    notification:{
        width:'89%',
    },
    sub_container:{
     marginLeft:20
    },
    text: {
        fontWeight: "bold",
        fontSize: 12,
        color: colors.light_black,
        margin:5
    },
    text_heading: {
        fontWeight: "bold",
        fontSize: 15,
        color: colors.light_black,
        margin:5
    },
    notification_details:{
      margin:5,
      backgroundColor:'#f9f7f7',
      borderRadius:20
    },
    notification_container:{
        width:400
    },
    second_sub_container:{
        marginLeft:20
    },
    this_week_notification:{
        width:340,
    },
    notification_dont:{
        width:8,
        height:8,
        backgroundColor:colors.orange_color,
        borderRadius:4,
        position:'absolute',
        top:'44%',
        right:'99%',
        zIndex:1
    },
    dimiss_icon:{
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        // backgroundColor:colors.seprator,
        width:23,
        paddingHorizontal:3,
        paddingVertical:2,
        borderRadius:20,
        position:'absolute',
        bottom:60,
        right:60
    },

});

export default styles;
