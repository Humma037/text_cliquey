
import { StyleSheet } from 'react-native';
import colors from '../../../assets/theme/Color';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
  },
  // mainImage
  pana_style: {
    alignItems: 'center',
    width: '100%',
    padding: '10%'
  },
  Text_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '12%'
  },
  Text: {
    fontSize: 12,
    color: colors.themeGrey,
    textAlign: 'center',
    padding: 5
  },
  button_style: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  account_Register: {
    flexDirection: 'row',
    color: colors.orange_color,
    marginLeft: 7,
    fontWeight: 'bold',
    fontSize:13
  },
  account_text: {
    color: colors.text_color,
    fontSize:12,
  },
  account_Register_contanier:{
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center',
    paddingVertical:25
  },
  Clickable_Text: {
    color: colors.text_color,
    textAlign: 'center',
    padding: 10,
    marginLeft: '30%'
  }
});

export default styles;