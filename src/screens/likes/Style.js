
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor:colors.white
    },
    notification: {
        width: '100%',
        // alignItems:'center',
        // justifyContent:'center'
        marginLeft:6
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
        margin: 8,
        paddingHorizontal:20
    },
    data_container: {
        width: '78%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:37
    },
    this_week_notification: {
        // height: 655,
        width:'100%',
        marginTop:10
        
    },
    second_sub_container:{
        // alignItems:'center',
        // justifyContent:'center'
    }
});

export default styles;
