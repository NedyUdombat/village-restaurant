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

const RegistrationScreen = ({ navigation }) => {
  const { control, handleSubmit, reset } = useForm<FormValues | any>({
    defaultValues: {
      email: '',
      phonenumber: '',
      password: '',
    },
  });
  const { register } = useAuth();

  const handleAuthentication = (data) => {
    reset({ password: '' });
    return register(data);
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
          <Text style={styles.title}>Hi There!</Text>
          <Text style={styles.subtitle}>Create your account</Text>
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
              label="Phone Number"
              keyboardType="phone-pad"
              name="phonenumber"
              control={control}
              rules={{ required: 'Phone Number is required' }}
              inputStyle={{
                marginTop: 0,
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
              onPress={() => navigation.navigate(ROUTES.AUTHENTICATION)}
              styles={{ marginTop: 8 }}
              appearance="ghost"
              status="info"
            >
              <>
                <Text style={styles.signupLinkPreText}>
                  Already have an account?
                </Text>
                <Text style={styles.signupLinkLink}>Sign in</Text>
              </>
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
