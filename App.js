import { NavigationContainer } from '@react-navigation/native';
//import HomeStack from './src/HomeStack';
import MainTab from './src/MainTab';

export default function App() {
  return (
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  );
}
