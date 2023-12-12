
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor:colors.white
    },
    notification:{
        width:'100%',
    },
    text: {
        fontWeight: "bold",
        fontSize: 12,
        color: colors.light_black,
        textAlign:'center',
        marginTop:10
    },
    text_heading: {
        fontWeight: "bold",
        fontSize: 15,
        color: colors.light_black,
        margin:5
    },
    notification_details:{
      margin:5
    },
    this_week_notification:{
        width:400,
        height:430,
    },
    line:{
        width:'100%',
        height:2,
        backgroundColor:colors.DividingLine,
        marginVertical:15
    },
      ellipsisIcon: {
        color: colors.DividingLine,
        marginTop: 4,
        marginLeft: 2,
      },
      comments_container: {
        flexDirection: 'row',
        marginLeft: '16%'
      },

      commentContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent:'space-between',
        padding:5,
        width: '100%',
        height:61
      },
      commentInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        // borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 15,
        color: 'black',
        width: '73%', 
        height: 'auto', 
        maxHeight: 150,        
        backgroundColor:colors.seprator,
      },
      postButton: {
        backgroundColor: colors.orange_color,
        padding: 10,
        borderRadius: 25,
        alignItems: 'center',
        width: '12%',
        height: 45, 
      },
      postButtonText: {
        color: 'white',
        fontWeight: 'bold',
      },
      toggleButton: {
        marginTop: 20,
      },
      commentIcon:{
        alignItems:'center',
        justifyContent:'center',
      },
      cameraButton:{
        backgroundColor: colors.seprator,
        padding: 10,
        borderRadius: 25,
        alignItems: 'center',
        width: '12%',
        height: 45, 
      }
});

export default styles;
