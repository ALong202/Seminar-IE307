// Import các thư viện React và React Native
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Animated,
  PanResponder,
} from 'react-native';

// Lấy chiều rộng màn hình để sử dụng làm ngưỡng vuốt
const SCREEN_WIDTH = Dimensions.get('window').width;

// Component SwipeableCard đại diện cho mỗi thẻ có thể vuốt được
const SwipeableCard = ({ item, removeCard, swipedDirection }) => {
  // xPosition: Giá trị động cho vị trí ngang (x) của thẻ, thay đổi khi người dùng kéo thẻ.
  const [xPosition, setXPosition] = useState(new Animated.Value(0));
  let swipeDirection = ''; // Biến này dùng để lưu hướng vuốt (trái/phải)

  let cardOpacity = new Animated.Value(1); // Quản lý độ mờ của thẻ, giảm dần khi thẻ được vuốt hoàn toàn khỏi màn hình

  // Tạo hiệu ứng xoay thẻ khi vuốt từ trái qua phải hoặc ngược lại
  let rotateCard = xPosition.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: ['-20deg', '0deg', '20deg'],
  });

  // Tạo PanResponder để xử lý các cử chỉ vuốt
  let panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => false, // Không bắt đầu PanResponder khi người dùng chạm
    onMoveShouldSetPanResponder: (evt, gestureState) => true,  // Bắt đầu PanResponder khi người dùng di chuyển ngón tay
    onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

    // Cập nhật vị trí ngang (xPosition) khi người dùng kéo thẻ
    onPanResponderMove: (evt, gestureState) => {
      xPosition.setValue(gestureState.dx); // Thiết lập vị trí mới của xPosition dựa trên cử chỉ
      // Kiểm tra hướng vuốt
      if (gestureState.dx > SCREEN_WIDTH - 250) {
        swipeDirection = 'Right';
      } else if (gestureState.dx < -SCREEN_WIDTH + 250) {
        swipeDirection = 'Left';
      }
    },

    // Xử lý khi người dùng thả ngón tay
    onPanResponderRelease: (evt, gestureState) => {
      if (
        gestureState.dx < SCREEN_WIDTH - 150 &&
        gestureState.dx > -SCREEN_WIDTH + 150
      ) {
        // Vuốt không đủ mạnh, đưa thẻ về vị trí cũ
        swipedDirection('--');
        Animated.spring(xPosition, {
          toValue: 0,
          speed: 5,
          bounciness: 10,
          useNativeDriver: false,
        }).start();
      } else if (gestureState.dx > SCREEN_WIDTH - 150) {
        // Vuốt đủ mạnh sang phải, đưa thẻ ra khỏi màn hình
        Animated.parallel([
          Animated.timing(xPosition, {
            toValue: SCREEN_WIDTH,
            duration: 200,
            useNativeDriver: false,
          }),
          Animated.timing(cardOpacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
          }),
        ]).start(() => {
          swipedDirection(swipeDirection); // Cập nhật hướng vuốt
          removeCard(); // Xóa thẻ khỏi màn hình
        });
      } else if (gestureState.dx < -SCREEN_WIDTH + 150) {
        // Vuốt đủ mạnh sang trái, đưa thẻ ra khỏi màn hình
        Animated.parallel([
          Animated.timing(xPosition, {
            toValue: -SCREEN_WIDTH,
            duration: 200,
            useNativeDriver: false,
          }),
          Animated.timing(cardOpacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
          }),
        ]).start(() => {
          swipedDirection(swipeDirection); // Cập nhật hướng vuốt
          removeCard(); // Xóa thẻ khỏi màn hình
        });
      }
    },
  });

  // Trả về phần tử Animated.View để hiển thị thẻ có thể vuốt được
  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        styles.cardStyle,
        {
          backgroundColor: item.backgroundColor, // Đặt màu nền cho thẻ từ dữ liệu item
          opacity: cardOpacity, // Điều chỉnh độ mờ của thẻ
          transform: [{ translateX: xPosition }, { rotate: rotateCard }], // Di chuyển và xoay thẻ dựa trên cử chỉ
        },
      ]}>
      <Text style={styles.cardTitleStyle}> {item.cardTitle} </Text>
    </Animated.View>
  );
};

// Component chính hiển thị các thẻ vuốt được
const SwipeableCardCPN = () => {
  const [noMoreCard, setNoMoreCard] = useState(false); // Trạng thái để kiểm tra xem có còn thẻ không
  const [sampleCardArray, setSampleCardArray] = useState(DEMO_CONTENT); // Mảng thẻ để hiển thị
  const [swipeDirection, setSwipeDirection] = useState('--'); // Hướng vuốt cuối cùng

  // Hàm xóa thẻ khỏi mảng khi được vuốt ra khỏi màn hình
  const removeCard = (id) => {
    sampleCardArray.splice(
      sampleCardArray.findIndex((item) => item.id == id),
      1,
    );
    setSampleCardArray([...sampleCardArray]); // Cập nhật lại mảng thẻ
    if (sampleCardArray.length == 0) {
      setNoMoreCard(true); // Nếu hết thẻ, cập nhật trạng thái `noMoreCard`
    }
  };

  // Hàm cập nhật hướng vuốt cuối cùng
  const lastSwipedDirection = (swipeDirection) => {
    setSwipeDirection(swipeDirection);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.titleText}>
        React Native Swipeable Card View UI like Tinder
      </Text>
      <Text style={styles.swipeText}>
        Last Card Swipe Direction was{'\n'}
        {swipeDirection}
      </Text>
      <View style={styles.container}>
        {/* Hiển thị từng thẻ từ `sampleCardArray` */}
        {sampleCardArray.map((item, key) => (
          <SwipeableCard
            key={key}
            item={item}
            removeCard={() => removeCard(item.id)}
            swipedDirection={lastSwipedDirection}
          />
        ))}
        {/* Hiển thị thông báo khi không còn thẻ nào */}
        {noMoreCard ? (
          <Text style={{ fontSize: 22, color: '#000' }}>
            No Cards Found.
          </Text>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default SwipeableCardCPN;

// Định nghĩa các kiểu dáng cho thẻ và văn bản
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  cardStyle: {
    width: '75%',
    height: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 7,
  },
  cardTitleStyle: {
    color: '#fff',
    fontSize: 24,
  },
  swipeText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

// Dữ liệu mẫu cho các thẻ
const DEMO_CONTENT = [
  {
    id: '1',
    cardTitle: 'Card 1',
    backgroundColor: '#FFC107',
  },
  {
    id: '2',
    cardTitle: 'Card 2',
    backgroundColor: '#ED2525',
  },
  {
    id: '3',
    cardTitle: 'Card 3',
    backgroundColor: '#E7088E',
  },
  {
    id: '4',
    cardTitle: 'Card 4',
    backgroundColor: '#00BCD4',
  },
  {
    id: '5',
    cardTitle: 'Card 5',
    backgroundColor: '#FFFB14',
  },
].reverse();
