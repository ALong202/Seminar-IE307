import React, { useState } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FAB, Provider as PaperProvider } from 'react-native-paper'; // Thêm FAB.Group từ react-native-paper

const AddNote = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isFabOpen, setIsFabOpen] = useState(false); // Trạng thái mở/đóng của FAB Group

  return (
    <PaperProvider>
      <View style={styles.container}>
        <TextInput
          placeholder="Enter title"
          value={title}
          onChangeText={setTitle}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Enter content"
          value={content}
          onChangeText={setContent}
          style={styles.textInput2}
          multiline
        />
        
        {/* Khu vực chứa các biểu tượng */}
        <View style={styles.iconButton}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="close-circle" size={50} color={"red"} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="checkmark-circle" size={50} color={"green"} />
          </TouchableOpacity>         
        </View>


        {/* Nút FAB Group */}
        <FAB.Group
          open={isFabOpen}
          icon={isFabOpen ? 'close' : 'plus'}
          actions={[
            { icon: 'eye', label: 'Circular Button', 
              onPress: () => navigation.navigate('EditNote') 
            }, 
            { icon: 'star', label: 'Swipe Button', 
              onPress: () => navigation.navigate('SwipeButton') 
            },
          ]}
          onStateChange={({ open }) => setIsFabOpen(open)}
          onPress={() => {
            if (isFabOpen) {

            }
          }}
          style={styles.fabGroup}
        />
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex_start',
    alignItems: 'center',
    marginTop: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    width: '80%',
    marginBottom: 20,
    padding: 10,
    color: '#000',
  },
  textInput2: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    width: '80%',
    marginBottom: 20,
    padding: 10,
    color: '#000',
    height: "40%"
  },
  iconButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },

  fabGroup: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    color: 'white',
  },
    actionButtonIcon: {
    color: 'white', // Màu của biểu tượng trên các nút
  },
});

export default AddNote;
