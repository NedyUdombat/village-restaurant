import React from 'react';
import { Button as UIButton, Spinner } from '@ui-kitten/components';
import { View } from 'react-native';

const LoadingIndicator = (props) => (
  <View
    style={{
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Spinner size="small" />
  </View>
);

const Button = (props) => {
  const { children, loading, title, styles, appearance, status } = props;
  return (
    <UIButton {...props} style={styles} appearance={appearance} status={status}>
      {loading ? <LoadingIndicator /> : children ? children : title}
    </UIButton>
  );
};

export default Button;
