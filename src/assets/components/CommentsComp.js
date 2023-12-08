import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../theme/Color';
import MainStyles from '../styles/MainStyles';

const CommentsComp = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleCommentPress = () => {
    toggleModal();
    // Handle button press logic here
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.Container}>
      <View style={styles.main_Container}>
        <View style={MainStyles.Direction_Horizental}>
          <FontAwesome name="user" size={25} style={styles.user_Icon} />
          <View style={styles.sub_container}>
            <View style={styles.massage_Container}>
              <Text style={styles.name_heading}>Lady Gaga</Text>
              <View style={MainStyles.Direction_Horizental}>
                <View style={styles.textContainer}>
                  <Text style={styles.timing_text}>18:09 AM 15/09/2023</Text>
                </View>
                <TouchableOpacity onPress={handleCommentPress}>
                  <Entypo name="dots-three-vertical" size={18} style={styles.ellipsis_Icon} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.para_text}>
              Lorem ipsum doler milra dilrof Lorem ipsum doler milra dilrof Lorem ipsum doler milra dilrof Lorem ipsum doler milra dilr
              Lorem ipsum
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.comments_container}>
        <TouchableOpacity  style={{ alignItems: 'center', justifyContent: 'center', marginTop: 2, marginHorizontal: 7 }}>
          <Text style={{ color: 'black', fontSize: 11, paddingBottom: 5 }}>Like</Text>
        </TouchableOpacity>
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 2, marginHorizontal: 7, flexDirection: 'row' }}>
          <FontAwesome name="thumbs-o-up" color="black" size={14} />
          <Text style={{ color: 'black', fontSize: 11, paddingBottom: 3, marginLeft: 3 }}>1</Text>
        </View>
        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginTop: 2, marginHorizontal: 7 }}>
          <Text style={{ color: 'black', fontSize: 11, paddingBottom: 5 }}>Reply</Text>
        </TouchableOpacity>
      </View>

      <Modal transparent visible={isModalVisible} onRequestClose={toggleModal}>
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <TouchableOpacity onPress={() => { /* Handle option 1 */ }} style={styles.modalOption}>
                  <Text style={styles.modalTxt}>Hide Comment</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { /* Handle option 2 */ }} style={styles.modalOption}>
                  <Text style={styles.modalTxt}>Report Comment</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default CommentsComp;
const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    main_Container: {
        marginLeft: 10
    },
    sub_container: {
        backgroundColor: colors.seprator,
        padding: 12,
        width: 280,
        borderRadius: 15
    },
    massage_Container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    textContainer: {
        margin: 10,
    },
    user_Icon: {
        width: 45,
        height: 45,
        backgroundColor: colors.seprator,
        paddingHorizontal: 14,
        paddingVertical: 9,
        borderRadius: 50,
        color: colors.DividingLine,
        marginRight: 5
    },
    name_heading: {
        fontSize: 12,
        color: colors.BLACK,
        fontWeight: 'bold',
        marginVertical: 5
    },
    timing_text: {
        fontWeight: 'bold',
        fontSize: 9,
        color: colors.DividingLine,
    },
    text: {
        fontSize: 10,
        color: colors.BLACK,
    },
    button: {
        paddingHorizontal: 15,
        borderRadius: 10,
        paddingVertical: 6,
        borderWidth: 0.5,
        borderColor: colors.BLACK,
        flexDirection: 'row',
        width: 65,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 8,
        marginLeft: 3
    },
    icon: {
        color: colors.BLACK,
        marginRight: 3,
    },
    ellipsis_Icon: {
        color: colors.DividingLine,
        marginTop: 8,
    },
    para_text: {
        color: 'black',
        fontSize: 11,
    },
    comments_container: {
        flexDirection: 'row',
        marginLeft: '16%'
    },
    modalContainer: {
        flex: 1,
        width:180
      },
      modalContent: {
        backgroundColor: colors.DividingLine
        ,
        padding: 10,
        borderRadius: 10,
        width:'100%',
        position: 'absolute',
        top: 230,
        right: -160,
        zIndex: 1,
      },
      modalOption: {
        paddingHorizontal: 5,
      },
      modalTxt:{
        color:colors.BLACK,
        fontSize:11,
        marginVertical:5
      }
});




