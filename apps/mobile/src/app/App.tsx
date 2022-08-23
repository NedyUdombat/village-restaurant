import React from 'react';
import AppNavigator from '../navigation/AppNavigator';
import { AuthProvider } from '../context/auth';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as theme } from '../lib/custom-theme.json';

export const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <AuthProvider>
          <AppNavigator />
        </AuthProvider>
      </ApplicationProvider>
    </>
  );
};

export default App;
