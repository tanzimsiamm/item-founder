"use client";

import { Link } from "@heroui/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler } from "react-hook-form";

import RegisterValidationSchema from "../../schemas/register.schema";

import FxInput from "@/src/components/form/FxInput";
import FxForm from "@/src/components/form/FxForm";
import { useUserRegistration } from "@/src/hook/auth.hook";

const RegisterPage = () => {
  const { mutate: handleUserRegistration, isPending } = useUserRegistration();

  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    const userData = {
      ...data,
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    };

    handleUserRegistration(userData);
  };

  if (isPending) {
    // loading.......
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
          Create a new account
        </h2>

        <FxForm
          defaultValues={{
            name: "siam ahmed",
            email: "siam@gmail.com",
            mobileNumber: "0123456789",
            password: "123456",
          }}
          resolver={zodResolver(RegisterValidationSchema)}
          onSubmit={onSubmit}
        >
          <div className="space-y-5">
            <FxInput label="Name" name="name" type="text" />
            <FxInput label="Email" name="email" type="email" />
            <FxInput label="Mobile Number" name="mobileNumber" type="text" />
            <FxInput label="Password" name="password" type="password" />

            <button
              className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
              type="submit"
            >
              Register
            </button>
          </div>
        </FxForm>

        <p className="mt-6 text-sm text-center text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <Link
            className="text-blue-600 hover:underline dark:text-blue-400"
            href="/login"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
