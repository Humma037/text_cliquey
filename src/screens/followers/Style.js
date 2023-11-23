
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    notification: {
        width: '90%',
    },
    sub_container: {
        alignItems:'center',
        justifyContent:'center'
    },
    text: {
        fontWeight: "bold",
        fontSize: 12,
        color: colors.light_black,
        margin: 5
    },
    text_heading: {
        fontWeight: "bold",
        fontSize: 15,
        color: colors.light_black,
        margin: 5
    },
    notification_details: {
        margin: 8
    },
    notification_container: {
        height: 175,
    },
    data_container: {
        width: '93%',
        flexDirection:'row',
        justifyContent:'space-between',
        margin:5
    },
    this_week_notification: {
        height: 430,
    },
    second_sub_container:{
        alignItems:'center',
        justifyContent:'center'
    }
});

export default styles;
