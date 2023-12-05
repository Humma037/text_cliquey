
import { StyleSheet } from 'react-native';
import colors from '../../../assets/theme/Color';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor:colors.white
    },
    sub_container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    image_style:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height:70,
        marginTop:30
    },
    text_style: {
        color: colors.text_color ,       
        fontSize: 11,
        paddingHorizontal: '12%',
        textAlign: 'center',
        paddingVertical: 5
    },
    pana_style: {
        width: '110%',
        height: 300,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image_width:{
        width:220,
        height:230
    },
    button_container:{
        marginTop: '12%', 
    },
    button_style: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',   
    },

});

export default styles;
