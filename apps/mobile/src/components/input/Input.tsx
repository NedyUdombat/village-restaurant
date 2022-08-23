import React, { useState } from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  TextStyle,
  ViewStyle,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import { Controller, Control } from 'react-hook-form';
import { Input as InputBox } from '@ui-kitten/components';
import { Icon } from '@ui-kitten/components';

import styles from './styles';
import colors from '../../lib/colors';

interface InputProps {
  keyboardType?: KeyboardTypeOptions;
  placeholder?: string;
  inputStyle?: StyleProp<ViewStyle>;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  editable?: boolean;
  secureTextEntry?: boolean;
  name?: string;
  control: Control<any>;
  rules?: any;
}

export default function Input(props: InputProps) {
  const {
    keyboardType = 'default',
    placeholder,
    inputStyle,
    label,
    editable,
    secureTextEntry,
    containerStyle,
    control,
    name,
    rules = {},
  } = props;
  const [showPassword, setShowPassword] = useState<boolean>(secureTextEntry);
  const [isInFocus, setIsInFocus] = useState<boolean>(false);

  function toggleShowPassword() {
    console.log('hey');
    setShowPassword(!showPassword);
  }

  const renderInputIcon = (props) => {
    if (secureTextEntry) {
      return (
        <TouchableWithoutFeedback onPress={toggleShowPassword}>
          <Icon {...props} name={!showPassword ? 'eye' : 'eye-off'} />
        </TouchableWithoutFeedback>
      );
    }
    return null;
  };

  const renderCaption = (error) => {
    if (error) {
      return (
        <Text style={styles.errorMessage}>
          {error.message || 'An error occured'}
        </Text>
      );
    }
    return null;
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => {
        return (
          <View style={[styles.container, containerStyle]}>
            {label && <Text style={styles.labelStyle}>{label}</Text>}
            <View>
              <InputBox
                style={[
                  styles.input,
                  inputStyle,
                  {
                    borderColor: error ? colors.danger : colors.transparent,
                  },
                  {
                    borderColor: isInFocus
                      ? colors.primary
                      : colors.transparent,
                  },
                ]}
                placeholder={placeholder}
                placeholderTextColor=""
                keyboardType={keyboardType}
                value={value}
                onChangeText={onChange}
                editable={editable}
                secureTextEntry={showPassword}
                returnKeyType="done"
                onBlur={() => {
                  setIsInFocus(false);
                  onBlur();
                }}
                onFocus={() => setIsInFocus(true)}
                accessoryRight={renderInputIcon}
                caption={() => renderCaption(error)}
              />
            </View>
          </View>
        );
      }}
    />
  );
}
