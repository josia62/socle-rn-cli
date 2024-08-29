import type { SizeTokens } from 'tamagui'
import { Label, RadioGroup, XStack, YStack } from 'tamagui'

interface items {
  title: string,
  value: string,
}

interface props {
  name: string,
  data: items[],
}

export const RadioElement = ({ data, name }: props) => {
  return (
    <RadioGroup aria-labelledby="Select one item" defaultValue={data[0].title} name={name}>
      <YStack width={300} alignItems="center" space="$2">
        {data.map((item) => (
          <RadioGroupItemWithLabel key={item.value} size="$4" value={item.value} label={item.title} />
        ))}
      </YStack>
    </RadioGroup>
  );
};

export const RadioGroupItemWithLabel = (props: {
  size: SizeTokens
  value: string
  label: string
}) =>  {
  const id = `radiogroup-${props.value}`
  return (
    <XStack width={300} alignItems="center" space="$4">
      <RadioGroup.Item value={props.value} id={id} size={props.size}>
        <RadioGroup.Indicator />
      </RadioGroup.Item>
      <Label size={props.size} htmlFor={id}>
        {props.label}
      </Label>
    </XStack>
  )
}