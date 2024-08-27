import { View } from 'react-native'
import { InputField } from '@/presentation/components/Inputs/InputField'
import { EXAMPLE_FIELD } from "@/data/dto/example/example-request.dto";
import { INPUT_TYPE } from '@/data/constants/types';
import { InputSelect } from '@/presentation/components/Inputs/InputSelect';

const FormScreen = () => {
  const items = [
    { name: 'Apple' },
    { name: 'Pear' },
    { name: 'Blackberry' }, 
  ]
  return (
    <View className="mx-5">
      <InputField title={EXAMPLE_FIELD.USER_NAME} type={INPUT_TYPE.SIMPLE} name={EXAMPLE_FIELD.USER_NAME} />
      <InputField title={EXAMPLE_FIELD.USER_NAME} type={INPUT_TYPE.TEXT_AREA} name={EXAMPLE_FIELD.USER_NAME} />
      <InputSelect title={EXAMPLE_FIELD.USER_NAME} items={items} name={EXAMPLE_FIELD.USER_NAME} />
    </View>
  )
}

export default FormScreen;
