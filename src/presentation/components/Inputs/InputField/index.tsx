import { Input, Label, TextArea, YStack } from 'tamagui';
import { INPUT_TYPE } from "@/data/constants/types";
import { Controller } from 'react-hook-form';
import { Control, FieldErrors } from 'react-hook-form/dist/types';
import React from 'react';
import { Text } from 'react-native'

interface Props {
  name: string;
  title: string;
  type: string;
  control: Control<any>;
  errors: any;
  defaultValue?: string;
}

export const InputField = ({ name, title, type, control, errors, defaultValue = '' }: Props) => {

  const renderInput = (onChange: (value: string) => void, onBlur: () => void, value: string): React.JSX.Element => {
    switch (type) {
      case INPUT_TYPE.SIMPLE:
        return (
          <Input
            placeholder={defaultValue}
            borderWidth={2}
            focusStyle={{ borderColor: 'black' }}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        );
      case INPUT_TYPE.TEXT_AREA:
        return (
          <TextArea
            placeholder={defaultValue}
            borderWidth={2}
            focusStyle={{ borderColor: 'black' }}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        );
      default:
        return <React.Fragment />;
    }
  };

  return (
    <YStack overflow="hidden" padding="$2">
      <YStack>
        <Label width={90} htmlFor={name}>
          {title}
        </Label>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value } }) => (
            renderInput(onChange, onBlur, value)
          )}
        />
        {errors[name] && (
          <Text className='text-red-500 mt-2'>{errors[name]?.message}</Text>
        )}
      </YStack>
    </YStack>
  );
};
