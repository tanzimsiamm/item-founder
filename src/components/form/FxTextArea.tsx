import { useFormContext } from "react-hook-form";
import { Textarea } from "@heroui/input";

import { IInput } from "@/src/types";

interface IProps extends IInput {
  type?: string;
}

export default function FXTextarea({
  name,
  label,
  variant = "bordered",
}: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Textarea {...register(name)} label={label} minRows={6} variant={variant} />
  );
}
