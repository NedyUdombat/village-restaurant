import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Text } from '@ui-kitten/components';

import { ROUTES } from '../../lib/routes';
import styles from './styles';
import Button from '../../components/button/Button';

const OnboardingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{}}>
        <View style={styles.viewContainer}>
          <View style={styles.logoContainer}>{/* <Logo width={68} /> */}</View>
          <Text style={styles.title}>Welcome to The Village Restaurant</Text>
          <Text style={styles.subtitle}>
            You can now convieniently order your favourite local delicacies
            anytime anyday 24/7 in and around Lekki
          </Text>

          <Button
            styles={{ marginTop: 24 }}
            appearance="filled"
            onPress={() => navigation.navigate(ROUTES.REGISTRATION)}
            status="warning"
          >
            Sign up
          </Button>
          <Button
            styles={{ marginTop: 16 }}
            appearance="filled"
            onPress={() => navigation.navigate(ROUTES.AUTHENTICATION)}
            status="basic"
          >
            Sign in
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
