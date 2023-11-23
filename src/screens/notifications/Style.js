
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
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
      margin:5
    },
    notification_container:{
        height:170,
        width:400
    },
    second_sub_container:{
        marginLeft:20
    },
    this_week_notification:{
        width:400,
        height:430,
    }
});

export default styles;
