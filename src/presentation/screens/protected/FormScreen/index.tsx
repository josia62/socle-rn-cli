import { View, Button } from 'react-native'
import { InputField } from '@/presentation/components/Inputs/InputField'
import { EXAMPLE_FIELD } from "@/data/dto/example/example-request.dto";
import { INPUT_TYPE } from '@/data/constants/types';
import { InputSelect } from '@/presentation/components/Inputs/InputSelect';
import { CheckBox } from '@/presentation/components/Inputs/Checkbox';
import { itemsSelect, itemsRadio } from '@/data/constants/data';
import { RadioElement } from '@/presentation/components/Inputs/RadioGroup';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from '@/common/validator/zod/example.validator';

const FormScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      email: "",
      sex: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("", data);
  };
  return (
    <View className="mx-5">
      <InputField title={EXAMPLE_FIELD.USER_NAME} type={INPUT_TYPE.SIMPLE} name={EXAMPLE_FIELD.USER_NAME} control={control} errors={errors}/>
      <InputField title={EXAMPLE_FIELD.EMAIL} type={INPUT_TYPE.TEXT_AREA} name={EXAMPLE_FIELD.EMAIL} control={control} errors={errors} />
      <InputSelect title={EXAMPLE_FIELD.SEX} items={itemsSelect} name={EXAMPLE_FIELD.SEX} control={control} errors={errors} />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  )
}

export default FormScreen;
