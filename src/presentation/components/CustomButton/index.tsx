import { Button, YStack } from 'tamagui'

interface Props {
  title: string,
  onPress: () => void;
  isDisabled?: boolean,
  icon?: any,
}

export const CustomButton = ( { title, onPress, isDisabled, icon}: Props) => {
  return (
    <YStack padding="$3" gap="$3">
      <Button onPress={onPress} backgroundColor="$blue10" icon={icon} color="$white2" disabled={isDisabled}>{title}</Button>
    </YStack>
  )
}