import { View } from 'react-native'
import { InputField } from '@/presentation/components/Inputs/InputField'
import { EXAMPLE_FIELD } from "@/data/dto/example/example-request.dto";
import { INPUT_TYPE } from '@/data/constants/types';
import { InputSelect } from '@/presentation/components/Inputs/InputSelect';
import { CheckBox } from '@/presentation/components/Inputs/Checkbox';
import { itemsSelect, itemsRadio } from '@/data/constants/data';
import { RadioElement } from '@/presentation/components/Inputs/RadioGroup';

const FormScreen = () => {
  return (
    <View className="mx-5">
      <InputField title={EXAMPLE_FIELD.USER_NAME} type={INPUT_TYPE.SIMPLE} name={EXAMPLE_FIELD.USER_NAME} />
      <InputField title={EXAMPLE_FIELD.USER_NAME} type={INPUT_TYPE.TEXT_AREA} name={EXAMPLE_FIELD.USER_NAME} />
      <InputSelect title={EXAMPLE_FIELD.USER_NAME} items={itemsSelect} name={EXAMPLE_FIELD.USER_NAME} />
      <CheckBox id='iddd' title={EXAMPLE_FIELD.USER_NAME} />
      <RadioElement name={EXAMPLE_FIELD.USER_NAME} data={itemsRadio} />
    </View>
  )
}

export default FormScreen;
