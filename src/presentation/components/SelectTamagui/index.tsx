import React from 'react'
import { Check, ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import type { SelectProps } from 'tamagui'
import { Adapt, Label, Select, Sheet, XStack, YStack } from 'tamagui'
import { LinearGradient } from 'tamagui/linear-gradient'

interface Props {
    props: SelectProps,
    items: any,
    val: string,
    setVal: any,
}

export const SelectTamagui = ({props, items, val, setVal} : Props) => {
    return (
      <Select value={val} onValueChange={setVal} disablePreventBodyScroll {...props}>
        <Select.Trigger width={220} iconAfter={ChevronDown}>
          <Select.Value placeholder="Something" />
        </Select.Trigger>
  
        <Adapt when="sm" platform="touch">
          <Sheet
            native={!!props.native}
            modal
            dismissOnSnapToBottom
            animationConfig={{
              type: 'spring',
              damping: 20,
              mass: 1.2,
              stiffness: 250,
            }}
          >
            <Sheet.Frame>
              <Sheet.ScrollView>
                <Adapt.Contents />
              </Sheet.ScrollView>
            </Sheet.Frame>
            <Sheet.Overlay
              animation="lazy"
              enterStyle={{ opacity: 0 }}
              exitStyle={{ opacity: 0 }}
            />
          </Sheet>
        </Adapt>
  
        <Select.Content zIndex={200000}>
          <Select.ScrollUpButton
            alignItems="center"
            justifyContent="center"
            position="relative"
            width="100%"
            height="$3"
          >
            <YStack zIndex={10}>
              <ChevronUp size={20} />
            </YStack>
            <LinearGradient
              start={[0, 0]}
              end={[0, 1]}
              fullscreen
              colors={['$background', 'transparent']}
              borderRadius="$4"
            />
          </Select.ScrollUpButton>
  
          <Select.Viewport
            minWidth={200}
          >
            <Select.Group>
              <Select.Label>Fruits</Select.Label>
              {React.useMemo(
                () =>
                  items.map((item: any, i: any) => {
                    return (
                      <Select.Item
                        index={i}
                        key={item.name}
                        value={item.name.toLowerCase()}
                      >
                        <Select.ItemText>{item.name}</Select.ItemText>
                        <Select.ItemIndicator marginLeft="auto">
                          <Check size={16} />
                        </Select.ItemIndicator>
                      </Select.Item>
                    )
                  }),
                [items]
              )}
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select>
    )
  }