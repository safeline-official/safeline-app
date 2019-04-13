
import {createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './pages/Home';
import SignUpScreen from './pages/SignUp';
import LoginScreen from './pages/Login';
import AsyncStorage from '@react-native-community/async-storage/lib/AsyncStorage';

// removeValue = async () => {
//   try {
//     await AsyncStorage.removeItem('@username')
//   } catch(e) {
//     // remove error
//   }
// }

// removeValue();

// setUser = async () => {
//   try {
//   await AsyncStorage.setItem('@username', "test");
//   } catch(e) {
//   // save error
//   }
// }

// setUser();

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,
    SignUp: SignUpScreen,
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(AppNavigator);


