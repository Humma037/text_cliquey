import React, { useRef } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import colors from "../theme/Color";
import PostButton from "./reusable_buttons/PostButton";
import CommentsComp from '../components/CommentsComp'
import { useNavigation } from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default function LikeScreen() {
  const refRBSheet = useRef();  // Define the ref here
  const navigation = useNavigation();

  const handleCommentPress = () => {
    navigation.navigate('Comments');
  };

  const openBottomSheet = () => {
    refRBSheet.current.open();
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={openBottomSheet} style={{
        flexDirection: 'row', backgroundColor: colors.seprator,
        paddingVertical: 11, paddingHorizontal: 18, borderRadius: 15,
      }}>
        <EvilIcons name="comment" size={20} color='black' />
        <Text style={{ color: 'black', fontSize: 9, marginLeft: 2 }}>234</Text>
      </TouchableOpacity>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={550}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          draggableIcon: {
            backgroundColor: colors.DividingLine,
            marginTop: 15
          },
          container: {
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          },
        }}
      >
        <View contentContainerStyle={{ flexGrow: 1 }}>
          <Text
            style={{
              color: 'black', textAlign: 'center',
              fontSize: 13, paddingVertical: 15
            }}
          >
            1.1K Peoples Like this post</Text>

          <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', width: '100%' }} />
          <ScrollView>
            <View style={{ flexGrow: 1 }}>
              <TouchableOpacity onPress={handleCommentPress} style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                <Text style={{ color: 'black', fontSize: 12, paddingBottom: 25 }}>All Comments</Text>
              </TouchableOpacity>
              <View style={{ marginBottom: 15 }}>
                <CommentsComp />
              </View>
              <View style={{ marginBottom: 15 }}>
                <CommentsComp />
              </View>
              <View style={{ marginBottom: 15 }}>
                <CommentsComp />
              </View>
            </View>
          </ScrollView>
        </View>
      </RBSheet>
    </View>
  );
}
