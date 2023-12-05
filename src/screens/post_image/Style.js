
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor:colors.BLACK
    },
    PostImage:{
        width:'100%'
    },
    container_post_Button: {
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row',
        // paddingHorizontal: '10%',
        // marginVertical: 20,
        alignItems:'center',
        justifyContent:'center',

    },
    post_Button: {
        backgroundColor: colors.seprator,
        paddingHorizontal: 12,
        borderRadius: 10,
        borderWidth:1,
        borderColor:colors.seprator,
        backgroundColor:colors.BLACK,
        margin:5,
    },
    text_name: {
        fontSize: 11,
        fontWeight: 'bold',
        color: colors.Red,
        marginLeft: 5
    },
    data_container:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:35,
        paddingVertical:8
    },
    name_heading:{
        fontSize:11,
        color:colors.white,
        fontWeight:'bold'
    },
    time_style:{
        fontSize:9,
        color:colors.white,
    },
    text_styling:{
        fontSize:9,
        color:colors.white,
    }

});

export default styles;
