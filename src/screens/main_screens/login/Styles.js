
import { StyleSheet } from 'react-native';
import colors from '../../../assets/theme/Color';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:colors.white
  },
  // mainImage
  pana_style: {
    alignItems: 'center',
    width: '100%',
    // paddingTop: '5%',
    paddingBottom: '5%'
  },
  Image_style:{
    width:200,
    height:180,
    marginBottom:15
  },
  Text_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '12%'
  },
  Text: {
    fontSize: 12,
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
    marginTop:20
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
    paddingVertical:25
  },
  Clickable_Text: {
    color: colors.text_color,
    textAlign: 'center',
    paddingLeft: 5,
    marginLeft: '23%',
    fontSize:11.5
  }
});

export default styles;