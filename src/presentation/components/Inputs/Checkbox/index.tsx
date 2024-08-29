import { Check as CheckIcon } from '@tamagui/lucide-icons'
import type { CheckboxProps } from 'tamagui'
import { Checkbox, Label, XStack, YStack } from 'tamagui'

interface Props {
    id: string;
    title: string;
    isDefaultChecked?: boolean,
    isDisabled?: boolean,
}

export const CheckBox = ({id, title, isDefaultChecked, isDisabled}: Props) => {
  return (
    <YStack width={300} alignItems="center" gap="$2">
      <CheckboxWithLabel 
      size="$5"
      id={id}
      label={title}
      defaultChecked={isDefaultChecked}
      disabled={isDisabled} />
    </YStack>
  )
}

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
    )
  }