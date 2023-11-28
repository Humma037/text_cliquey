
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
  Image_style:{
    width:175.46,
    height:154.52,
    marginBottom:15
  },
  Text_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '12%'
  },
  Text: {
    fontSize: 11,
    color: colors.text_color ,       
    textAlign: 'center',
    padding: 8
  },
  TextInput:{
    paddingVertical:3
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
    fontSize:11
  },
  account_text: {
    color: colors.text_color,
    fontSize:10,
  },
  account_Register_contanier:{
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center',
    paddingVertical:15
  },
  Clickable_Text: {
    color: colors.text_color,
    textAlign: 'center',
    padding: 10,
    marginLeft: '25%',
    fontSize:10
  }
});

export default styles;