
import { StyleSheet } from 'react-native';
import colors from '../../../assets/theme/Color';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pana_style: {
        width: 230,
        height: 200,
        marginTop:20
    },
    image_style:{
        marginBottom:80
    },
    button_style:{
        margin:15,
    },
    heading_style:{
        marginVertical:30
    },
    backIcon:{
        color:colors.BLACK
    }
});

export default styles;