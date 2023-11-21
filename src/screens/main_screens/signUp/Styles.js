

import { StyleSheet } from 'react-native';
import colors from '../../../assets/theme/Color';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
    },
    pana_style: {
        width: 150,
        height: 200,
        marginTop:10
    },
    button_style:{
        margin:15,
    },
    account_Register: {
        flexDirection: 'row',
        color:colors.orange_color,
        marginLeft:7,
        fontWeight:'bold'
      },
      account_text:{
        color:colors.BLACK
      }
});

export default styles;
