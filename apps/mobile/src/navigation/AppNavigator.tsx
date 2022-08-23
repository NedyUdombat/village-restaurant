import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ROUTES } from '../lib/routes';
import AuthNavigator from './AuthNavigator';
// import DashboardNavigator from './tabNavigation/DashboardNavigator';
import { useAuth } from '../context/auth';
import { Loading } from '../components/loading/Loading';
// import MainNavigator from './screenNavigation';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName={ROUTES.AUTH}
  >
    <Stack.Screen name={ROUTES.AUTH} component={AuthNavigator} />
  </Stack.Navigator>
);

// const MainStack = () => (
//   <Stack.Navigator
//     screenOptions={{
//       headerShown: false,
//     }}
//     initialRouteName={ROUTES.DASHBOARD}
//   >
//     <Stack.Screen name={ROUTES.DASHBOARD} component={DashboardNavigator} />
//     <Stack.Screen name={ROUTES.MAINBASE} component={MainNavigator} />
//   </Stack.Navigator>
// );

const AppNavigator = () => {
  const { authData, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }
  return (
    <NavigationContainer>
      {/* {authData ? <MainStack /> : <AuthStack />} */}
      <AuthStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
