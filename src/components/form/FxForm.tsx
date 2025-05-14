"use client";

import { ReactNode } from "react";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormProps,
  Resolver,
} from "react-hook-form";

interface FxFormProps {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
  resolver?: Resolver<any>;
  defaultValues?: Record<string, any>;
}

const FxForm = ({
  children,
  onSubmit,
  resolver,
  defaultValues,
}: FxFormProps) => {
  const formConfig: UseFormProps<any> = {};

  if (defaultValues) {
    formConfig.defaultValues = defaultValues;
  }

  if (resolver) {
    formConfig.resolver = resolver;
  }

  const methods = useForm(formConfig);
  const submitHandler = methods.handleSubmit;

  return (
    <FormProvider {...methods}>
      <form onSubmit={submitHandler(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default FxForm;
