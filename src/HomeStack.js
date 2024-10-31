import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import AddNote from './AddNote';
import CircularBtn from './CircularBtn';
import EditNote from './EditNote';
import SwipeButtonComponent  from './SwipeButton2';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="AddNote" component={AddNote} options={{ title: 'Add Note' }} />
      <Stack.Screen name="EditNote" component={EditNote} options={{ title: 'Edit Note' }} />
      <Stack.Screen name="Circula rBtn" component={CircularBtn} options={{ title: 'CircularBtn' }} />
      <Stack.Screen name="SwipeButton" component={SwipeButtonComponent } options={{ title: 'Swipe Button' }} />
    </Stack.Navigator>
  );
};

export default HomeStack;
