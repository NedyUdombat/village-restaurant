import React from 'react';
import { Pressable, SafeAreaView, View } from 'react-native';
import { Text, Icon } from '@ui-kitten/components';
import { useAuth } from '../../../context/auth';

import styles from './styles';
import ProfileCard from '../../../components/profilecard/ProfileCard';
import Button from '../../../components/button/Button';
import { ROUTES } from '../../../lib/routes';
import colors from '../../../lib/colors';

interface SettingsNav {
  name: string;
  action: () => void;
}

const SettingsScreen = ({ navigation }) => {
  const { signOut } = useAuth();

  const settingsNavs: SettingsNav[] = [
    {
      name: 'About',
      action: () =>
        navigation.navigate(ROUTES.MAINBASE, {
          screen: ROUTES.MAIN,
          params: {
            screen: ROUTES.SECURITY,
          },
        }),
    },
    {
      name: 'Privacy Policy',
      action: () =>
        navigation.navigate(ROUTES.MAINBASE, {
          screen: ROUTES.SETTINGS_NAVIGATOR,
          params: {
            screen: ROUTES.PROFILE,
          },
        }),
    },
    {
      name: 'FAQ',
      action: () =>
        navigation.navigate(ROUTES.MAINBASE, {
          screen: ROUTES.SETTINGS_NAVIGATOR,
          params: {
            screen: ROUTES.PROFILE,
          },
        }),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <ProfileCard />
        <View style={styles.listContainer}>
          {settingsNavs.map((nav) => (
            <Pressable
              key={nav.name}
              style={styles.listItem}
              onPress={nav.action}
            >
              <Text style={styles.listItemTitle}>{nav.name}</Text>
              <Icon name="chevron-right" fill={colors.primary} />
            </Pressable>
          ))}
        </View>
        <Button appearance="ghost" onPress={() => signOut()}>
          Log out
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
