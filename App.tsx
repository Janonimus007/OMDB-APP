import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { BottomTab } from './src/navigations/tabs/BottomTab';
import { Provider as StoreProvider } from "react-redux";
import { store } from './src/store/store';

export default function App() {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <BottomTab/>    
      </NavigationContainer>      
    </StoreProvider>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
