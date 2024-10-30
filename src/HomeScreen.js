import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  const clickHandler = () => {
    // Chuyển sang màn hình AddNote
    navigation.navigate('AddNote');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          React Native Button Component
        </Text>
        <Text style={styles.textStyle}>
          
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={clickHandler}
          style={styles.touchableOpacityStyle}>
          <Image
            source={{
              uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
            }}
            style={styles.floatingButtonStyle}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  textStyle: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
});
