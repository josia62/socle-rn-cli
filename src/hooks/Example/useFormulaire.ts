import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { formSchema } from "@/common/validator/zod/example.validator";
import { defaultExampleRequest } from '@/data/dto/example/example-request.dto';

export const useFormulaire = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: defaultExampleRequest,
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const submitForm = handleSubmit(onSubmit);

  return {
    control,
    errors,
    submitForm,
  };
};
