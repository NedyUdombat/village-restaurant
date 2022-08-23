import React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';

import styles from './styles';

const OrdersScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{}}>
        <View style={styles.viewContainer}>
          <Text>OrdersScreen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrdersScreen;
