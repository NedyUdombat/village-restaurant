import React from 'react';
import { Text, Avatar } from '@ui-kitten/components';
import { View } from 'react-native';

import styles from './styles';
import Button from '../button/Button';

const ProfileCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Avatar
          style={styles.avatar}
          size="giant"
          source={require('../../assets/images/avatar.png')}
        />
        <View style={styles.cardInfo}>
          <Text>Nedy Udombat</Text>
        </View>
      </View>
      <Button size="small" styles={styles.cardButton} appearance="outline">
        Edit
      </Button>
    </View>
  );
};

export default ProfileCard;
