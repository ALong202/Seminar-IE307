import { createStackNavigator } from '@react-navigation/stack';
import CardViewCPN from './CardViewCPN';
import SwipeableCardCPN from './SwipeableCardCPN';
import GiftCardCPN from './GiftCardCPN';

const Stack = createStackNavigator();

const CardStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CardViewCPN" component={CardViewCPN } options={{ title: 'CardViewCPN' }} />
      <Stack.Screen name="SwipeableCardCPN" component={SwipeableCardCPN } options={{ title: 'SwipeableCardCPN' }} />
      <Stack.Screen name="GiftCardCPN" component={GiftCardCPN } options={{ title: 'GiftCardCPN' }} />
    </Stack.Navigator>
  );
};

export default CardStack;
