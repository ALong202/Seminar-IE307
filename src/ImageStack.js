import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import AddNote from './AddNote';
import EditNote from './EditNote';
import SwipeButtonComponent  from './SwipeButton';
import ImageBackgroundCPN from './ImageBackgroundCPN';
import FastImageCPN from './FastImageCPN';
import Image_Mapper from './Image_Mapper';
import SliderImageCPN from './SliderImageCPN';
import GridImageCPN from './GridImageCPN';



const Stack = createStackNavigator();

const ImageStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ImageBackgroundCPN" component={ImageBackgroundCPN } options={{ title: 'Image Background' }} />
      <Stack.Screen name="FastImageCPN" component={FastImageCPN } options={{ title: 'Fast Image' }} />
      <Stack.Screen name="Image_Mapper" component={Image_Mapper } options={{ title: 'Image Mapper' }} />
      <Stack.Screen name="SliderImageCPN" component={SliderImageCPN } options={{ title: 'Slider Image' }} />
      <Stack.Screen name="GridImageCPN" component={GridImageCPN } options={{ title: 'Grid Image' }} />
    </Stack.Navigator>
  );
};

export default ImageStack;
