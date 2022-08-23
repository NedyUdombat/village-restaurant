import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ROUTES } from '../lib/routes';
import AuthenticationScreen from '../screens/auth/authentication/AuthenticationScreen';
import RegistrationScreen from '../screens/auth/registration/RegistrationScreen';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen';
// import ForgotPasswordScreen from '../screens/auth/forgotPassword/ForgotPasswordScreen';
// import ResetPasswordScreen from '../screens/auth/resetPassword/ResetPasswordScreen';
// import VerificationScreen from '../screens/auth/verification/VerificationScreen';
// import SuccessScreen from '../screens/auth/success/SuccessScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.ONBOARDING}
    >
      <Stack.Screen name={ROUTES.ONBOARDING} component={OnboardingScreen} />
      <Stack.Screen
        name={ROUTES.AUTHENTICATION}
        component={AuthenticationScreen}
      />
      <Stack.Screen name={ROUTES.REGISTRATION} component={RegistrationScreen} />
      {/*  <Stack.Screen
        name={ROUTES.FORGOT_PASSWORD}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name={ROUTES.RESET_PASSWORD}
        component={ResetPasswordScreen}
      />
      <Stack.Screen name={ROUTES.VERIFICATION} component={VerificationScreen} />
      <Stack.Screen name={ROUTES.SUCCESS} component={SuccessScreen} /> */}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
