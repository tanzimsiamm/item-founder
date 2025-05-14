"use client";

import FxForm from "@/src/components/form/FxForm";
import FxInput from "@/src/components/form/FxInput";
import { Link } from "@heroui/link";
import { zodResolver } from "@hookform/resolvers/zod";
import RegisterValidationSchema from "../../schemas/register.schema";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { registerUser } from "@/src/services/AuthService";

const RegisterPage = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    const userData = {
      ...data,
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    };

    registerUser(userData);
    console.log('user data', userData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
          Create a new account
        </h2>

        <FxForm
          onSubmit={onSubmit}
          resolver={zodResolver(RegisterValidationSchema)}
          defaultValues={{
            name: "siam ahmed",
            email: "siam@gmail.com",
            mobileNumber: "0123456789",
            password: "123456",
          }}
        >
          <div className="space-y-5">
            <FxInput type="text" name="name" label="Name" />
            <FxInput type="email" name="email" label="Email" />
            <FxInput type="text" name="mobile" label="Mobile Number" />
            <FxInput type="password" name="password" label="Password" />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Register
            </button>
          </div>
        </FxForm>

        <p className="mt-6 text-sm text-center text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
