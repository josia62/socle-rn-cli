import { Input, Label, TextArea, YStack } from 'tamagui';
import { INPUT_TYPE } from "@/data/constants/types";


interface Props {
  name: string;
  title: string;
  type: string;
  placeHolder?: string;
}

export const InputField = ({name, title, type, placeHolder = ''}: Props) => {
  const renderInput = () => {
    switch (type) {
      case INPUT_TYPE.SIMPLE:
        return <Input
        placeholder={placeHolder}
        borderWidth={2}
        focusStyle={{
          borderColor: 'black',
        }}
      />;
      case INPUT_TYPE.TEXT_AREA:
        return <TextArea
        placeholder={placeHolder}
        borderWidth={2}
        focusStyle={{
          borderColor: 'black',
        }}
      />;;
      default:
        return null;
    }
  };
  
  return (
    <YStack
      overflow="hidden"
      padding="$2"
    >
    <YStack>
        <Label width={90} htmlFor={name}>
          {title}
        </Label>
        {renderInput()}
      </YStack>
    </YStack>
  );
}
