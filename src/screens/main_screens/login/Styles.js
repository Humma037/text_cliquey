
import { StyleSheet } from 'react-native';
import colors from '../../../assets/theme/Color';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
    },
    // mainImage
    pana_style: {
        margin:25
    },
    button_style:{
        margin:25,
    },
    account_Register: {
        flexDirection: 'row',
        color:colors.orange_color,
        marginLeft:7,
        fontWeight:'bold'
      },
      account_text:{
        color:colors.text_color,
      },
      Clickable_Text:{
        color:colors.text_color,
        padding:10,
        marginLeft:80
      }
});

export default styles;