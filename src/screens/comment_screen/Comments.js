import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from 'react-native';
import SecondHeader from '../../assets/components/custom_hearder/SecondHeader'
import styles from './Style';
import CommentsComp from '../../assets/components/CommentsComp';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ReplyInput from '../../assets/components/ReplyInput'

const CommentSheet = () => {
  const navigation = useNavigation({ navigation });
  const [highlightedName, setHighlightedName] = useState('Lady Gaga'); 
  const inputRef = useRef(null);

  useEffect(() => {
    if (isCommentVisible) {
      inputRef.current.focus();
      setComment(`@${highlightedName} `);
    }
  }, [isCommentVisible, highlightedName]);

  const handleTextInputFocus = () => {
    setComment(`@${highlightedName} `);
  };

  const [comment, setComment] = useState('');
  const [isCommentVisible, setCommentVisible] = useState(false);

  const toggleCommentVisibility = () => {
    setCommentVisible(!isCommentVisible);
  };

  const postComment = () => {
    console.log('Posted Comment:', comment);
    setComment('');
    toggleCommentVisibility();
  };

  return (
    // <View style={styles.container}>
    <View style={styles.Container}>
      <SecondHeader navigation={navigation} name="Comments" icon="angle-left" />
      <ScrollView style={styles.sub_container}>
        <Text style={styles.text}>1.1K Peoples comments on this post</Text>
        <View style={styles.line} />
        <View style={styles.notification}>
          <ScrollView style={styles.notification_container}>
            <View style={styles.notification_details}>
              <CommentsComp />
              <View style={styles.comments_container}>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginTop: 2, marginHorizontal: 7 }}>
                  <Text style={{ color: 'black', fontSize: 11, paddingBottom: 5 }}>Like</Text>
                </TouchableOpacity>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 2, marginHorizontal: 7, flexDirection: 'row' }}>
                  <FontAwesome name="thumbs-o-up" color="black" size={14} />
                  <Text style={{ color: 'black', fontSize: 11, paddingBottom: 3, marginLeft: 3 }}>1</Text>
                </View>
                <TouchableOpacity onPress={postComment} style={{ alignItems: 'center', justifyContent: 'center', marginTop: 2, marginHorizontal: 7 }}>
                  <Text style={{ color: 'black', fontSize: 11, paddingBottom: 5 }}>Reply</Text>
                </TouchableOpacity>
              </View>
            </View>
            <ReplyInput />
            <View style={styles.notification_details}>
              <CommentsComp />
              <View style={styles.comments_container}>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginTop: 2, marginHorizontal: 7 }}>
                  <Text style={{ color: 'black', fontSize: 11, paddingBottom: 5 }}>Like</Text>
                </TouchableOpacity>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 2, marginHorizontal: 7, flexDirection: 'row' }}>
                  <FontAwesome name="thumbs-o-up" color="black" size={14} />
                  <Text style={{ color: 'black', fontSize: 11, paddingBottom: 3, marginLeft: 3 }}>1</Text>
                </View>
                <TouchableOpacity onPress={postComment} style={{ alignItems: 'center', justifyContent: 'center', marginTop: 2, marginHorizontal: 7 }}>
                  <Text style={{ color: 'black', fontSize: 11, paddingBottom: 5 }}>Reply</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.notification_details}>
              <CommentsComp />
              <View style={styles.comments_container}>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginTop: 2, marginHorizontal: 7 }}>
                  <Text style={{ color: 'black', fontSize: 11, paddingBottom: 5 }}>Like</Text>
                </TouchableOpacity>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 2, marginHorizontal: 7, flexDirection: 'row' }}>
                  <FontAwesome name="thumbs-o-up" color="black" size={14} />
                  <Text style={{ color: 'black', fontSize: 11, paddingBottom: 3, marginLeft: 3 }}>1</Text>
                </View>
                <TouchableOpacity onPress={postComment} style={{ alignItems: 'center', justifyContent: 'center', marginTop: 2, marginHorizontal: 7 }}>
                  <Text style={{ color: 'black', fontSize: 11, paddingBottom: 5 }}>Reply</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.notification_details}>
              <CommentsComp />
              <View style={styles.comments_container}>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginTop: 2, marginHorizontal: 7 }}>
                  <Text style={{ color: 'black', fontSize: 11, paddingBottom: 5 }}>Like</Text>
                </TouchableOpacity>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 2, marginHorizontal: 7, flexDirection: 'row' }}>
                  <FontAwesome name="thumbs-o-up" color="black" size={14} />
                  <Text style={{ color: 'black', fontSize: 11, paddingBottom: 3, marginLeft: 3 }}>1</Text>
                </View>
                <TouchableOpacity onPress={postComment} style={{ alignItems: 'center', justifyContent: 'center', marginTop: 2, marginHorizontal: 7 }}>
                  <Text style={{ color: 'black', fontSize: 11, paddingBottom: 5 }}>Reply</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
      <View style={styles.commentContainer}>

        {isCommentVisible && (
          <>
            <TouchableOpacity onPress={postComment} style={styles.cameraButton}>
              <AntDesign name="camera" size={22} color="#A6A6A6" style={styles.commentIcon} />
            </TouchableOpacity>
            <TextInput
              ref={inputRef}
              placeholder={`@${highlightedName} `}
              multiline
              value={comment}
              onChangeText={setComment}
              placeholderTextColor="#A6A6A6"
              style={styles.commentInput}
              onFocus={handleTextInputFocus}
            />
            <TouchableOpacity onPress={postComment} style={styles.postButton}>
              <MaterialCommunityIcons name="send" size={22} color="#fff" style={styles.commentIcon} />
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};



export default CommentSheet;
