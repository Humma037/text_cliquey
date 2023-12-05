
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor:colors.white
    },
    notification:{
        width:'100%',
    },
    text: {
        fontWeight: "bold",
        fontSize: 12,
        color: colors.light_black,
        textAlign:'center'
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
    this_week_notification:{
        width:400,
        height:430,
    },
    line:{
        width:'100%',
        height:2,
        backgroundColor:colors.DividingLine,
        marginVertical:15
    }
});

export default styles;
