import React from 'react';
import type { SizeTokens } from 'tamagui';
import { Label, RadioGroup, XStack, YStack, Text } from 'tamagui';
import { Controller, Control, FieldErrors } from 'react-hook-form';

interface Item {
  title: string;
  value: string;
}

interface RadioElementProps {
  name: string;
  data: Item[];
  control: Control<any>;
  errors: FieldErrors;
}

export const RadioElement = ({ data, name, control, errors }: RadioElementProps) => {
  return (
    <YStack width={300} alignItems="center" space="$2">
      <Controller
        control={control}
        name={name}
        defaultValue={data[0]?.value}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <RadioGroup
            aria-labelledby="Select one item"
            value={value}
            onValueChange={onChange}
            onBlur={onBlur}
          >
            {data.map((item) => (
              <RadioGroupItemWithLabel
                key={item.value}
                size="$4"
                value={item.value}
                label={item.title}
                ref={ref}
              />
            ))}
          </RadioGroup>
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

export const RadioGroupItemWithLabel = React.forwardRef<HTMLDivElement, {
  size: SizeTokens;
  value: string;
  label: string;
}>(({ size, value, label }, ref) => {
  const id = `radiogroup-${value}`;
  return (
    <XStack width={300} alignItems="center" space="$4">
      <RadioGroup.Item value={value} id={id} size={size} ref={ref}>
        <RadioGroup.Indicator />
      </RadioGroup.Item>
      <Label size={size} htmlFor={id}>
        {label}
      </Label>
    </XStack>
  );
});

RadioGroupItemWithLabel.displayName = 'RadioGroupItemWithLabel';

