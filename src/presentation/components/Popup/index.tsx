import { AlertDialog, Button, XStack, YStack } from 'tamagui'
import { BUTTON_TITLE } from '@/data/constants/strings'

interface Props {
  title?: string,
  message?: string,
  onPress?: () => void;
  onCancel?: () => void;
}

export const Popup = ({ title, message, onPress, onCancel } : Props) => {
  return (
    <AlertDialog native>
      <AlertDialog.Trigger asChild>
        <Button>Show Alert</Button>
      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay
          key="overlay"
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <AlertDialog.Content
          bordered
          elevate
          key="content"
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          x={0}
          scale={1}
          opacity={1}
          y={0}
        >
          <YStack space>
            <AlertDialog.Title>{title}</AlertDialog.Title>
            <AlertDialog.Description>
              {message}
            </AlertDialog.Description>
            <XStack gap="$3" justifyContent="flex-end">
              <AlertDialog.Cancel onPress={onCancel} asChild>
                <Button  >{BUTTON_TITLE.CANCEL}</Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action onPress={onPress} asChild>
                <Button theme="active">{BUTTON_TITLE.OK}</Button>
              </AlertDialog.Action>
            </XStack>
          </YStack>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog>
  )
}