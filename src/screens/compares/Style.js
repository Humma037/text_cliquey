
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor:colors.white
    },
    notification: {
        width: '100%',
        paddingHorizontal:20
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
        marginHorizontal: 15
    },
    notification_details: {
        margin: 8
    },
    data_container: {
        width: '93%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:5
    },
    this_week_notification: {
        // height: 655,
        marginTop:10
    },
    second_sub_container:{
        alignItems:'center',
        justifyContent:'center'
    }
});

export default styles;
