
import React, { useState} from 'react'
import { Label, YStack } from 'tamagui'
import { SelectTamagui } from '../../SelectTamagui'

interface Props {
  name: string;
  title: string;
  items: any;
}

export const InputSelect = ({name, title, items }: Props) => {
  const [val, setVal] = useState("Apple")
  return (
    <YStack
      overflow="hidden"
      padding="$2"
    >
    <YStack>
      <Label htmlFor={name} width={90}>
        {title}
      </Label>
      <SelectTamagui props={{id: name, native: true }}  items={items} val={val} setVal={setVal} />
      </YStack>
      </YStack>
  );
}


