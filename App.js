import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider, AppContext } from './context/AppContext';
import AuthStackScreen from './navigation/AuthStack';
import MainTabScreen from './navigation/MainTab';

const AppContent = () => {
  const { isLoggedIn } = React.useContext(AppContext);

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainTabScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};

const App = () => (
  <AppProvider>
    <AppContent />
  </AppProvider>
);

export default App;