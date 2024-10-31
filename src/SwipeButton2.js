import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ToastAndroid,
  StyleSheet,
} from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

const SwipeGestureComponent = () => {
  // Hàm xử lý khi vuốt thành công
  const onSwipeSuccess = (gestureName) => {
    const { SWIPE_LEFT, SWIPE_RIGHT, SWIPE_UP, SWIPE_DOWN } = swipeDirections;
    switch (gestureName) {
      case SWIPE_LEFT:
        ToastAndroid.show('Swiped Left!', ToastAndroid.SHORT);
        break;
      case SWIPE_RIGHT:
        ToastAndroid.show('Swiped Right!', ToastAndroid.SHORT);
        break;
      case SWIPE_UP:
        ToastAndroid.show('Swiped Up!', ToastAndroid.SHORT);
        break;
      case SWIPE_DOWN:
        ToastAndroid.show('Swiped Down!', ToastAndroid.SHORT);
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>Example of React Native Swipe Gesture</Text>
        <GestureRecognizer
          onSwipe={(direction) => onSwipeSuccess(direction)}
          config={{
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80,
          }}
          style={styles.swipeContainer}>
          <Text style={styles.swipeText}>Swipe in any direction</Text>
        </GestureRecognizer>
      </View>
    </SafeAreaView>
  );
};

export default SwipeGestureComponent;

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
  swipeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
  },
  swipeText: {
    fontSize: 20,
    color: '#333',
  },
});
