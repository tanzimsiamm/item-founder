"use client";

import FxForm from "@/src/components/form/FxForm";
import FxInput from "@/src/components/form/FxInput";
import { Link } from "@heroui/link";
import LoginValidationSchema from "../../schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginPage = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
          Login to your account
        </h2>

        <FxForm 
        onSubmit={onSubmit}
        resolver={zodResolver(LoginValidationSchema)}
        >
          <div className="space-y-5">
            <FxInput type="email" name="email" label="Email" />
            <FxInput type="password" name="password" label="Password" />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Login
            </button>
          </div>
        </FxForm>

        <p className="mt-6 text-sm text-center text-gray-600 dark:text-gray-300">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-600 hover:underline dark:text-blue-400">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
