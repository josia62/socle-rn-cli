import { View, Button } from 'react-native'
import { Activity, Airplay } from '@tamagui/lucide-icons'

import { InputField } from '@/presentation/components/Inputs/InputField'
import { EXAMPLE_FIELD, EXAMPLE_TITLE } from "@/data/dto/example/example-request.dto";
import { INPUT_TYPE } from '@/data/constants/types';
import { InputSelect } from '@/presentation/components/Inputs/InputSelect';
import { CheckBox } from '@/presentation/components/Inputs/Checkbox';
import { itemsSelect, itemsRadio } from '@/data/constants/data';
import { useFormulaire } from '@/hooks/Example/useFormulaire';
import { CustomButton } from '@/presentation/components/CustomButton';
import { BUTTON_TITLE } from '@/data/constants/strings';
import { RadioElement } from '@/presentation/components/Inputs/RadioGroup';

const FormScreen = () => {
  const { control, errors, submitForm } = useFormulaire();
  return (
    <View className="mx-5">
      <InputField title={EXAMPLE_TITLE.USER_NAME} type={INPUT_TYPE.SIMPLE} name={EXAMPLE_FIELD.USER_NAME} control={control} errors={errors}/>
      <InputField title={EXAMPLE_TITLE.EMAIL} type={INPUT_TYPE.SIMPLE} name={EXAMPLE_FIELD.EMAIL} control={control} errors={errors} />
      <InputSelect title={EXAMPLE_TITLE.SEX} items={itemsSelect} name={EXAMPLE_FIELD.SEX} control={control} errors={errors} defaultValue={itemsSelect[0].name} />
      <CheckBox
        id={EXAMPLE_FIELD.AGREE_TO_TERMS}
        title={EXAMPLE_TITLE.AGREE_TO_TERMS}
        control={control}
        name={EXAMPLE_FIELD.AGREE_TO_TERMS}
        errors={errors}
      />
       <RadioElement
        name={EXAMPLE_FIELD.SELECTED_OPTION}
        data={itemsRadio}
        control={control}
        errors={errors}
      />
      <CustomButton title={BUTTON_TITLE.SUBMIT} icon={Airplay} onPress={submitForm}/>
    </View>
  )
}

export default FormScreen;
