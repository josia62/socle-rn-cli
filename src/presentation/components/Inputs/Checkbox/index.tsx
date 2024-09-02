import React from 'react';
import { Check as CheckIcon } from '@tamagui/lucide-icons';
import type { CheckboxProps } from 'tamagui';
import { Checkbox, Label, XStack, YStack, Text } from 'tamagui';
import { Control, Controller } from 'react-hook-form';

interface Props {
  id: string;
  title: string;
  control: Control<any>; // Add control for react-hook-form
  name: string; // Add name for react-hook-form
  errors: any; // Add errors for react-hook-form
  isDefaultChecked?: boolean;
  isDisabled?: boolean;
}

export const CheckBox = ({ id, title, control, name, errors, isDefaultChecked, isDisabled }: Props) => {
  return (
    <YStack width={300} alignItems="center" gap="$2">
      <Controller
        control={control}
        name={name}
        defaultValue={isDefaultChecked} // Set default checked value
        render={({ field: { onChange, onBlur, value } }) => (
          <CheckboxWithLabel
            size="$5"
            id={id}
            label={title}
            checked={value} // Use 'checked' instead of 'defaultChecked' to sync with react-hook-form
            onCheckedChange={onChange} // Use onCheckedChange to update the state
            onBlur={onBlur}
            disabled={isDisabled}
          />
        )}
      />
      {errors[name] && (
        <Text color="red" marginTop="$2">
          {errors[name]?.message}
        </Text>
      )}
    </YStack>
  );
};

export const CheckboxWithLabel = ({
  size,
  label,
  id,
  ...checkboxProps
}: CheckboxProps & { label?: string }) => {
  return (
    <XStack width={300} alignItems="center" gap="$4">
      <Checkbox id={id} size={size} {...checkboxProps}>
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox>
      <Label size={size} htmlFor={id}>
        {label}
      </Label>
    </XStack>
  );
};
