
import React from 'react'
import { Label, YStack } from 'tamagui'
import { Text } from 'react-native'
import { SelectTamagui } from '../../SelectTamagui'
import { Control } from 'react-hook-form/dist/types';
import { Controller } from 'react-hook-form';

interface Props {
  name: string;
  title: string;
  items: any;
  control: Control<any>;
  errors: any;
  defaultValue?: string;
}

export const InputSelect = ({name, title, items, control, errors, defaultValue}: Props) => {
  return (
    <YStack
      overflow="hidden"
      padding="$2"
    >
      <YStack>
        <Label htmlFor={name} width={90}>
          {title}
        </Label>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => (
        <SelectTamagui props={{id: name, native: true }}  items={items} val={value}
         setVal={onChange} defaultValue={defaultValue} />
          )}
          />
        {errors[name] && (
          <Text className='text-red-500 mt-2'>{errors[name]?.message}</Text>
        )}
      </YStack>
    </YStack>
  );
}


