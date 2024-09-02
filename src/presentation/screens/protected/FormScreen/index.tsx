import { View, Button } from 'react-native'
import { InputField } from '@/presentation/components/Inputs/InputField'
import { EXAMPLE_FIELD } from "@/data/dto/example/example-request.dto";
import { INPUT_TYPE } from '@/data/constants/types';
import { InputSelect } from '@/presentation/components/Inputs/InputSelect';
import { CheckBox } from '@/presentation/components/Inputs/Checkbox';
import { itemsSelect, itemsRadio } from '@/data/constants/data';
import { useFormulaire } from '@/hooks/Example/useFormulaire';

const FormScreen = () => {
  const data = {
    username: "josia",
    email: 'rafidinavalonajosia62@gmail.com',
    sex: "Apple"
  }
  const { control, errors, submitForm } = useFormulaire({ defaultValues : data});
  return (
    <View className="mx-5">
      <InputField title={EXAMPLE_FIELD.USER_NAME} type={INPUT_TYPE.SIMPLE} name={EXAMPLE_FIELD.USER_NAME} control={control} errors={errors}/>
      <InputField title={EXAMPLE_FIELD.EMAIL} type={INPUT_TYPE.SIMPLE} name={EXAMPLE_FIELD.EMAIL} control={control} errors={errors} />
      <InputSelect title={EXAMPLE_FIELD.SEX} items={itemsSelect} name={EXAMPLE_FIELD.SEX} control={control} errors={errors} defaultValue={itemsSelect[0].name} />
      <Button title="Submit" onPress={submitForm} />
    </View>
  )
}

export default FormScreen;
