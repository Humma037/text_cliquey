
import { StyleSheet } from 'react-native';
import colors from '../../../assets/theme/Color';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
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
        height:110
    },
    text_style: {
        color: colors.text_color ,       
        fontSize: 11,
        paddingHorizontal: '12%',
        textAlign: 'center',
        paddingVertical: 10
    },
    pana_style: {
        width: '100%',
        height: 300,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image_width:{
        width:222.6,
        height:217.45
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
