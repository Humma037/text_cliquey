
import { StyleSheet } from 'react-native';
import colors from '../../../assets/theme/Color';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
    },
    pana_style: {
        alignItems: 'center',
        width: '100%',
        padding: '20%'
    },
    Image_style:{
        width:230,
        height:152.52,
      },
    Text_container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '12%'
    },
    Text: {
        fontSize: 11,
        textAlign: 'center',
        padding: 8,
        color: colors.text_color        
    },
    sub_container: {
        paddingVertical: 10
    },
    button_style: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5
    },
});

export default styles;