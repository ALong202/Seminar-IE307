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
import CardViewCPN from './CardViewCPN';
import SwipeableCardCPN from './SwipeableCardCPN';
import GiftCardCPN from './GiftCardCPN';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="AddNote" component={AddNote} options={{ title: 'Add Note' }} />
      <Stack.Screen name="EditNote" component={EditNote} options={{ title: 'Edit Note' }} />
      <Stack.Screen name="SwipeButton" component={SwipeButtonComponent } options={{ title: 'Swipe Button' }} />
    </Stack.Navigator>
  );
};

export default HomeStack;
