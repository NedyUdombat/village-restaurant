import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from '@ui-kitten/components';
import { ROUTES } from '../../lib/routes';
import SettingsScreen from '../../screens/dashboard/settings/SettingsScreen';
import HomeScreen from '../../screens/dashboard/home/HomeScreen';
import OrdersScreen from '../../screens/dashboard/orders/OrdersScreen';
import colors from '../../lib/colors';

const Tab = createBottomTabNavigator();

const commonTabStyle = {
  fontSize: 12,
  lineHeight: 14,
  marginTop: 8,
};

const TabIcon = ({ name }: { name: string }) => (
  <Icon
    style={{
      width: 24,
      height: 24,
    }}
    fill={colors.primary}
    name={name}
  />
);

const DashboardNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.SETTINGS}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingHorizontal: 20,
          paddingVertical: 20,
          height: 92,
        },
      }}
      backBehavior="history"
    >
      <Tab.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: ROUTES.HOME,
          tabBarLabelStyle: commonTabStyle,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: '#B2B2B2',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <TabIcon name="home" />
            ) : (
              <TabIcon name={'home-outline'} />
            ),
        }}
      />
      <Tab.Screen
        name={ROUTES.ORDERS}
        component={OrdersScreen}
        options={{
          tabBarLabel: ROUTES.ORDERS,
          tabBarLabelStyle: commonTabStyle,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: '#B2B2B2',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <TabIcon name={'shopping-bag'} />
            ) : (
              <TabIcon name={'shopping-bag-outline'} />
            ),
        }}
      />
      <Tab.Screen
        name={ROUTES.SETTINGS}
        component={SettingsScreen}
        options={{
          tabBarLabel: ROUTES.SETTINGS,
          tabBarLabelStyle: commonTabStyle,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: '#B2B2B2',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <TabIcon name={'settings-2'} />
            ) : (
              <TabIcon name={'settings-2-outline'} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default DashboardNavigator;
