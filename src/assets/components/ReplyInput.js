import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../theme/Color';
import MainStyles from '../styles/MainStyles';

const ReplyInput = () => {
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
              <View style={{flexDirection:'row', margin:5}}>
                  <Text style={styles.timing_text}>18:09 AM 15/09/2023</Text>
                <TouchableOpacity onPress={handleCommentPress}>
                  <Entypo name="dots-three-vertical" size={18} style={styles.ellipsis_Icon} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.para_text}>
              Lorem ipsum doler milra dilrof Lorem ipsum doler milra Lorem ipsum doler dilrof.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.comments_container}>
        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginTop: 2, marginHorizontal: 7 }}>
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
      
    </View>
  );
};

export default ReplyInput;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  main_Container: {
    width: '90%',
  },
  sub_container: {
    backgroundColor: colors.seprator,
    padding: 10,
    width: '90%',
    borderRadius: 10,
  },
  massage_Container: {
    flexDirection: 'row',
    width: '105%',
    justifyContent: 'space-between',
  },
  user_Icon: {
    width: 45,
    height: 45,
    backgroundColor: colors.seprator,
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 50,
    color: colors.DividingLine,
    marginHorizontal: 5
  },
  name_heading: {
    fontSize: 12,
    color: colors.BLACK,
    fontWeight: 'bold',
  },
  timing_text: {
    fontWeight: 'bold',
    fontSize: 10,
    color: colors.DividingLine,
  },
  text: {
    fontSize: 11,
    color: colors.BLACK,
  },
  icon: {
    color: colors.BLACK,
  },
  ellipsis_Icon: {
    color: colors.DividingLine,
    marginLeft: 5,
  },
  para_text: {
    color: 'black',
    fontSize: 12,
  },
  comments_container: {
    flexDirection: 'row',
    marginLeft: '16%'
  },

});




