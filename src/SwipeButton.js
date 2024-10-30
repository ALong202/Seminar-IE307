import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ToastAndroid,
  StyleSheet,
} from 'react-native';
import SwipeButton from 'rn-swipe-button';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Animated: `useNativeDriver`']);



const SwipeButtonComponent  = () => {



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          Example of React Native Swipe Button
        </Text>
        <SwipeButton
          disabled={false}
          //disable the button by doing true (Optional)
          swipeSuccessThreshold={70}
          height={45}
          //height of the button (Optional)
          width={330}
          //width of the button (Optional)
          title="Swipe to Submit"
          //Text inside the button (Optional)
          //thumbIconImageSource={thumbIcon}
          //You can also set your own icon for the button (Optional)
          onSwipeSuccess={() => {
            alert('Submitted Successfully!');
          }}
          //After the completion of swipe (Optional)
          railFillBackgroundColor="#e688a1" //(Optional)
          railFillBorderColor="#e688ff" //(Optional)
          thumbIconBackgroundColor="#ed9a73" //(Optional)
          thumbIconBorderColor="#ed9aff" //(Optional)
          railBackgroundColor="#bbeaa6" //(Optional)
          railBorderColor="#bbeaff" //(Optional)
        />
      </View>
    </SafeAreaView>
  );
};
export default SwipeButtonComponent ;

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
});
