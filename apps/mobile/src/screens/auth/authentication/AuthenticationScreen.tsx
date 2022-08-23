import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { Text } from '@ui-kitten/components';

import Input from '../../../components/input/Input';
import { ROUTES } from '../../../lib/routes';
import styles from './styles';
import Button from '../../../components/button/Button';
import { useAuth } from '../../../context/auth';

type FormValues = {
  email: string;
  password: string;
};

const AuthenticationScreen = ({ navigation }) => {
  const { control, handleSubmit, reset, clearErrors } = useForm<
    FormValues | any
  >({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { authenticate } = useAuth();

  const handleAuthentication = (data) => {
    reset({ password: '' });
    return authenticate(data);
  };

  useEffect(() => {
    function clearErrorData() {
      // setAuthError(undefined);
    }
    clearErrorData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{}}>
        <View style={styles.viewContainer}>
          <View style={styles.logoContainer}>{/* <Logo width={68} /> */}</View>
          <Text style={styles.title}>Welcome Back!</Text>
          <View style={styles.authForm}>
            <Input
              keyboardType="email-address"
              label="Email"
              name="email"
              control={control}
              rules={{
                required: 'Email is required',
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Email in not valid',
                },
              }}
            />
            <Input
              label="Password"
              name="password"
              control={control}
              rules={{
                required: 'Password is required',
              }}
              secureTextEntry
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}
            >
              <Button
                styles={{ marginTop: 4, paddingRight: 0 }}
                appearance="ghost"
                size={'small'}
                status={'danger'}
                onPress={() => {
                  clearErrors();
                  navigation.navigate(ROUTES.FORGOT_PASSWORD);
                }}
              >
                <Text status="danger">Forgot Password?</Text>
              </Button>
            </View>
            {/* {authError && (
              <View>
                <Text style={styles.apiErrorText}>{authError}</Text>
              </View>
            )} */}
            <Button
              styles={{ marginTop: 16 }}
              appearance="filled"
              onPress={handleSubmit(handleAuthentication)}
            >
              Continue
            </Button>

            <Button
              onPress={() => {
                clearErrors();
                navigation.navigate(ROUTES.REGISTRATION);
              }}
              styles={{ marginTop: 8 }}
              appearance="ghost"
              status="info"
            >
              <>
                <Text style={styles.signupLinkPreText}>
                  Don't have an account?
                </Text>
                <Text style={styles.signupLinkLink}>Sign up</Text>
              </>
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AuthenticationScreen;
