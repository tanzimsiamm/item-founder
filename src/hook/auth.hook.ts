import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../services/AuthService";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useUserRegistration = () =>{
    return useMutation({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData: FieldValues) => await registerUser(userData),
    onSuccess: (data) => {
      toast.success("User registered successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}