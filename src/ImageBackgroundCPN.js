// React Native Full Screen Background Image
// https://aboutreact.com/react-native-full-screen-background-image/

// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FAB, Provider as PaperProvider } from 'react-native-paper'; // Thêm FAB.Group từ react-native-paper



const ImageBackgroundCPN = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isFabOpen, setIsFabOpen] = useState(false); // Trạng thái mở/đóng của FAB Group



  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{flex: 1}}
        //We are using online image to set background
        source={{
          uri:
            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg',
        }}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')
      >
        <View style={styles.container}>
          <Text style={styles.titleStyle}>
            React Native Full Screen Background Image
          </Text>
          <View style={styles.centerContentStyle}>
            <Image
              source={{
                uri:
                  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png',
              }}
              style={{
                width: 40,
                height: 40,
                marginTop: 90
              }}
            />
            <Text style={styles.TextStyle}>
              AboutReact
            </Text>
          </View>
          {/* Nút FAB Group */}
        <FAB.Group
          open={isFabOpen}
          icon={isFabOpen ? 'close' : 'plus'}
          actions={[
            { icon: 'eye', label: 'Fast Image CPN', onPress: () => navigation.navigate('FastImageCPN') }, //SwipeButton
            { icon: 'star', label: 'SliderImageCPN', onPress: () => navigation.navigate('SliderImageCPN') },
            { icon: 'share', label: 'Image_Mapper', onPress: () => navigation.navigate('Image_Mapper') }, //Image_Mapper
            { icon: 'share', label: 'GridImageCPN', onPress: () => navigation.navigate('GridImageCPN') },//GridImageCPN
          ]}
          onStateChange={({ open }) => setIsFabOpen(open)}
          onPress={() => {
            if (isFabOpen) {
              // Xử lý logic khi FAB mở
            }
          }}
          style={styles.fabGroup}
        />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default ImageBackgroundCPN;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  centerContentStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});